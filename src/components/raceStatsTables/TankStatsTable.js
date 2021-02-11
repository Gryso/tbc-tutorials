import React from "react";
import "./raceStats.scss";
import getObjectKeysWithoutComponent from "../../utils/getObjectKeysWithoutComponent";
import {druid, paladin, warrior} from "./raceStats";

const raceStats = {
  druid: druid,
  paladin: paladin,
  warrior: warrior,
};

const TankStatsTable = () => {
  const wowClasses = getObjectKeysWithoutComponent(raceStats);

  return (
    <table className="tankStatsTable" aria-describedby="tank-stats">
      <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Race</th>
        <th scope="col">Agility</th>
        <th scope="col">Dodge</th>
        <th scope="col">Armor</th>
        <th scope="col">Stamina</th>
        <th scope="col">Health</th>
        <th scope="col">Health</th>
        <th scope="col">Defense</th>
        <th scope="col">Parry</th>
        <th scope="col">Block</th>
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
                <td>{raceStats[wowClass][race].baseStats.agility}</td>
                <td>{raceStats[wowClass][race].defenses.dodge}</td>
                <td>{raceStats[wowClass][race].defenses.armor}</td>
                <td>{raceStats[wowClass][race].baseStats.stamina}</td>
                <td>{raceStats[wowClass][race].health}</td>
                <td>{raceStats[wowClass][race].defenses.defense}</td>
                <td>{raceStats[wowClass][race].defenses.parry}</td>
                <td>{raceStats[wowClass][race].defenses.block}</td>
              </tr>
            );
          })}
          </tbody>
        );
      })}
    </table>
  );
};

export default TankStatsTable;
