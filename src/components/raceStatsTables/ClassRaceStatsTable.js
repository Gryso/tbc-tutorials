import React from "react";
import "./raceStats.scss";
import getObjectKeysWithoutComponent from "../../utils/getObjectKeysWithoutComponent";

function percentage(value) {
  return value ? `${value}%` : null;
}

const listOfStats = {
  health: {header: "Health", assessor: (oneRaceStats) => oneRaceStats.health},
  mana: {header: "Mana", assessor: (oneRaceStats) => oneRaceStats.mana},
  strength: {header: "Strength", assessor: (oneRaceStats) => oneRaceStats.baseStats.strength},
  agility: {header: "Agility", assessor: (oneRaceStats) => oneRaceStats.baseStats.agility},
  stamina: {header: "Stamina", assessor: (oneRaceStats) => oneRaceStats.baseStats.stamina},
  intellect: {header: "Intellect", assessor: (oneRaceStats) => oneRaceStats.baseStats.intellect},
  spirit: {header: "Spirit", assessor: (oneRaceStats) => oneRaceStats.baseStats.spirit},
  meleePower: {header: "Melee AP", assessor: (oneRaceStats) => oneRaceStats.melee.power},
  meleeCrit: {header: "Melee Crit", assessor: (oneRaceStats) => percentage(oneRaceStats.melee.crit)},
  rangedPower: {header: "Range AP", assessor: (oneRaceStats) => oneRaceStats.ranged.power},
  rangedCrit: {header: "Range Crit", assessor: (oneRaceStats) => percentage(oneRaceStats.ranged.crit)},
  spellCrit: {header: "Spell Crit", assessor: (oneRaceStats) => percentage(oneRaceStats.spell.crit)},
  spellRegen: {header: "Mana Regen", assessor: (oneRaceStats) => oneRaceStats.spell.regen},
  armor: {header: "Armor", assessor: (oneRaceStats) => oneRaceStats.defenses.armor},
  defense: {header: "Defense", assessor: (oneRaceStats) => oneRaceStats.defenses.defense},
  dodge: {header: "Dodge", assessor: (oneRaceStats) => percentage(oneRaceStats.defenses.dodge)},
  parry: {header: "Parry", assessor: (oneRaceStats) => percentage(oneRaceStats.defenses.parry)},
  block: {header: "Block", assessor: (oneRaceStats) => percentage(oneRaceStats.defenses.block)},
};

const ClassRaceStatsTable = ({raceStats, displayStats, describedby}) => {
  const wowClasses = getObjectKeysWithoutComponent(raceStats);

  return (
    <table className="classRaceStatsTable" aria-describedby={describedby}>
      <thead>
        <tr>
          <th scope="col">Class</th>
          <th scope="col">Race</th>
          {displayStats.map((stat, index) => <th scope="col" key={index}>{listOfStats[stat].header}</th>)}
        </tr>
      </thead>

      {wowClasses.map((wowClass, index) => {
        const classRaces = getObjectKeysWithoutComponent(raceStats[wowClass]);
        return (
          <tbody className={wowClass} key={index}>
            {classRaces.map((race, index) => {
              return (
                <tr key={index}>
                  {index === 0 ?
                    <th scope="row" rowSpan={classRaces.length} aria-label={wowClass}>
                      {raceStats[wowClass].component()}
                    </th> : null}
                  <td aria-label={race}>
                    {raceStats[wowClass][race].component()}
                  </td>
                  {displayStats.map((stat, index) =>
                    <td scope="col" key={index}>{listOfStats[stat].assessor(raceStats[wowClass][race])}</td>)
                  }
                </tr>
              );
            })}
          </tbody>
        );
      })}
    </table>
  );
};

export default ClassRaceStatsTable;
