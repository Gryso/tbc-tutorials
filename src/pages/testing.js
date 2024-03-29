import React from "react";
import MainLayout from "../components/layouts/mainLayout/MainLayout";
import Item from "../components/gameElements/item/Item";
import Quest from "../components/gameElements/quest/Quest";
import Spell from "../components/gameElements/spell/Spell";
import Talent from "../components/gameElements/talent/Talent";
import Icon from "../components/gameElements/icon/Icon";
import {Alliance, Horde} from "../components/gameElements/faction/factions";
import {
  Alchemy,
  Blacksmithing,
  Cooking,
  Enchanting,
  Engineering,
  Firstaid,
  Fishing,
  Herbalism,
  Jewelcrafting,
  Leatherworking,
  Mining,
  Skinning,
  Tailoring
} from "../components/gameElements/profession/professions";
import {
  Druid,
  Hunter,
  Mage,
  Paladin,
  Priest,
  Rogue,
  Shaman,
  Warlock,
  Warrior
} from "../components/gameElements/class/classes";
import {
  Bloodelf,
  Draenei,
  Dwarf,
  Gnome,
  Human,
  Nightelf,
  Orc,
  Tauren,
  Troll,
  Undead
} from "../components/gameElements/race/races";
import TestSideMenu from "../components/menus/sideMenus/TestSideMenu";
import {Heading2, Heading3, Heading4, Title} from "../components/headers/headers";
import Author from "../components/author/Author";
import SideMenuLayout from "../components/layouts/sideMenuLayout/SideMenuLayout";
import SimpleMacro from "../components/macro/SimpleMacro";
import EquipmentSet from "../components/equipment/equipSet/EquipmentSet";
import EquipmentList from "../components/equipment/equipmentList/EquipmentList";
import StatsList from "../components/statsLIst/StatsList";
import {druid, paladin, warrior} from "../data/raceStats";
import ClassRaceStatsTable from "../components/raceStatsTables/ClassRaceStatsTable";
import FactionRaceStatsTable from "../components/raceStatsTables/FactionRaceStatsTable";
import PriestRacialsTable from "../components/raceStatsTables/PriestRacialsTable";
import {
  ArcaneResistance,
  FireResistance,
  FrostResistance,
  NatureResistance,
  ShadowResistance
} from "../components/gameElements/resistances/Resistances";
import {
  BlackTemple,
  DoomLordKazzak,
  DoomWalker,
  GruulsLair,
  HyjalSummit, Karazhan, MagtheridonsLair, SerpentshrineCavern, TempestKeep, ZulAman
} from "../components/gameElements/instance/Instances";
import {
  Affliction,
  Arcane, Arms,
  Assassination,
  Balance,
  BeastMastery,
  Combat, Demonology, Destruction,
  Discipline,
  DruidRestoration, Elemental, Enhancement,
  FeralCombat,
  Fire,
  Frost, Fury,
  Marksmanship,
  PaladinHoly,
  PaladinProtection,
  PriestHoly,
  Retribution,
  Shadow, ShamanRestoration,
  Subtlety,
  Survival, WarriorProtection
} from "../components/gameElements/talentSpecialisation/TalentSpecialisations";
import {
  Felguard,
  Felhunter,
  Imp,
  Infernal, Shadowfiend,
  Succubus,
  Totem, Treant,
  Voidwalker, WaterElemental
} from "../components/gameElements/minion/minions";
import {
  Akilzon,
  Alar,
  Anetheron,
  Archimonde,
  AttumenTheHuntsman,
  Azgalor,
  BigBadWolf, Brutallus, Entropius, EredarTwins, FathomLordKarathress, Felmyst,
  GruulTheDragonkiller,
  GurtoggBloodboil, Halazzi, HighAstromancerSolarian,
  HighKingMaulgar,
  HighWarlordNajentus,
  HyakissTheLurker, HydrossTheUnstable,
  IllidanStormrage,
  IllidariCouncil, Janalai, KaelthasSunstrider, Kalecgos,
  Kazrogal, Kiljaeden,
  Kilrek, LadyVashj, LeotherasTheBlind, Magtheridon, MaidenOfVirtue, Moroes, MorogrimTidewalker,
  MotherShahraz, Muru, Nalorakk,
  Netherspite,
  Nightbane,
  PrinceMalchezaar,
  RageWinterchill,
  ReliquaryOfSouls, RokadTheRavager, RomuloAndJulianne, SathrovarrTheCorruptor,
  ShadeOfAkama, ShadeOfAran,
  ShadikithTheGlider,
  Supremus,
  TerestianIllhoof,
  TeronGorefiend,
  TheCurator, TheLurkerBelow, VoidReaver, WizardOfOz,
  Zuljin
} from "../components/gameElements/boss/bosses";
import {
  AquaticForm, BattleStance,
  BearForm, BerserkerStance,
  CatForm, DefensiveStance,
  FlightForm, MoonkinForm, Prowl, Stealth,
  SwiftFlightForm,
  TravelForm, TreeForm
} from "../components/gameElements/stances/stances";
import {
  AbMark,
  ArenaPoints,
  AvMark, Boj,
  Copper,
  EotsMark,
  Gold, Honor,
  Silver,
  WsgMark
} from "../components/gameElements/currency/currency";

const testing = () => {
  return (
    <MainLayout>
      <SideMenuLayout sideMenu={TestSideMenu}>
        <Title>Testing</Title>
        <Author>Test author</Author>
        <Heading2>Test heading 2</Heading2>
        <Heading3>Test heading 3</Heading3>
        <Heading4>Test heading 4</Heading4>

        <Heading2>Icons</Heading2>

        <Heading3>Classes</Heading3>
        <Icon type="druid" />
        <Icon type="hunter" />
        <Icon type="mage" />
        <Icon type="paladin" />
        <Icon type="priest" />
        <Icon type="rogue" />
        <Icon type="shaman" />
        <Icon type="warlock" />
        <Icon type="warrior" />

        <Heading3>Races</Heading3>
        <Icon type="bloodelf" />
        <Icon type="draenei" />
        <Icon type="dwarf" />
        <Icon type="gnome" />
        <Icon type="human" />
        <Icon type="nightelf" />
        <Icon type="orc" />
        <Icon type="tauren" />
        <Icon type="troll" />
        <Icon type="undead" />

        <Heading3>Professions</Heading3>
        <Icon type="alchemy" />
        <Icon type="blacksmithing" />
        <Icon type="cooking" />
        <Icon type="enchanting" />
        <Icon type="engineering" />
        <Icon type="firstaid" />
        <Icon type="fishing" />
        <Icon type="herbalism" />
        <Icon type="jewelcrafting" />
        <Icon type="leatherworking" />
        <Icon type="mining" />
        <Icon type="skinning" />
        <Icon type="tailoring" />

        <Heading3>Talent specialisations</Heading3>
        <Icon type="balance" />
        <Icon type="feralCombat" />
        <Icon type="druidRestoration" />
        <Icon type="beastMastery" />
        <Icon type="marksmanship" />
        <Icon type="survival" />
        <Icon type="arcane" />
        <Icon type="fire" />
        <Icon type="frost" />
        <Icon type="paladinHoly" />
        <Icon type="paladinProtection" />
        <Icon type="retribution" />
        <Icon type="discipline" />
        <Icon type="priestHoly" />
        <Icon type="shadow" />
        <Icon type="assassination" />
        <Icon type="combat" />
        <Icon type="subtlety" />
        <Icon type="elemental" />
        <Icon type="enhancement" />
        <Icon type="shamanRestoration" />
        <Icon type="affliction" />
        <Icon type="demonology" />
        <Icon type="destruction" />
        <Icon type="arms" />
        <Icon type="fury" />
        <Icon type="warriorProtection" />

        <Heading3>Stances</Heading3>
        <Icon type="bearForm" />
        <Icon type="catForm" />
        <Icon type="travelForm" />
        <Icon type="aquaticForm" />
        <Icon type="flightForm" />
        <Icon type="moonkinForm" />
        <Icon type="treeForm" />
        <Icon type="prowl" />
        <Icon type="battleStance" />
        <Icon type="berserkerStance" />
        <Icon type="defensiveStance" />
        <Icon type="stealth" />

        <Heading3>Factions</Heading3>
        <Icon type="horde" />
        <Icon type="alliance" />

        <Heading3>Minions</Heading3>
        <Icon type="felguard" />
        <Icon type="felhunter" />
        <Icon type="imp" />
        <Icon type="infernal" />
        <Icon type="shadowfiend" />
        <Icon type="succubus" />
        <Icon type="totem" />
        <Icon type="treant" />
        <Icon type="voidwalker" />
        <Icon type="waterElemental" />

        <Heading3>Resistance</Heading3>
        <Icon type="arcaneResistance" />
        <Icon type="fireResistance" />
        <Icon type="frostResistance" />
        <Icon type="natureResistance" />
        <Icon type="shadowResistance" />

        <Heading3>Currency</Heading3>
        <Icon type="gold" />
        <Icon type="silver" />
        <Icon type="copper" />
        <Icon type="abMark" />
        <Icon type="avMark" />
        <Icon type="eotsMark" />
        <Icon type="wsgMark" />
        <Icon type="arenaPoints" />
        <Icon type="honor" />
        <Icon type="boj" />


        <Heading3>Instances</Heading3>
        <Icon type="blackTemple"/>
        <Icon type="doomLordKazzak"/>
        <Icon type="doomWalker"/>
        <Icon type="gruulsLair"/>
        <Icon type="hyjalSummit"/>
        <Icon type="karazhan"/>
        <Icon type="magtheridonsLair"/>
        <Icon type="serpentshrineCavern"/>
        <Icon type="tempestKeep"/>
        <Icon type="zulAman"/>

        <Heading3>Bosses</Heading3>
        <Heading4>Black Temple</Heading4>
        <Icon type="gurtoggBloodboil"/>
        <Icon type="illidariCouncil"/>
        <Icon type="shadeOfAkama"/>
        <Icon type="highWarlordNajentus"/>
        <Icon type="motherShahraz"/>
        <Icon type="supremus"/>
        <Icon type="illidanStormrage"/>
        <Icon type="reliquaryOfSouls"/>
        <Icon type="teronGorefiend"/>
        <Heading4>Gruuls Lair</Heading4>
        <Icon type="gruulTheDragonkiller"/>
        <Icon type="highKingMaulgar"/>
        <Heading4>Hyjal Summit</Heading4>
        <Icon type="anetheron"/>
        <Icon type="archimonde"/>
        <Icon type="azgalor"/>
        <Icon type="kazrogal"/>
        <Icon type="rageWinterchill"/>
        <Heading4>Karazhan</Heading4>
        <Icon type="attumenTheHuntsman"/>
        <Icon type="netherspite"/>
        <Icon type="shadikithTheGlider"/>
        <Icon type="bigBadWolf"/>
        <Icon type="nightbane"/>
        <Icon type="terestianIllhoof"/>
        <Icon type="hyakissTheLurker"/>
        <Icon type="princeMalchezaar"/>
        <Icon type="theCurator"/>
        <Icon type="kilrek"/>
        <Icon type="rokadTheRavager"/>
        <Icon type="wizardOfOz"/>
        <Icon type="maidenOfVirtue"/>
        <Icon type="romuloAndJulianne"/>
        <Icon type="moroes"/>
        <Icon type="shadeOfAran"/>
        <Heading4>Magtheridons Lair</Heading4>
        <Icon type="magtheridon"/>
        <Heading4>Serpentshrine Cavern</Heading4>
        <Icon type="fathomLordKarathress"/>
        <Icon type="ladyVashj"/>
        <Icon type="morogrimTidewalker"/>
        <Icon type="hydrossTheUnstable"/>
        <Icon type="leotherasTheBlind"/>
        <Icon type="theLurkerBelow"/>
        <Heading4>Sunwell Plateau</Heading4>
        <Icon type="brutallus"/>
        <Icon type="eredarTwins"/>
        <Icon type="kalecgos"/>
        <Icon type="muru"/>
        <Icon type="entropius"/>
        <Icon type="felmyst"/>
        <Icon type="kiljaeden"/>
        <Icon type="sathrovarrTheCorruptor"/>
        <Heading4>The Eye</Heading4>
        <Icon type="alar"/>
        <Icon type="highAstromancerSolarian"/>
        <Icon type="kaelthasSunstrider"/>
        <Icon type="voidReaver"/>
        <Heading4>ZulAman</Heading4>
        <Icon type="akilzon"/>
        <Icon type="halazzi"/>
        <Icon type="janalai"/>
        <Icon type="nalorakk"/>
        <Icon type="zuljin"/>


        <Heading3>Empty</Heading3>
        <Icon />
        <br />
        <br />


        <Heading2>Game items</Heading2>
        <Heading3>Items</Heading3>
        <Item id={14555}>Alcor's Sunrazor</Item>
        <Item id={9477} quality="rare">The Chief's Enforcer</Item>
        <Item quality="uncommon">Ancestral Tunic</Item>

        <Heading3>Quests</Heading3>
        <Quest id={9376}>A Pilgrim's Plight</Quest>
        <Quest difficulty="veryEasy" type="quest">A Necessary Distraction</Quest>
        <Quest id={11042} difficulty="easy" type="questComplete">A Mystifying Vision</Quest>
        <Quest id={9376} difficulty="medium" type="daily">A Pilgrim's Plight</Quest>
        <Quest difficulty="hard" type="dailyComplete">A Necessary Distraction</Quest>
        <Quest difficulty="veryHard">A Necessary Distraction</Quest>

        <Heading3>Spells</Heading3>
        <Spell id={5229}>Enrage</Spell>
        <Spell>Serpent Sting</Spell>

        <Heading3>Talents</Heading3>
        <Talent id={33890}>Empowered Rejuvenation</Talent>
        <Talent>Ignite</Talent>

        <Heading3>Factions</Heading3>
        <Horde />
        <Alliance />

        <Heading3>Minions</Heading3>
        <Felguard/>
        <Felhunter/>
        <Imp/>
        <Infernal/>
        <Succubus/>
        <Voidwalker/>
        <Totem/>
        <Shadowfiend/>
        <Treant/>
        <WaterElemental/>

        <Heading3>Professions</Heading3>
        <Alchemy />
        <Blacksmithing />
        <Cooking />
        <Enchanting />
        <Engineering />
        <Firstaid />
        <Fishing />
        <Herbalism />
        <Jewelcrafting />
        <Leatherworking />
        <Mining />
        <Skinning />
        <Tailoring />

        <Heading3>Classes</Heading3>
        <Druid />
        <Hunter />
        <Mage />
        <Paladin />
        <Priest />
        <Rogue />
        <Shaman />
        <Warlock />
        <Warrior />

        <Heading3>Talent specialisations</Heading3>
        <Balance/>
        <FeralCombat/>
        <DruidRestoration/>
        <BeastMastery/>
        <Marksmanship/>
        <Survival/>
        <Arcane/>
        <Fire/>
        <Frost/>
        <PaladinHoly/>
        <PaladinProtection/>
        <Retribution/>
        <Discipline/>
        <PriestHoly/>
        <Shadow/>
        <Assassination/>
        <Combat/>
        <Subtlety/>
        <Elemental/>
        <Enhancement/>
        <ShamanRestoration/>
        <Affliction/>
        <Demonology/>
        <Destruction/>
        <Arms/>
        <Fury/>
        <WarriorProtection/>

        <Heading3>Stances</Heading3>
        <BearForm/>
        <CatForm/>
        <TravelForm/>
        <AquaticForm/>
        <FlightForm/>
        <SwiftFlightForm/>
        <MoonkinForm/>
        <TreeForm/>
        <Prowl/>
        <BattleStance/>
        <BerserkerStance/>
        <DefensiveStance/>
        <Stealth/>

        <Heading3>Races</Heading3>
        <Bloodelf />
        <Draenei />
        <Dwarf />
        <Gnome />
        <Human />
        <Nightelf />
        <Orc />
        <Tauren />
        <Troll />
        <Undead />

        <Heading3>Resistance</Heading3>
        <ArcaneResistance />
        <FireResistance />
        <FrostResistance />
        <NatureResistance />
        <ShadowResistance />

        <Heading3>Currency</Heading3>
        <Gold/>
        <Silver/>
        <Copper/>
        <WsgMark/>
        <AbMark/>
        <EotsMark/>
        <AvMark/>
        <ArenaPoints/>
        <Honor/>
        <Boj/>


        <Heading3>Instances</Heading3>
        <BlackTemple/>
        <DoomLordKazzak/>
        <DoomWalker/>
        <GruulsLair/>
        <HyjalSummit/>
        <Karazhan/>
        <MagtheridonsLair/>
        <SerpentshrineCavern/>
        <TempestKeep/>
        <ZulAman/>

        <Heading3>Bosses</Heading3>
        <Heading4>Black Temple</Heading4>
        <GurtoggBloodboil/>
        <IllidariCouncil/>
        <ShadeOfAkama/>
        <HighWarlordNajentus/>
        <MotherShahraz/>
        <Supremus/>
        <IllidanStormrage/>
        <ReliquaryOfSouls/>
        <TeronGorefiend/>
        <Heading4>Gruuls Lair</Heading4>
        <GruulTheDragonkiller/>
        <HighKingMaulgar/>
        <Heading4>Hyjal Summit</Heading4>
        <Anetheron/>
        <Archimonde/>
        <Azgalor/>
        <Kazrogal/>
        <RageWinterchill/>
        <Heading4>Karazhan</Heading4>
        <AttumenTheHuntsman/>
        <Netherspite/>
        <ShadikithTheGlider/>
        <BigBadWolf/>
        <Nightbane/>
        <TerestianIllhoof/>
        <HyakissTheLurker/>
        <PrinceMalchezaar/>
        <TheCurator/>
        <Kilrek/>
        <RokadTheRavager/>
        <WizardOfOz/>
        <MaidenOfVirtue/>
        <RomuloAndJulianne/>
        <Moroes/>
        <ShadeOfAran/>
        <Heading4>Magtheridons Lair</Heading4>
        <Magtheridon/>
        <Heading4>Serpentshrine Cavern</Heading4>
        <FathomLordKarathress/>
        <LadyVashj/>
        <MorogrimTidewalker/>
        <HydrossTheUnstable/>
        <LeotherasTheBlind/>
        <TheLurkerBelow/>
        <Heading4>Sunwell Plateau</Heading4>
        <Brutallus/>
        <EredarTwins/>
        <Kalecgos/>
        <Muru/>
        <Entropius/>
        <Felmyst/>
        <Kiljaeden/>
        <SathrovarrTheCorruptor/>
        <Heading4>The Eye</Heading4>
        <Alar/>
        <HighAstromancerSolarian/>
        <KaelthasSunstrider/>
        <VoidReaver/>
        <Heading4>ZulAman</Heading4>
        <Akilzon/>
        <Halazzi/>
        <Janalai/>
        <Nalorakk/>
        <Zuljin/>

        <Heading2>Macro</Heading2>
        <SimpleMacro
          name="OpenMacroMenu"
          description={"This is just simple button to open macro menu. If you are too lazy to write /macro"}
          text={
            `/macro
/macro
/macro
/macro
/macro
/macro`}
        />
        <Heading2>Items</Heading2>
        <Heading3>EquipmentSet</Heading3>
        <EquipmentSet equipment={{
          head: <Item id="8345" quality="rare">Wolfshead Helm</Item>,
          neck: <Item id="27495">Soldier's Dog Tags</Item>,
          shoulder: <Item id="27797">Wastewalker Shoulderpads</Item>,
          back: <Item id="27878">Auchenai Death Shroud</Item>,
          chest: <Item id="25838">Warden's Hauberk</Item>,
          wrists: <Item id="29246">Nightfall Wristguards</Item>,
          hands: <Item id="27531">Wastewalker Gloves</Item>,
          waist: <Item id="29247">Girdle of the Deathdealer</Item>,
          legs: <Item id="31544">Clefthoof Hide Leggings</Item>,
          feet: <Item id="31288">The Master's Treads</Item>,
          finger1: <Item id="30834">Shapeshifter's Signet</Item>,
          finger2: <Item id="29177">A'dal's Command</Item>,
          trinket1: <Item id="28034">Hourglass of the Unraveller</Item>,
          trinket2: <Item id="28121">Icon of Unyielding Courage</Item>,
          mainhand: <Item id="29359">Feral Staff of Lashing</Item>,
          relic: <Item id="29390">Everbloom Idol</Item>,
        }} />
        <Heading3>EquipmentList</Heading3>
        <EquipmentList listOfEquipmentSlots={[
          {
            type: "Relic",
            items: [<Item id="28064" quality="uncommon">Idol of the Wild</Item>]
          }
        ]} />
        <Heading3>StatsList</Heading3>
        <StatsList listOfStats={[
          {description: "Ap", value: "3067 +-"},
          {description: "Hit", value: "143"},
          {description: "Crit", value: "38.35% +-"},
          {description: "Expertise", value: "13"}
        ]} />
        <Heading2>Stats tables</Heading2>
        <Heading3>FactionRaceStatsTable</Heading3>
        <FactionRaceStatsTable faction="alliance" />
        <Heading3>ClassRaceStatsTable</Heading3>
        <ClassRaceStatsTable
          raceStats={{
            druid: druid,
            paladin: paladin,
            warrior: warrior,
          }}
          displayStats={[
            "agility",
            "armor",
            "stamina",
            "health",
            "defense",
            "dodge",
            "parry",
            "block",
          ]}
          describedby="tank-stats"
        />
        <Heading3>PriestRacialsTable</Heading3>
        <PriestRacialsTable />
      </SideMenuLayout>
    </MainLayout>
  );
};

export default testing;
