import React from "react";
import "./raceIcon.scss";

const raceIcons = {
  bloodelf: require("../../images/raceIcons/bloodelf.png"),
  draenei: require("../../images/raceIcons/draenei.png"),
  dwarf: require("../../images/raceIcons/dwarf.png"),
  gnome: require("../../images/raceIcons/gnome.png"),
  human: require("../../images/raceIcons/human.png"),
  nightelf: require("../../images/raceIcons/nightelf.png"),
  orc: require("../../images/raceIcons/orc.png"),
  tauren: require("../../images/raceIcons/tauren.png"),
  troll: require("../../images/raceIcons/troll.png"),
  undead: require("../../images/raceIcons/undead.png"),
  unknown: require("../../images/questionmark.png"),
}

const RaceIcon = ({className = "unknown", size = 40}) => {

  return (
    <img src={raceIcons[className]} alt={className} className="raceIcon" />
  );
};

export default RaceIcon;

