import React from "react";
import "./raceStats.scss";
import getObjectKeysWithoutComponent from "../../utils/getObjectKeysWithoutComponent";
import {druid, mage, priest, shaman, warlock} from "./raceStats";

const raceStats = {
  druid: druid,
  mage: mage,
  priest: priest,
  shaman: shaman,
  warlock: warlock,
};

const SpellDpsStatsTable = () => {
  const wowClasses = getObjectKeysWithoutComponent(raceStats);

  return (
    <table className="spellDpsStatsTable" aria-describedby="spell-dps-stats">
      <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Race</th>
        <th scope="col">Intellect</th>
        <th scope="col">Mana</th>
        <th scope="col">Spell Crit</th>
        <th scope="col">Spirit</th>
        <th scope="col">Mana Regen</th>
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
                <td>{raceStats[wowClass][race].baseStats.intellect}</td>
                <td>{raceStats[wowClass][race].mana}</td>
                <td>{raceStats[wowClass][race].spell.crit}</td>
                <td>{raceStats[wowClass][race].baseStats.spirit}</td>
                <td>{raceStats[wowClass][race].spell.regen}</td>
              </tr>
            );
          })}
          </tbody>
        );
      })}
    </table>
  );
};

export default SpellDpsStatsTable;
