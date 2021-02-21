import React, {useEffect, useState} from "react";
import "./classAndRacePicker.scss";
import {druid, hunter, mage, paladin, priest, rogue, shaman, warlock, warrior} from "../../data/raceStats";
import Icon from "../gameElements/icon/Icon";
import getRacesOfClasses from "../../utils/getRacesOfClasses";

const raceStats = {
  druid: druid,
  hunter: hunter,
  mage: mage,
  paladin: paladin,
  priest: priest,
  rogue: rogue,
  shaman: shaman,
  warlock: warlock,
  warrior: warrior
}


const ClassAndRacePicker = ({classes = Object.keys(raceStats), onChange}) => {
  const classRaces = getRacesOfClasses(classes);

  const [activeClass, setActiveClass] = useState(classes[0]);
  const [activeRace, setActiveRace] = useState(classRaces[classes[0]][0]);

  useEffect(() => {
    onChange({
      class: activeClass,
      race: activeRace
    })
  }, [activeClass, activeRace])

  return (
    <div className="classAndRacePicker">
      {classes.map((wowClass, index) =>
        <button
          key={index}
          className={activeClass === wowClass ? "active" : null}
          disabled={activeClass === wowClass}
          onClick={() => {
          setActiveClass(wowClass)
          setActiveRace(classRaces[wowClass][0])
        }}>
          <Icon type={wowClass} />
        </button>)}
      <br />
      {classRaces[activeClass].map((race, index) =>
        <button
          key={index}
          className={activeRace === race ? "active" : null}
          disabled={activeRace === race}
          onClick={() => {
          setActiveRace(race)
        }}>
          <Icon type={race} />
        </button>)}
    </div>
  );
};

export default ClassAndRacePicker;
