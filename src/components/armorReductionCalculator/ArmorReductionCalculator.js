import React from "react";
import "./armorReductionCalculator.scss";
import bossArmor from "../../data/bossArmor";
import {damageReductionOfArmor} from "../../data/statsFormulas";

function calculateArmor(armor, reduction) {
  const result = armor - reduction;
  return result > 0 ? result : 0;
}

function createArmorComponent(reducedArmor, baseArmor = 7700) {
  let className;

  if (reducedArmor <= 0) {
    return <span className="zero">0</span>;
  } else if (reducedArmor <= baseArmor / 3) {
    className = "good";
  } else if (reducedArmor <= baseArmor * 2 / 3) {
    className = "medium";
  } else {
    className = "bad";
  }

  return <span className={className}>{reducedArmor}</span>;

}

function ArmorReductionCalculator({reduction = 0}) {
  return (
    <div className="armorReductionCalculator">
      <ul>
        {
          Object.keys(bossArmor).map((instance, index) => (
            <li key={index}>
              {bossArmor[instance].component()}
              <ul>
                {Object.keys(bossArmor[instance].encounters).map((encounter, index) => (
                  <React.Fragment key={index}>
                    <ul>
                      {Object.keys(bossArmor[instance].encounters[encounter]).map((boss, index) => {
                        let bossObject = bossArmor[instance].encounters[encounter][boss];
                        let reducedArmor = calculateArmor(bossObject.armor, reduction);
                        return (
                          <li key={index}>
                            {bossObject.component(bossObject.name)}
                            {": "}
                            {createArmorComponent(reducedArmor, bossObject.armor)}
                            {" Armor "}
                            (-{damageReductionOfArmor(reducedArmor, 70, true)}%)
                          </li>
                        );
                      })}
                    </ul>
                  </React.Fragment>
                ))}
              </ul>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ArmorReductionCalculator;
