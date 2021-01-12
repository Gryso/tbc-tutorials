import React from "react";

const icons = {
  druid: require("../../../images/icons/classIcons/druid.png"),
  hunter: require("../../../images/icons/classIcons/hunter.png"),
  mage: require("../../../images/icons/classIcons/mage.png"),
  paladin: require("../../../images/icons/classIcons/paladin.png"),
  priest: require("../../../images/icons/classIcons/priest.png"),
  rogue: require("../../../images/icons/classIcons/rogue.png"),
  shaman: require("../../../images/icons/classIcons/shaman.png"),
  warlock: require("../../../images/icons/classIcons/warlock.png"),
  warrior: require("../../../images/icons/classIcons/warrior.png"),

  bloodelf: require("../../../images/icons/raceIcons/bloodelf.png"),
  draenei: require("../../../images/icons/raceIcons/draenei.png"),
  dwarf: require("../../../images/icons/raceIcons/dwarf.png"),
  gnome: require("../../../images/icons/raceIcons/gnome.png"),
  human: require("../../../images/icons/raceIcons/human.png"),
  nightelf: require("../../../images/icons/raceIcons/nightelf.png"),
  orc: require("../../../images/icons/raceIcons/orc.png"),
  tauren: require("../../../images/icons/raceIcons/tauren.png"),
  troll: require("../../../images/icons/raceIcons/troll.png"),
  undead: require("../../../images/icons/raceIcons/undead.png"),

  alchemy: require("../../../images/icons/professionIcons/alchemy.png"),
  blacksmithing: require("../../../images/icons/professionIcons/blacksmithing.png"),
  cooking: require("../../../images/icons/professionIcons/cooking.png"),
  enchanting: require("../../../images/icons/professionIcons/enchanting.png"),
  engineering: require("../../../images/icons/professionIcons/engineering.png"),
  firstaid: require("../../../images/icons/professionIcons/firstaid.png"),
  fishing: require("../../../images/icons/professionIcons/fishing.png"),
  herbalism: require("../../../images/icons/professionIcons/herbalism.png"),
  jewelcrafting: require("../../../images/icons/professionIcons/jewelcrafting.png"),
  leatherworking: require("../../../images/icons/professionIcons/leatherworking.png"),
  mining: require("../../../images/icons/professionIcons/mining.png"),
  skinning: require("../../../images/icons/professionIcons/skinning.png"),
  tailoring: require("../../../images/icons/professionIcons/tailoring.png"),

  alliance: require("../../../images/icons/factionIcons/alliance.png"),
  horde: require("../../../images/icons/factionIcons/horde.png"),

  unknown: require("../../../images/icons/questionmark.png"),
};

const Icon = ({type = "unknown", size = "1em"}) => {

  return (
    <img
      src={icons[type]}
      alt={type}
      style={{
        width: size,
        height: size,
      }}/>
  );
};

export default Icon;

