import React from "react";
import "./armorReductionCalculator.scss"
import bossArmor from "../../data/bossArmor";

function ArmorReductionCalculator() {
  return (
    <div className="armorReductionCalculator">
      <ul>
        {
          Object.keys(bossArmor).map((instance, index) => {
            console.log('%c instance:', 'color: rgb(49, 193, 27)', instance);
            return (
              <li key={index}>
                {bossArmor[instance].component()}
                <ul>
                  {Object.keys(bossArmor[instance].encounters).map((encounter, index) => {
                    console.log('%c encounter:', 'color: rgb(49, 193, 27)', bossArmor[instance].encounters[encounter]);
                    return (
                      <li key={index}>
                        {encounter}:
                        <ul>
                          {Object.keys(bossArmor[instance].encounters[encounter]).map((boss, index) => {
                            console.log('%c x:', 'color: rgb(49, 193, 27)', boss);
                            return (
                              <li key={index}>
                                {boss}: {bossArmor[instance].encounters[encounter][boss]}
                              </li>
                            )
                          })}
                        </ul>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default ArmorReductionCalculator;
