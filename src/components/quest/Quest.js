import React from "react";
import "./quest.scss";

const questIcons = {
  quest: require("../../images/questIcons/quest.png"),
  questComplete: require("../../images/questIcons/questcomplete.png"),
  daily: require("../../images/questIcons/daily.png"),
  dailyComplete: require("../../images/questIcons/dailycomplete.png"),
}

const Quest = ({children, id, difficulty = "default", type = "quest"}) => {

  if (id) {
    return (
      <a className={`questLink ${difficulty}`} href={`https://tbc.cavernoftime.com/quest=${id}`}>
        <img src={questIcons[type]} alt={type} className="questIcon" />
        {`[${children}]`}
      </a>
    );
  }

  return (
    <span className={difficulty}>
      <img src={questIcons[type]} alt={type} className="questIcon" />
      {`[${children}]`}
    </span>
  );
};

export default Quest;

