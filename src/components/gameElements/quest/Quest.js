import React from "react";
import "./quest.scss";

const questIcons = {
  quest: require("../../../images/icons/questIcons/quest.png"),
  questComplete: require("../../../images/icons/questIcons/questcomplete.png"),
  daily: require("../../../images/icons/questIcons/daily.png"),
  dailyComplete: require("../../../images/icons/questIcons/dailycomplete.png"),
};

const QuestIcon = ({type = "unknown", size = "1em"}) => {

  return (
    <img
      src={questIcons[type]}
      alt={type}
      style={{
        alignSelf: "center",
        width: size,
        height: size,
      }}/>
  );
};


const Quest = ({children, id, difficulty = "default", type = "quest"}) => {

  if (id) {
    return (
      <a className={`quest ${difficulty}`} href={`https://tbc.cavernoftime.com/quest=${id}`}>
        <QuestIcon type={type} alt={type}/>
        {`[${children}]`}
      </a>
    );
  }

  return (
    <span className={`quest ${difficulty}`}>
      <QuestIcon type={type} alt={type}/>
      {`[${children}]`}
    </span>
  );
};

export default Quest;

