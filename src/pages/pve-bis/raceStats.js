import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import BisSideMenu from "../../components/menus/sideMenus/PveBisSideMenu";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import {Heading2, Title} from "../../components/headers/headers";
import {Alliance, Horde} from "../../components/gameElements/faction/factions";
import "./raceStats.scss";
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
} from "../../components/gameElements/class/classes";
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
} from "../../components/gameElements/race/races";

const RaceStats = () => {
  return (
    <MainLayout pageTitle="Race stats">
      <SideMenuLayout sideMenu={BisSideMenu}>
        <Title>Race stats</Title>
        <p>
          This is table of basic stats of level 70 character for every class of every race.
        </p>
        <Heading2 align="center" anchorId="alliance" id="raceStatsTableAlliance">
          <Alliance />
        </Heading2>
        <table className="raceStatsTable alliance" aria-describedby="raceStatsTableAlliance">
          <thead>
          <tr>
            <th scope="col">Class</th>
            <th scope="col">Race</th>
            <th scope="col">Strength</th>
            <th scope="col">Agility</th>
            <th scope="col">Stamina</th>
            <th scope="col">Intellect</th>
            <th scope="col">Spirit</th>
          </tr>
          </thead>

          {/*---ALLIANCE---*/}
          <tbody className="druid">
          {/* DRUID */}
          <tr>
            <th scope="row" rowSpan="1" aria-label="druid"><Druid /></th>
            <td><Nightelf /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          </tbody>
          <tbody className="hunter">
          {/* HUNTER */}
          <tr>
            <th scope="row" rowSpan="3" aria-label="hunter"><Hunter /></th>
            <td><Draenei /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Dwarf /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Nightelf /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          </tbody>
          <tbody className="mage">
          {/* MAGE */}
          <tr>
            <th scope="row" rowSpan="3" aria-label="mage"><Mage /></th>
            <td><Draenei /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Gnome /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Human /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          </tbody>
          <tbody className="paladin">
          {/* PALADIN */}
          <tr>
            <th scope="row" rowSpan="3" aria-label="paladin"><Paladin /></th>
            <td><Draenei /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Dwarf /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Human /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          </tbody>
          <tbody className="priest">
          {/* PRIEST */}
          <tr>
            <th scope="row" rowSpan="4" aria-label="priest"><Priest /></th>
            <td><Draenei /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Dwarf /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Human /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Nightelf /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          </tbody>
          <tbody className="rogue">
          {/* ROGUE */}
          <tr>
            <th scope="row" rowSpan="4" aria-label="rogue"><Rogue /></th>
            <td><Dwarf /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Gnome /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Human /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Nightelf /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          </tbody>
          <tbody className="shaman">
          {/* SHAMAN */}
          <tr>
            <th scope="row" rowSpan="1" aria-label="shaman"><Shaman /></th>
            <td><Draenei /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          </tbody>
          <tbody className="warlock">
          {/* WARLOCK */}
          <tr>
            <th scope="row" rowSpan="2" aria-label="warlock"><Warlock /></th>
            <td><Gnome /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Human /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          </tbody>
          <tbody className="warrior">
          {/* WARRIOR */}
          <tr>
            <th scope="row" rowSpan="5" aria-label="warrior"><Warrior /></th>
            <td><Draenei /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Dwarf /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Gnome /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Human /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Nightelf /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          </tbody>
        </table>


        <Heading2 align="center" anchorId="horde" id="raceStatsTableHorde">
          <Horde />
        </Heading2>
        <table className="raceStatsTable horde" aria-describedby="raceStatsTableHorde">
          <thead>
          <tr>
            <th scope="col">Class</th>
            <th scope="col">Race</th>
            <th scope="col">Strength</th>
            <th scope="col">Agility</th>
            <th scope="col">Stamina</th>
            <th scope="col">Intellect</th>
            <th scope="col">Spirit</th>
          </tr>
          </thead>
          <tbody className="druid">
          {/* DRUID */}
          <tr>
            <th scope="row" rowSpan="1" aria-label="druid"><Druid /></th>
            <td><Tauren /></td>
            <td>83</td>
            <td>66</td>
            <td>87</td>
            <td>142</td>
            <td>139</td>
          </tr>
          </tbody>
          <tbody className="hunter">
          {/* HUNTER */}
          <tr>
            <th scope="row" rowSpan="4" aria-label="hunter"><Hunter /></th>
            <td><Bloodelf /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Orc /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Tauren /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Troll /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          </tbody>
          <tbody className="mage">
          {/* MAGE */}
          <tr>
            <th scope="row" rowSpan="3" aria-label="mage"><Mage /></th>
            <td><Bloodelf /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Troll /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Undead /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          </tbody>
          <tbody className="paladin">
          {/* PALADIN */}
          <tr>
            <th scope="row" rowSpan="1" aria-label="paladin"><Paladin /></th>
            <td><Bloodelf /></td>
            <td>123</td>
            <td>79</td>
            <td>138</td>
            <td>87</td>
            <td>88</td>
          </tr>
          </tbody>
          <tbody className="priest">
          {/* PRIEST */}
          <tr>
            <th scope="row" rowSpan="3" aria-label="priest"><Priest /></th>
            <td><Bloodelf /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Troll /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Undead /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          </tbody>
          <tbody className="rogue">
          {/* ROGUE */}
          <tr>
            <th scope="row" rowSpan="4" aria-label="rogue"><Rogue /></th>
            <td><Bloodelf /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Orc /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Troll /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Undead /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          </tbody>
          <tbody className="shaman">
          {/* SHAMAN */}
          <tr>
            <th scope="row" rowSpan="3" aria-label="shaman"><Shaman /></th>
            <td><Orc /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Tauren /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Troll /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          </tbody>
          <tbody className="warlock">
          {/* WARLOCK */}
          <tr>
            <th scope="row" rowSpan="3" aria-label="warlock"><Warlock /></th>
            <td><Bloodelf /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Orc /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Undead /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          </tbody>
          <tbody className="warrior">
          {/* WARRIOR */}
          <tr>
            <th scope="row" rowSpan="4" aria-label="warrior"><Warrior /></th>
            <td><Orc /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Tauren /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Troll /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td><Undead /></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
          </tbody>
        </table>
      </SideMenuLayout>
    </MainLayout>
  );
};

export default RaceStats;
