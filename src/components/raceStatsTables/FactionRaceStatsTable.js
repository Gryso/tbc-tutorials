import React from "react";
import "./raceStats.scss";
import raceStats from "../../data/raceStats";
import getObjectKeysWithoutComponent from "../../utils/getObjectKeysWithoutComponent";

const FactionRaceStatsTable = ({faction}) => {
  const wowClasses = getObjectKeysWithoutComponent(raceStats[faction]);

  return (
    <table className={`raceStatsTable ${faction}`} aria-describedby={faction}>
      <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Race</th>
        <th scope="col">Strength</th>
        <th scope="col">Agility</th>
        <th scope="col">Stamina</th>
        <th scope="col">Intellect</th>
        <th scope="col">Spirit</th>
        <th scope="col">Health</th>
        <th scope="col">Mana</th>
      </tr>
      </thead>

      {wowClasses.map((wowClass, index) => {
        const classRaces = getObjectKeysWithoutComponent(raceStats[faction][wowClass]);
        return (
          <tbody className={wowClass} key={index}>
          {classRaces.map((race, index) => {
            return (
              <tr key={index}>
                {index === 0 ?
                  <th scope="row" rowSpan={classRaces.length}
                      aria-label="druid">{raceStats[faction][wowClass].component()}</th>
                  : null}
                <td aria-label={raceStats[faction][wowClass][race].component()}>
                  {raceStats[faction][wowClass][race].component()}
                </td>
                <td>{raceStats[faction][wowClass][race].baseStats.strength}</td>
                <td>{raceStats[faction][wowClass][race].baseStats.agility}</td>
                <td>{raceStats[faction][wowClass][race].baseStats.stamina}</td>
                <td>{raceStats[faction][wowClass][race].baseStats.intellect}</td>
                <td>{raceStats[faction][wowClass][race].baseStats.spirit}</td>
                <td>{raceStats[faction][wowClass][race].health}</td>
                <td>{raceStats[faction][wowClass][race].mana}</td>
              </tr>
            );
          })}
          </tbody>
        );
      })}
    </table>
  );
};

export default FactionRaceStatsTable;
