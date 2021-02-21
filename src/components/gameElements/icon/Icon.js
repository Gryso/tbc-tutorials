import React from "react";

const icons = {
  // classes
  druid: require("../../../images/icons/classIcons/druid.png"),
  hunter: require("../../../images/icons/classIcons/hunter.png"),
  mage: require("../../../images/icons/classIcons/mage.png"),
  paladin: require("../../../images/icons/classIcons/paladin.png"),
  priest: require("../../../images/icons/classIcons/priest.png"),
  rogue: require("../../../images/icons/classIcons/rogue.png"),
  shaman: require("../../../images/icons/classIcons/shaman.png"),
  warlock: require("../../../images/icons/classIcons/warlock.png"),
  warrior: require("../../../images/icons/classIcons/warrior.png"),

  // talentSpecialisation
  balance: require("../../../images/icons/talentSpecialisationIcons/balance.png"),
  feralCombat: require("../../../images/icons/talentSpecialisationIcons/feralcombat.png"),
  druidRestoration: require("../../../images/icons/talentSpecialisationIcons/druidRestoration.png"),
  beastMastery: require("../../../images/icons/talentSpecialisationIcons/beastmastery.png"),
  marksmanship: require("../../../images/icons/talentSpecialisationIcons/marksmanship.png"),
  survival: require("../../../images/icons/talentSpecialisationIcons/survival.png"),
  arcane: require("../../../images/icons/talentSpecialisationIcons/arcane.png"),
  fire: require("../../../images/icons/talentSpecialisationIcons/fire.png"),
  frost: require("../../../images/icons/talentSpecialisationIcons/frost.png"),
  paladinHoly: require("../../../images/icons/talentSpecialisationIcons/paladinHoly.png"),
  paladinProtection: require("../../../images/icons/talentSpecialisationIcons/paladinProtection.png"),
  retribution: require("../../../images/icons/talentSpecialisationIcons/retribution.png"),
  discipline: require("../../../images/icons/talentSpecialisationIcons/discipline.png"),
  priestHoly: require("../../../images/icons/talentSpecialisationIcons/priestHoly.png"),
  shadow: require("../../../images/icons/talentSpecialisationIcons/shadow.png"),
  assassination: require("../../../images/icons/talentSpecialisationIcons/assassination.png"),
  combat: require("../../../images/icons/talentSpecialisationIcons/combat.png"),
  subtlety: require("../../../images/icons/talentSpecialisationIcons/subtlety.png"),
  elemental: require("../../../images/icons/talentSpecialisationIcons/elemental.png"),
  enhancement: require("../../../images/icons/talentSpecialisationIcons/enhancement.png"),
  shamanRestoration: require("../../../images/icons/talentSpecialisationIcons/shamanRestoration.png"),
  affliction: require("../../../images/icons/talentSpecialisationIcons/affliction.png"),
  demonology: require("../../../images/icons/talentSpecialisationIcons/demonology.png"),
  destruction: require("../../../images/icons/talentSpecialisationIcons/destruction.png"),
  arms: require("../../../images/icons/talentSpecialisationIcons/arms.png"),
  fury: require("../../../images/icons/talentSpecialisationIcons/fury.png"),
  warriorProtection: require("../../../images/icons/talentSpecialisationIcons/warriorProtection.png"),

  // races
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

  // professions
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

  // factions
  alliance: require("../../../images/icons/factionIcons/alliance.png"),
  horde: require("../../../images/icons/factionIcons/horde.png"),

  // resistances
  arcaneResistance: require("../../../images/icons/resistanceIcons/arcane.png"),
  fireResistance : require("../../../images/icons/resistanceIcons/fire.png"),
  frostResistance: require("../../../images/icons/resistanceIcons/frost.png"),
  natureResistance: require("../../../images/icons/resistanceIcons/nature.png"),
  shadowResistance: require("../../../images/icons/resistanceIcons/shadow.png"),

  // instances
  blackTemple: require("../../../images/icons/instanceIcons/blackTemple.png"),
  doomLordKazzak: require("../../../images/icons/instanceIcons/doomLordKazzak.png"),
  doomWalker: require("../../../images/icons/instanceIcons/doomWalker.png"),
  gruulsLair: require("../../../images/icons/instanceIcons/gruulsLair.png"),
  hyjalSummit: require("../../../images/icons/instanceIcons/hyjalSummit.png"),
  karazhan: require("../../../images/icons/instanceIcons/karazhan.png"),
  magtheridonsLair: require("../../../images/icons/instanceIcons/magtheridonsLair.png"),
  serpentshrineCavern: require("../../../images/icons/instanceIcons/serpentshrineCavern.png"),
  tempestKeep: require("../../../images/icons/instanceIcons/tempestKeep.png"),
  zulAman: require("../../../images/icons/instanceIcons/zulAman.png"),

  // raid icons
  circle: require("../../../images/icons/raidIcons/circle.png"),
  cross: require("../../../images/icons/raidIcons/cross.png"),
  diamond: require("../../../images/icons/raidIcons/diamond.png"),
  moon: require("../../../images/icons/raidIcons/moon.png"),
  skull: require("../../../images/icons/raidIcons/skull.png"),
  square: require("../../../images/icons/raidIcons/square.png"),
  star: require("../../../images/icons/raidIcons/star.png"),
  triangle: require("../../../images/icons/raidIcons/triangle.png"),

  // equipment slots
  ammo: require("../../../images/icons/equipmentSlotIcons/ammo.png"),
  back: require("../../../images/icons/equipmentSlotIcons/back.png"),
  bag: require("../../../images/icons/equipmentSlotIcons/bag.png"),
  chest: require("../../../images/icons/equipmentSlotIcons/chest.png"),
  feet: require("../../../images/icons/equipmentSlotIcons/feet.png"),
  finger: require("../../../images/icons/equipmentSlotIcons/finger.png"),
  hands: require("../../../images/icons/equipmentSlotIcons/hands.png"),
  head: require("../../../images/icons/equipmentSlotIcons/head.png"),
  legs: require("../../../images/icons/equipmentSlotIcons/legs.png"),
  mainhand: require("../../../images/icons/equipmentSlotIcons/mainhand.png"),
  neck: require("../../../images/icons/equipmentSlotIcons/neck.png"),
  ranged: require("../../../images/icons/equipmentSlotIcons/ranged.png"),
  relic: require("../../../images/icons/equipmentSlotIcons/relic.png"),
  secondaryhand: require("../../../images/icons/equipmentSlotIcons/secondaryhand.png"),
  shirt: require("../../../images/icons/equipmentSlotIcons/shirt.png"),
  shoulder: require("../../../images/icons/equipmentSlotIcons/shoulder.png"),
  tabard: require("../../../images/icons/equipmentSlotIcons/tabard.png"),
  trinket: require("../../../images/icons/equipmentSlotIcons/trinket.png"),
  waist: require("../../../images/icons/equipmentSlotIcons/waist.png"),
  wrists: require("../../../images/icons/equipmentSlotIcons/wrists.png"),

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
