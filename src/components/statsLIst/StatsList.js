import React from "react";
import "./statsList.scss";

const StatsList = ({listOfStats, describedby}) => {

  return (
    <table className="statsListTable" aria-describedby={describedby}>
      {listOfStats.map((stat) => {
        return (
          <tr>
            <th scope="row">{stat.description}</th>
            <td>{stat.value}</td>
          </tr>
        )
      })}
    </table>
  );
};

export default StatsList;
