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
import {druid, paladin, warrior} from "../components/raceStatsTables/raceStats";
import ClassRaceStatsTable from "../components/raceStatsTables/ClassRaceStatsTable";
import FactionRaceStatsTable from "../components/raceStatsTables/FactionRaceStatsTable";
import PriestRacialsTable from "../components/raceStatsTables/PriestRacialsTable";

const testing = () => {
  return (
    <MainLayout>
      <SideMenuLayout sideMenu={TestSideMenu}>
        <Title>Testing</Title>
        <Author>Test author</Author>
        <Heading2>Test heading 2</Heading2>
        <Heading3>Test heading 3</Heading3>
        <Heading3>Test heading 3-2</Heading3>
        <Heading4>Test heading 4</Heading4>

        <Heading2>Icons</Heading2>
        <Heading3>Classes</Heading3>
        <br />
        <Icon type="druid" />
        <Icon type="hunter" />
        <Icon type="mage" />
        <Icon type="paladin" />
        <Icon type="priest" />
        <Icon type="rogue" />
        <Icon type="shaman" />
        <Icon type="warlock" />
        <Icon type="warrior" />
        <br />
        <Heading3>Races</Heading3>
        <br />
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
        <br />
        <Heading3>Professions</Heading3>
        <br />
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
        <br />
        <Heading3>Factions</Heading3>
        <br />
        <Icon type="horde" />
        <Icon type="alliance" />
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
        <br />
        <br />

        <Heading2>Macro</Heading2>
        <SimpleMacro
          name="OpenMacroMenu"
          description={"This is just simple button to open macro menu. If you are too lazy to write /macro"}
          text={`/macro`}
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
