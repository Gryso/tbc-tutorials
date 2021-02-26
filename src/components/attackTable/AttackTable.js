import React, {useReducer} from "react";
import "./attackTable.scss";
import {druid, paladin, warrior} from "../../data/raceStats";
import Spell from "../gameElements/spell/Spell";
import Item from "../gameElements/item/Item";
import roundPositiveNumber from "../../utils/roundPositiveNumber";
import ClassAndRacePicker from "./ClassAndRacePicker";
import AttackTableGraph from "./AttackTableGraph";
import {BooleanInput, OneChoiceInput, PercentageInput} from "./AttackTableInputs";
import statsFormulas from "../../data/statsFormulas";
import Talent from "../gameElements/talent/Talent";

const tankClasses = {
  druid: druid,
  paladin: paladin,
  warrior: warrior
};

function agilityToDodge(value, wowClass) {
  if (wowClass === "druid") {
    return roundPositiveNumber(value * statsFormulas.druid.agiToDodge);
  }
  if (wowClass === "paladin") {
    return roundPositiveNumber(value * statsFormulas.paladin.agiToDodge);
  }
  if (wowClass === "warrior") {
    return roundPositiveNumber(value * statsFormulas.warrior.agiToDodge);
  }
}

// druid
//Feral Swifness
//Survival of the fittest

// paladin
// Rebaound
// Anticipation
// Holy shield
// Deflection

// Warrior
// Deflection
// Anticipation
// Shield specialization

// Shield Block

function createNewStateWithResults(state) {
  let critical = roundPositiveNumber(5.6 - state.critReduction);
  let crushing = 15;

  let block = roundPositiveNumber(state.block - 0.6);
  if (state.externalEffects.shieldBlock) {
    block = block + 75;
  }
  if (state.externalEffects.holyShield) {
    block = block + 30;
  }
  if (state.externalEffects.redoubt) {
    block = block + 30;
  }

  let parry = roundPositiveNumber(state.parry - 0.6);
  let dodge = roundPositiveNumber(state.dodge - 0.6);
  if (state.externalEffects.elixir === "elixirOfMajorAgility") {
    dodge = roundPositiveNumber((dodge + agilityToDodge(35, state.activeClass)));
  }
  if (state.externalEffects.graceOfAirTotem) {
    dodge = roundPositiveNumber((dodge + agilityToDodge(88, state.activeClass)));
  }
  if (state.externalEffects.markOfTheWild) {
    dodge = roundPositiveNumber((dodge + agilityToDodge(14, state.activeClass)));
  }

  let miss = roundPositiveNumber(state.miss - 0.6);
  if (state.externalEffects.hitReduce === "insectSwarm") {
    miss = miss + 2;
  }
  if (state.externalEffects.hitReduce === "scorpidSting") {
    miss = miss + 5;
  }

  if (state.externalEffects.elixir === "flaskOfFortification") {
    if (state.activeClass !== "druid") {
      block = roundPositiveNumber(block + 0.166666667);
      parry = roundPositiveNumber(parry + 0.166666667);
    }
    dodge = roundPositiveNumber(dodge + 0.166666667);
    miss = roundPositiveNumber(miss + 0.166666667);
    critical = roundPositiveNumber(critical - 0.166666667);
  }

  if (state.externalEffects.sunwellRadiance) {
    dodge = roundPositiveNumber(dodge - 20);
    miss = roundPositiveNumber(miss - 5);
  }

  if (state.externalEffects.direBearForm) {
    dodge = roundPositiveNumber(dodge + 4);
  }

  return {
    ...state,
    results: {
      hit: roundPositiveNumber(100 - critical - crushing - block - parry - dodge - miss),
      critical: critical,
      crushing: crushing,
      block: block,
      parry: parry,
      dodge: dodge,
      miss: miss
    }
  };
}

function addTalentValuesToDefaultStats(state) {
  if (state.activeClass === "druid") {
    return {
      ...state,
      critReduction: state.critReduction + 3,
    };
  }
  return {
    ...state,
    miss: state.miss + 0.8,
    critReduction: state.critReduction + 0.8,
    dodge: state.dodge + 0.8,
    parry: state.parry + 0.8 + 5,
    block: state.block + 0.8
  };
}


// actions
const CHANGE_CLASS = "CHANGE_CLASS";
const CHANGE_RACE = "CHANGE_RACE";
const CHANGE_STAT = "CHANGE_STAT";
const CHANGE_EXTERNAL_EFFECT = "CHANGE_EXTERNAL_EFFECT";

function reducer(state, action) {
  console.log('%c action:', 'color: rgb(49, 193, 27)', action);
  if (action.type === CHANGE_CLASS) {
    let newStateWithoutResults = {
      ...state,
      activeClass: action.class,
      activeRace: action.race,
      miss: 5,
      critReduction: 0,
      dodge: tankClasses[action.class][action.race].defenses.dodge,
      parry: tankClasses[action.class][action.race].defenses.block,
      block: tankClasses[action.class][action.race].defenses.block,
      externalEffects: {
        elixir: null,
        hitReduce: null,
        graceOfAirTotem: false,
        markOfTheWild: false,
        blessingOfKings: false,
        sunwellRadiance: false,
        direBearForm: action.class === "druid",
        shieldBlock: false,
        holyShield: false,
        redoubt: false,
      }
    };

    return createNewStateWithResults(addTalentValuesToDefaultStats(newStateWithoutResults));
  } else if (action.type === CHANGE_RACE) {
    let newStateWithoutResults = {
      ...state,
      activeRace: action.race,
      miss: 5,
      critReduction: 0,
      dodge: tankClasses[state.activeClass][action.race].defenses.dodge,
      parry: tankClasses[state.activeClass][action.race].defenses.block,
      block: tankClasses[state.activeClass][action.race].defenses.block,
    };

    return createNewStateWithResults(addTalentValuesToDefaultStats(newStateWithoutResults));
  } else if (action.type === CHANGE_STAT) {
    let newStateWithoutResults = {
      ...state,
      [action.stat]: action.value
    };

    return createNewStateWithResults(newStateWithoutResults);
  } else if (action.type === CHANGE_EXTERNAL_EFFECT) {
    let newStateWithoutResults = {
      ...state,
      externalEffects: {
        ...state.externalEffects,
        [action.effect]: action.value
      }
    };

    return createNewStateWithResults(newStateWithoutResults);
  } else {
    return state;
  }
}

let initialStateWithoutResults = {
  activeClass: null,
  activeRace: null,
  miss: 0,
  critReduction: 0,
  dodge: 0,
  parry: 0,
  block: 0,
  externalEffects: {
    elixir: null,
    hitReduce: null,
    graceOfAirTotem: false,
    markOfTheWild: false,
    blessingOfKings: false,
    sunwellRadiance: false,
    direBearForm: false,
    shieldBlock: false,
    holyShield: false,
    redoubt: false,
  }
};

const AttackTable = () => {
  const [state, dispatch] = useReducer(reducer, initialStateWithoutResults, createNewStateWithResults);

  return (
    <div className="attackTable">
      <AttackTableGraph
        statValues={state.results}
        orderOfStats={["miss", "dodge", "parry", "block", "crushing", "critical", "hit"]}
      />

      <ClassAndRacePicker
        classes={Object.keys(tankClasses)}
        onChange={(changes) => {
          if (changes.class === state.activeClass) {
            dispatch({
              type: CHANGE_RACE,
              race: changes.race
            });
          } else {
            dispatch({
              type: CHANGE_CLASS,
              class: changes.class,
              race: changes.race
            });
          }
        }}
      />

      <form className="stats">
        Player stats:
        <PercentageInput
          value={state.critReduction}
          name="Crit reduction"
          onChange={(value) => dispatch({
            type: CHANGE_STAT,
            stat: "critReduction",
            value: value
          })}
        />
        <PercentageInput
          value={state.miss}
          name="Miss"
          onChange={(value) => dispatch({
            type: CHANGE_STAT,
            stat: "miss",
            value: value
          })}
        />
        <PercentageInput
          value={state.dodge}
          name="Dodge"
          onChange={(value) => dispatch({
            type: CHANGE_STAT,
            stat: "dodge",
            value: value
          })}
        />
        <PercentageInput
          value={state.parry || ""}
          name={"Parry"}
          disabled={state.activeClass === "druid"}
          onChange={(value) => dispatch({
            type: CHANGE_STAT,
            stat: "parry",
            value: value
          })}
        />
        <PercentageInput
          value={state.block || ""}
          name={"Block"}
          disabled={state.activeClass === "druid"}
          onChange={(value) => dispatch({
            type: CHANGE_STAT,
            stat: "block",
            value: value
          })}
        />
        <br />
        Boss buffs/debuffs:
        <OneChoiceInput
          value={state.externalEffects.hitReduce}
          options={[
            {
              identifier: "insectSwarm",
              component: <Spell id={27013}>Insect Swarm</Spell>
            },
            {
              identifier: "scorpidSting",
              component: <Spell id={3043}>Scorpid Sting</Spell>
            }
          ]}
          onChange={(value) => dispatch({
            type: CHANGE_EXTERNAL_EFFECT,
            effect: "hitReduce",
            value: value
          })}
        />
        <BooleanInput
          value={state.externalEffects.sunwellRadiance}
          component={<Spell id={45769}>Sunwell Radiance</Spell>}
          onChange={(value) => dispatch({
            type: CHANGE_EXTERNAL_EFFECT,
            effect: "sunwellRadiance",
            value: value
          })}
        />
        <br />
        Player buffs:
        <BooleanInput
          value={state.externalEffects.graceOfAirTotem}
          component={<><Spell id={25359}>Grace of Air Totem</Spell>(Talented)</>}
          onChange={(value) => dispatch({
            type: CHANGE_EXTERNAL_EFFECT,
            effect: "graceOfAirTotem",
            value: value
          })}
        />
        <BooleanInput
          value={state.externalEffects.markOfTheWild}
          component={<><Spell id={26990}>Mark of the Wild</Spell>(?Talented?)</>}
          onChange={(value) => dispatch({
            type: CHANGE_EXTERNAL_EFFECT,
            effect: "markOfTheWild",
            value: value
          })}
        />


        <BooleanInput
          value={state.externalEffects.blessingOfKings}
          component={<Spell id={20217}>Blessing of Kings</Spell>}
          onChange={(value) => dispatch({
            type: CHANGE_EXTERNAL_EFFECT,
            effect: "blessingOfKings",
            value: value
          })}
        />


        <OneChoiceInput
          value={state.externalEffects.elixir}
          options={[
            {
              identifier: "elixirOfMajorAgility",
              component: <Item id={22831} quality="common">Elixir of Major Agility</Item>
            },
            {
              identifier: "flaskOfFortification",
              component: <Item id={22851} quality="common">Flask of Fortification</Item>
            }
          ]}
          onChange={(value) => dispatch({
            type: CHANGE_EXTERNAL_EFFECT,
            effect: "elixir",
            value: value
          })}
        />
        <br />
        Spells:
        {state.activeClass === "druid" ? <BooleanInput
          value={state.externalEffects.direBearForm}
          component={<Spell id="9634">Dire Bear Form</Spell>}
          onChange={(value) => dispatch({
            type: CHANGE_EXTERNAL_EFFECT,
            effect: "direBearForm",
            value: value
          })}
        /> : null}

        {state.activeClass === "warrior" ? <BooleanInput
          value={state.externalEffects.shieldBlock}
          component={<Spell id={2565}>Shield Block</Spell>}
          onChange={(value) => dispatch({
            type: CHANGE_EXTERNAL_EFFECT,
            effect: "shieldBlock",
            value: value
          })}
        /> : null}

        {state.activeClass === "paladin" ? <>
          <BooleanInput
            value={state.externalEffects.holyShield}
            component={<Spell id={27179}>Holy Shield</Spell>}
            onChange={(value) => dispatch({
              type: CHANGE_EXTERNAL_EFFECT,
              effect: "holyShield",
              value: value
            })}
          />
          <BooleanInput
            value={state.externalEffects.redoubt}
            component={<Talent id={20137}>Redoubt</Talent>}
            onChange={(value) => dispatch({
              type: CHANGE_EXTERNAL_EFFECT,
              effect: "redoubt",
              value: value
            })}
          />
        </> : null}
      </form>
    </div>
  );
};

export default AttackTable;
