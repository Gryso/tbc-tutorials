import React from "react";
import "./classAndRacePicker.scss";
import roundPositiveNumber from "../../utils/roundPositiveNumber";

function capAtHundredPercent(stats, statsOrder) {
  let sum = 0;
  let cappedStats = {};

  statsOrder.forEach((stat) => {
    if (sum >= 100) {
      cappedStats[stat] = 0;
    } else {
      let sumWithNewStat = roundPositiveNumber(sum + stats[stat]);

      if (sumWithNewStat <= 100) {
        cappedStats[stat] = stats[stat];
      }
      if (sumWithNewStat > 100) {
        cappedStats[stat] = roundPositiveNumber(100 - sum);
      }
      sum = sumWithNewStat;
    }
  });

  return cappedStats;
}


const AttackTableGraph = ({statValues, orderOfStats}) => {
  let cappedStatValues = capAtHundredPercent(statValues, orderOfStats);

  return (
    <div className="attackTableGraph">
      <div className="visualValues">
        {[...orderOfStats].reverse().map((stat, index) => (
          <div key={index} className={`value ${stat}`} style={{height: `${statValues[stat]}%`}} />
        ))}
      </div>
      <div className="numeralValues">
        {[...orderOfStats].reverse().map((stat, index) => (
          <div key={index} className={`value ${stat}`}>{stat}: {cappedStatValues[stat]}</div>
        ))}
      </div>
    </div>
  );
};

export default AttackTableGraph;
