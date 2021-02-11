import React from "react";
import "./raceStats.scss";
import getObjectKeysWithoutComponent from "../../utils/getObjectKeysWithoutComponent";
import {rogue, warrior} from "./raceStats";

const raceStats = {
  rogue: rogue,
  warrior: warrior,
};

const MeleePhysicalDpsStatsTable = () => {
  const wowClasses = getObjectKeysWithoutComponent(raceStats);

  return (
    <table className="meleePhysicalDpsStatsTable" aria-describedby="melee-physical-dps-stats">
      <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Race</th>
        <th scope="col">Strength</th>
        <th scope="col">Melee AP</th>
        <th scope="col">Agility</th>
        <th scope="col">Physical Crit</th>
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
                <td>{raceStats[wowClass][race].baseStats.strength}</td>
                <td>{raceStats[wowClass][race].melee.power}</td>
                <td>{raceStats[wowClass][race].baseStats.agility}</td>
                <td>{raceStats[wowClass][race].melee.crit}</td>
              </tr>
            );
          })}
          </tbody>
        );
      })}
    </table>
  );
};

export default MeleePhysicalDpsStatsTable;
