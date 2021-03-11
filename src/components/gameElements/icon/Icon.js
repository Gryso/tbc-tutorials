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

  // stances
  bearForm: require("../../../images/icons/stances/bearForm.png"),
  catForm: require("../../../images/icons/stances/catForm.png"),
  travelForm: require("../../../images/icons/stances/travelForm.png"),
  aquaticForm: require("../../../images/icons/stances/aquaticForm.png"),
  flightForm: require("../../../images/icons/stances/flightForm.png"),
  moonkinForm: require("../../../images/icons/stances/moonkinForm.png"),
  treeForm: require("../../../images/icons/stances/treeForm.png"),
  prowl: require("../../../images/icons/stances/prowl.png"),
  battleStance: require("../../../images/icons/stances/battleStance.png"),
  berserkerStance: require("../../../images/icons/stances/berserkerStance.png"),
  defensiveStance: require("../../../images/icons/stances/defensiveStance.png"),
  stealth: require("../../../images/icons/stances/stealth.png"),

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
  sunwellPlateau: require("../../../images/icons/instanceIcons/sunwellPlateau.png"),
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

  // bosses
  // bt
  gurtoggBloodboil: require("../../../images/icons/bossIcons/blackTemple/gurtoggBloodboil.gif"),
  illidariCouncil: require("../../../images/icons/bossIcons/blackTemple/illidariCouncil.png"),
  shadeOfAkama: require("../../../images/icons/bossIcons/blackTemple/shadeOfAkama.gif"),
  highWarlordNajentus: require("../../../images/icons/bossIcons/blackTemple/highWarlordNajentus.gif"),
  motherShahraz: require("../../../images/icons/bossIcons/blackTemple/motherShahraz.gif"),
  supremus: require("../../../images/icons/bossIcons/blackTemple/supremus.gif"),
  illidanStormrage: require("../../../images/icons/bossIcons/blackTemple/illidanStormrage.gif"),
  reliquaryOfSouls: require("../../../images/icons/bossIcons/blackTemple/reliquaryOfSouls.gif"),
  teronGorefiend: require("../../../images/icons/bossIcons/blackTemple/teronGorefiend.gif"),
  // gl
  gruulTheDragonkiller: require("../../../images/icons/bossIcons/gruulsLair/gruulTheDragonkiller.gif"),
  highKingMaulgar: require("../../../images/icons/bossIcons/gruulsLair/highKingMaulgar.gif"),
  // hs
  anetheron: require("../../../images/icons/bossIcons/hyjalSummit/anetheron.gif"),
  archimonde: require("../../../images/icons/bossIcons/hyjalSummit/archimonde.gif"),
  azgalor: require("../../../images/icons/bossIcons/hyjalSummit/azgalor.gif"),
  kazrogal: require("../../../images/icons/bossIcons/hyjalSummit/kazrogal.gif"),
  rageWinterchill: require("../../../images/icons/bossIcons/hyjalSummit/rageWinterchill.gif"),
  // kz
  attumenTheHuntsman: require("../../../images/icons/bossIcons/karazhan/attumenTheHuntsman.gif"),
  midnight: require("../../../images/icons/bossIcons/karazhan/midnight.gif"),
  netherspite: require("../../../images/icons/bossIcons/karazhan/netherspite.gif"),
  shadikithTheGlider: require("../../../images/icons/bossIcons/karazhan/shadikithTheGlider.gif"),
  bigBadWolf: require("../../../images/icons/bossIcons/karazhan/bigBadWolf.gif"),
  nightbane: require("../../../images/icons/bossIcons/karazhan/nightbane.gif"),
  terestianIllhoof: require("../../../images/icons/bossIcons/karazhan/terestianIllhoof.gif"),
  hyakissTheLurker: require("../../../images/icons/bossIcons/karazhan/hyakissTheLurker.gif"),
  princeMalchezaar: require("../../../images/icons/bossIcons/karazhan/princeMalchezaar.gif"),
  theCurator: require("../../../images/icons/bossIcons/karazhan/theCurator.gif"),
  kilrek: require("../../../images/icons/bossIcons/karazhan/kilrek.gif"),
  rokadTheRavager: require("../../../images/icons/bossIcons/karazhan/rokadTheRavager.gif"),
  wizardOfOz: require("../../../images/icons/bossIcons/karazhan/wizardOfOz.gif"),
  maidenOfVirtue: require("../../../images/icons/bossIcons/karazhan/maidenOfVirtue.gif"),
  romuloAndJulianne: require("../../../images/icons/bossIcons/karazhan/romuloAndJulianne.png"),
  moroes: require("../../../images/icons/bossIcons/karazhan/moroes.gif"),
  shadeOfAran: require("../../../images/icons/bossIcons/karazhan/shadeOfAran.gif"),
  // ml
  magtheridon: require("../../../images/icons/bossIcons/magtheridonsLair/magtheridon.gif"),
  // ssc
  fathomLordKarathress: require("../../../images/icons/bossIcons/serpentshrineCavern/fathomLordKarathress.gif"),
  ladyVashj: require("../../../images/icons/bossIcons/serpentshrineCavern/ladyVashj.gif"),
  morogrimTidewalker: require("../../../images/icons/bossIcons/serpentshrineCavern/morogrimTidewalker.gif"),
  hydrossTheUnstable: require("../../../images/icons/bossIcons/serpentshrineCavern/hydrossTheUnstable.gif"),
  leotherasTheBlind: require("../../../images/icons/bossIcons/serpentshrineCavern/leotherasTheBlind.gif"),
  theLurkerBelow: require("../../../images/icons/bossIcons/serpentshrineCavern/theLurkerBelow.gif"),
  // swp
  brutallus: require("../../../images/icons/bossIcons/sunwellPlateau/brutallus.gif"),
  eredarTwins: require("../../../images/icons/bossIcons/sunwellPlateau/eredarTwins.gif"),
  kalecgos: require("../../../images/icons/bossIcons/sunwellPlateau/kalecgos.gif"),
  muru: require("../../../images/icons/bossIcons/sunwellPlateau/muru.gif"),
  entropius: require("../../../images/icons/bossIcons/sunwellPlateau/entropius.gif"),
  felmyst: require("../../../images/icons/bossIcons/sunwellPlateau/felmyst.gif"),
  kiljaeden: require("../../../images/icons/bossIcons/sunwellPlateau/kiljaeden.gif"),
  handOfTheDeceiver: require("../../../images/icons/bossIcons/sunwellPlateau/handOfTheDeceiver.gif"),
  sathrovarrTheCorruptor: require("../../../images/icons/bossIcons/sunwellPlateau/sathrovarrTheCorruptor.gif"),
  shadowswordBerserker: require("../../../images/icons/bossIcons/sunwellPlateau/shadowswordBerserker.gif"),
  shadowswordFuryMage: require("../../../images/icons/bossIcons/sunwellPlateau/shadowswordFuryMage.gif"),
  voidSentinel: require("../../../images/icons/bossIcons/sunwellPlateau/voidSentinel.gif"),
  // eye
  alar: require("../../../images/icons/bossIcons/theEye/alar.png"),
  highAstromancerSolarian: require("../../../images/icons/bossIcons/theEye/highAstromancerSolarian.png"),
  kaelthasSunstrider: require("../../../images/icons/bossIcons/theEye/kaelthasSunstrider.gif"),
  voidReaver: require("../../../images/icons/bossIcons/theEye/voidReaver.gif"),
  // za
  akilzon: require("../../../images/icons/bossIcons/zulAman/akilzon.gif"),
  halazzi: require("../../../images/icons/bossIcons/zulAman/halazzi.gif"),
  janalai: require("../../../images/icons/bossIcons/zulAman/janalai.gif"),
  nalorakk: require("../../../images/icons/bossIcons/zulAman/nalorakk.gif"),
  hexLordMalacrass: require("../../../images/icons/bossIcons/zulAman/hexLordMalacrass.gif"),
  zuljin: require("../../../images/icons/bossIcons/zulAman/zuljin.gif"),

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

  // minions
  felguard: require("../../../images/icons/minionIcons/felguard.png"),
  felhunter: require("../../../images/icons/minionIcons/felhunter.png"),
  imp: require("../../../images/icons/minionIcons/imp.png"),
  infernal: require("../../../images/icons/minionIcons/infernal.png"),
  shadowfiend: require("../../../images/icons/minionIcons/shadowfiend.png"),
  succubus: require("../../../images/icons/minionIcons/succubus.png"),
  totem: require("../../../images/icons/minionIcons/totem.png"),
  treant: require("../../../images/icons/minionIcons/treant.png"),
  voidwalker: require("../../../images/icons/minionIcons/voidwalker.png"),
  waterElemental: require("../../../images/icons/minionIcons/waterElemental.png"),
  // hunter
  bat: require("../../../images/icons/minionIcons/bat.gif"),
  birdOfPray: require("../../../images/icons/minionIcons/birdOfPray.gif"),
  wolf: require("../../../images/icons/minionIcons/wolf.gif"),

  //currencies
  gold: require("../../../images/icons/currency/gold.png"),
  silver: require("../../../images/icons/currency/silver.png"),
  copper: require("../../../images/icons/currency/copper.png"),

  abMark: require("../../../images/icons/currency/abMark.png"),
  avMark: require("../../../images/icons/currency/avMark.png"),
  eotsMark: require("../../../images/icons/currency/eotsMark.png"),
  wsgMark: require("../../../images/icons/currency/wsgMark.png"),
  arenaPoints: require("../../../images/icons/currency/arenaPoints.png"),
  honor: require("../../../images/icons/currency/honor.gif"),

  boj: require("../../../images/icons/currency/boj.png"),

  // defenses
  block: require("../../../images/icons/defenseIcons/block.png"),
  dodge: require("../../../images/icons/defenseIcons/dodge.png"),
  parry: require("../../../images/icons/defenseIcons/parry.png"),

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
