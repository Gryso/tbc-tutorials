import React from "react";
import "./classIcon.scss";

const classIcons = {
  druid: require("../../images/classIcons/druid.png"),
  hunter: require("../../images/classIcons/hunter.png"),
  mage: require("../../images/classIcons/mage.png"),
  paladin: require("../../images/classIcons/paladin.png"),
  priest: require("../../images/classIcons/priest.png"),
  rogue: require("../../images/classIcons/rogue.png"),
  shaman: require("../../images/classIcons/shaman.png"),
  warlock: require("../../images/classIcons/warlock.png"),
  warrior: require("../../images/classIcons/warrior.png"),
  unknown: require("../../images/questionmark.png"),
}

const ClassIcon = ({className = "unknown", size = 40}) => {

  return (
    <img src={classIcons[className]} alt={className} className="classIcon" />
  );
};

export default ClassIcon;

