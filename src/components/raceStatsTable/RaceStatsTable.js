import React from "react";
import "./raceStatsTable.scss";
import {Druid, Hunter, Mage, Paladin, Priest, Rogue, Shaman, Warlock, Warrior} from "../gameElements/class/classes";
import {Bloodelf, Draenei, Dwarf, Gnome, Human, Nightelf, Orc, Tauren, Troll, Undead} from "../gameElements/race/races";
import {Heading2} from "../headers/headers";
import {Alliance, Horde} from "../gameElements/faction/factions";


function RaceStatsTable() {
  return (
    <>
      <Heading2 align="center" anchorId="alliance">
        <Alliance />
      </Heading2>
      <table className="raceStatsTable alliance" aria-describedby="race-stats">
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
          <th scope="row" rowSpan="1"><Druid /></th>
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
          <th scope="row" rowSpan="3"><Hunter /></th>
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
          <th scope="row" rowSpan="3"><Mage /></th>
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
          <th scope="row" rowSpan="3"><Paladin /></th>
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
          <th scope="row" rowSpan="4"><Priest /></th>
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
          <th scope="row" rowSpan="4"><Rogue /></th>
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
          <th scope="row" rowSpan="1"><Shaman /></th>
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
          <th scope="row" rowSpan="2"><Warlock /></th>
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
          <th scope="row" rowSpan="5"><Warrior /></th>
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


      <Heading2 align="center" anchorId="horde">
        <Horde />
      </Heading2>
      <table className="raceStatsTable horde" aria-describedby="race-stats">
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
          <th scope="row" rowSpan="1"><Druid /></th>
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
          <th scope="row" rowSpan="4"><Hunter /></th>
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
          <th scope="row" rowSpan="3"><Mage /></th>
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
          <th scope="row" rowSpan="1"><Paladin /></th>
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
          <th scope="row" rowSpan="3"><Priest /></th>
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
          <th scope="row" rowSpan="4"><Rogue /></th>
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
          <th scope="row" rowSpan="3"><Shaman /></th>
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
          <th scope="row" rowSpan="3"><Warlock /></th>
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
          <th scope="row" rowSpan="4"><Warrior /></th>
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
    </>
  );
}

export default RaceStatsTable;
