import React, {useEffect, useState} from "react";
import "./classAndRacePicker.scss";
import {druid, hunter, mage, paladin, priest, rogue, shaman, warlock, warrior} from "../../data/raceStats";
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
};

const classIcons = {
  druid: require("../../images/icons/classIcons/druid.png"),
  hunter: require("../../images/icons/classIcons/hunter.png"),
  mage: require("../../images/icons/classIcons/mage.png"),
  paladin: require("../../images/icons/classIcons/paladin.png"),
  priest: require("../../images/icons/classIcons/priest.png"),
  rogue: require("../../images/icons/classIcons/rogue.png"),
  shaman: require("../../images/icons/classIcons/shaman.png"),
  warlock: require("../../images/icons/classIcons/warlock.png"),
  warrior: require("../../images/icons/classIcons/warrior.png"),
};

const raceIcons = {
  bloodelf: require("../../images/icons/raceIcons/bloodelf.png"),
  draenei: require("../../images/icons/raceIcons/draenei.png"),
  dwarf: require("../../images/icons/raceIcons/dwarf.png"),
  gnome: require("../../images/icons/raceIcons/gnome.png"),
  human: require("../../images/icons/raceIcons/human.png"),
  nightelf: require("../../images/icons/raceIcons/nightelf.png"),
  orc: require("../../images/icons/raceIcons/orc.png"),
  tauren: require("../../images/icons/raceIcons/tauren.png"),
  troll: require("../../images/icons/raceIcons/troll.png"),
  undead: require("../../images/icons/raceIcons/undead.png"),
};


const ClassAndRacePicker = ({classes = Object.keys(raceStats), onChange}) => {
  const classRaces = getRacesOfClasses(classes);

  const [activeClass, setActiveClass] = useState(classes[0]);
  const [activeRace, setActiveRace] = useState(classRaces[classes[0]][0]);

  useEffect(() => {
    onChange({
      class: activeClass,
      race: activeRace
    });
  }, [activeClass, activeRace, onChange]);

  return (
    <div className="classAndRacePicker">
      <div className="classPicker">
        {classes.map((wowClass, index) =>
          <input
            alt={wowClass}
            type="image"
            src={classIcons[wowClass]}
            key={index}
            className={activeClass === wowClass ? "active" : null}
            disabled={activeClass === wowClass}
            onClick={() => {
              setActiveClass(wowClass);
              setActiveRace(classRaces[wowClass][0]);
            }}
          />
        )}
      </div>
      <div className="racePicker">
        {classRaces[activeClass].map((race, index) =>
          <input
            alt={race}
            type="image"
            src={raceIcons[race]}
            key={index}
            className={activeRace === race ? "active" : null}
            disabled={activeRace === race}
            onClick={() => {
              setActiveRace(race);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ClassAndRacePicker;
