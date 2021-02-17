import React, {useReducer} from "react";
import "./attackTable.scss";
import {druid, paladin, warrior} from "../../utils/raceStats";
import Icon from "../gameElements/icon/Icon";
import Spell from "../gameElements/spell/Spell";
import getRacesOfClasses from "../../utils/getRacesOfClasses";
import Item from "../gameElements/item/Item";
import roundPositiveNumber from "../../utils/roundPositiveNumber";

const DEFAULT_CLASS = "warrior";

const tankClasses = {
  druid: druid,
  paladin: paladin,
  warrior: warrior
};

const classRaces = getRacesOfClasses(Object.keys(tankClasses));


const PercentageInput = ({value, dispatch, name, disabled}) => (
  <label>
    {name}:
    <input
      max="100"
      min="0"
      step="0.01"
      type="number"
      disabled={disabled}
      value={value}
      onChange={(event) => dispatch({
        type: CHANGE_STAT,
        stat: name,
        value: event.target.value
      })}
    />
  </label>
);

const CheckBoxInput = ({value, spell, dispatchObject, dispatch}) => (
  <label>
    <input
      type="checkbox"
      checked={value}
      onChange={() => dispatch({
        type: CHANGE_EXTERNAL_EFFECT,
        ...dispatchObject
      })}
    />
    {spell}
  </label>
);


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
  console.log('%c state:', 'color: rgb(49, 193, 27)', state);
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
    dodge = roundPositiveNumber(dodge + 2.8); // NEVIEM KOLKO TU JE
  }
  if (state.externalEffects.graceOfAirTotem) {
    dodge = roundPositiveNumber(dodge + 7.8); // NEVIEM KOLKO TU JE
  }

  let miss = roundPositiveNumber(state.miss - 0.6);
  if (state.externalEffects.hitReduce === "insectSwarm") {
    miss = miss + 2;
  }
  if (state.externalEffects.hitReduce === "scorpidSting") {
    miss = miss + 5;
  }

  if (state.externalEffects.elixir === "flaskOfFortification") {
    // NEVIEM KOLKO TU JE
    block = roundPositiveNumber(block + 2.8);
    parry = roundPositiveNumber(parry + 2.8);
    dodge = roundPositiveNumber(dodge + 2.8);
    miss = roundPositiveNumber(miss + 2.8);
    critical = roundPositiveNumber(critical - 2.8)
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
      possibleRaces: classRaces[action.class],
      activeRace: classRaces[action.class][0],
      miss: 5,
      critReduction: 0,
      dodge: tankClasses[action.class][classRaces[action.class][0]].defenses.dodge,
      parry: tankClasses[action.class][classRaces[action.class][0]].defenses.block,
      block: tankClasses[action.class][classRaces[action.class][0]].defenses.block,
      externalEffects: {
        elixir: null,
        hitReduce: null,
        graceOfAirTotem: false,
        holyShield: false,
        redoubt: false,
        shieldBlock: false,
      }
    };
    return createNewStateWithResults(newStateWithoutResults);
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
    return createNewStateWithResults(newStateWithoutResults);
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
  activeClass: DEFAULT_CLASS,
  possibleRaces: classRaces[DEFAULT_CLASS],
  activeRace: classRaces[DEFAULT_CLASS][0],
  miss: 5,
  critReduction: 0,
  dodge: tankClasses[DEFAULT_CLASS][classRaces[DEFAULT_CLASS][0]].defenses.dodge,
  parry: tankClasses[DEFAULT_CLASS][classRaces[DEFAULT_CLASS][0]].defenses.block,
  block: tankClasses[DEFAULT_CLASS][classRaces[DEFAULT_CLASS][0]].defenses.block,
  externalEffects: {
    elixir: null,
    hitReduce: null,
    graceOfAirTotem: false,
    holyShield: false,
    redoubt: false,
    shieldBlock: false,
  }
};

const AttackTable = () => {
  const [state, dispatch] = useReducer(reducer, initialStateWithoutResults, createNewStateWithResults);

  return (
    <div className="attackTable">
      <div className="values">
        <div className="value hit" style={{height: `${state.results.hit}%`}} />
        <div className="value critical" style={{height: `${state.results.critical}%`}} />
        <div className="value crushing" style={{height: `${state.results.crushing}%`}} />
        <div className="value block" style={{height: `${state.results.block}%`}} />
        <div className="value parry" style={{height: `${state.results.parry}%`}} />
        <div className="value dodge" style={{height: `${state.results.dodge}%`}} />
        <div className="value miss" style={{height: `${state.results.miss}%`}} />
      </div>

      <div className="classesAndRaces">
        {Object.keys(tankClasses).map((tankClass, index) =>
          <button key={index} onClick={() => {
            dispatch({
              type: CHANGE_CLASS,
              class: tankClass
            });
          }}>
            <Icon type={tankClass} />
          </button>)}
        <br />
        {state.possibleRaces.map((race, index) =>
          <button key={index} onClick={() => {
            dispatch({
              type: CHANGE_RACE,
              race: race
            });
          }}>
            <Icon type={race} />
          </button>)}
      </div>

      <form className="stats">
        <PercentageInput
          value={state.critReduction}
          dispatch={dispatch}
          name={"critReduction"}
        />
        <PercentageInput
          value={state.miss}
          dispatch={dispatch}
          name={"miss"}
        />
        <PercentageInput
          value={state.dodge}
          dispatch={dispatch}
          name={"dodge"}
        />
        <PercentageInput
          value={state.parry || ""}
          dispatch={dispatch}
          name={"parry"}
          disabled={state.activeClass === "druid"}
        />
        <PercentageInput
          value={state.block || ""}
          dispatch={dispatch}
          name={"block"}
          disabled={state.activeClass === "druid"}
        />
        <CheckBoxInput
          value={state.externalEffects.hitReduce === "insectSwarm"}
          dispatchObject={{
            effect: "hitReduce",
            value: state.externalEffects.hitReduce === "insectSwarm" ? null : "insectSwarm"
          }}
          dispatch={dispatch}
          spell={<Spell id={27013}>Insect Swarm</Spell>}
        />
        <CheckBoxInput
          value={state.externalEffects.hitReduce === "scorpidSting"}
          dispatchObject={{
            effect: "hitReduce",
            value: state.externalEffects.hitReduce === "scorpidSting" ? null : "scorpidSting"
          }}
          dispatch={dispatch}
          spell={<Spell id={3043}>Scorpid Sting</Spell>}
        />
        <CheckBoxInput
          value={state.externalEffects.elixir === "elixirOfMajorAgility"}
          dispatchObject={{
            effect: "elixir",
            value: state.externalEffects.elixir === "elixirOfMajorAgility" ? null : "elixirOfMajorAgility"
          }}
          dispatch={dispatch}
          spell={<Item id={22831} quality="common">Elixir of Major Agility</Item>}
        />
        <CheckBoxInput
          value={state.externalEffects.elixir === "flaskOfFortification"}
          dispatchObject={{
            effect: "elixir",
            value: state.externalEffects.elixir === "flaskOfFortification" ? null : "flaskOfFortification"
          }}
          dispatch={dispatch}
          spell={<Item id={22851} quality="common">Flask of Fortification</Item>}
        />
        <CheckBoxInput
          value={state.externalEffects.graceOfAirTotem}
          dispatchObject={{
            effect: "graceOfAirTotem",
            value: !state.externalEffects.graceOfAirTotem
          }}
          dispatch={dispatch}
          spell={<><Spell id={25359}>Grace of Air Totem</Spell> (talented)</>}
        />
        {state.activeClass === "warrior" ? <CheckBoxInput
          value={state.externalEffects.shieldBlock}
          dispatchObject={{
            effect: "shieldBlock",
            value: !state.externalEffects.shieldBlock
          }}
          dispatch={dispatch}
          spell={<Spell id={2565}>Shield Block</Spell>}
        /> : null}
        {state.activeClass === "paladin" ? <>
          <CheckBoxInput
            value={state.externalEffects.holyShield}
            dispatchObject={{
              effect: "holyShield",
              value: !state.externalEffects.holyShield
            }}
            dispatch={dispatch}
            spell={<Spell id={27179}>Holy Shield</Spell>}
          />
          <CheckBoxInput
            value={state.externalEffects.redoubt}
            dispatchObject={{
              effect: "redoubt",
              value: !state.externalEffects.redoubt
            }}
            dispatch={dispatch}
            spell={<Spell id={20137}>Redoubt</Spell>}
          />
        </> : null}
      </form>
    </div>
  );
};

export default AttackTable;
