import React from "react";
import "./statsList.scss";

const StatsList = ({listOfStats, describedby}) => {

  return (
    <table className="statsListTable" aria-describedby={describedby}>
      <tbody>
        {listOfStats.map((stat, index) => {
          return (
            <tr key={index}>
              <th scope="row">{stat.description}</th>
              <td>{stat.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StatsList;
