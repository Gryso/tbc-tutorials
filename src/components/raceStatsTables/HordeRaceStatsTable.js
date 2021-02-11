import React from "react";
import "./raceStats.scss";
import {Druid, Hunter, Mage, Paladin, Priest, Rogue, Shaman, Warlock, Warrior} from "../gameElements/class/classes";
import {Bloodelf, Orc, Tauren, Troll, Undead} from "../gameElements/race/races";

const RaceStats = () => {
  return (
    <table className="raceStatsTable horde" aria-describedby="horde">
      <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Race</th>
        <th scope="col">Strength</th>
        <th scope="col">Agility</th>
        <th scope="col">Stamina</th>
        <th scope="col">Intellect</th>
        <th scope="col">Spirit</th>
        <th scope="col">Health</th>
        <th scope="col">Mana</th>
      </tr>
      </thead>
      <tbody className="druid">
      {/* DRUID */}
      <tr>
        <th scope="row" rowSpan="1" aria-label="druid"><Druid /></th>
        <td aria-label="tauren"><Tauren /></td>
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
        <td aria-label="bloodelf"><Bloodelf /></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="orc"><Orc /></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="tauren"><Tauren /></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="troll"><Troll /></td>
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
        <td aria-label="bloodelf"><Bloodelf /></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="troll"><Troll /></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="undead"><Undead /></td>
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
        <td aria-label="bloodelf"><Bloodelf /></td>
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
        <td aria-label="bloodelf"><Bloodelf /></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="troll"><Troll /></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="undead"><Undead /></td>
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
        <td aria-label="bloodelf"><Bloodelf /></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="orc"><Orc /></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="troll"><Troll /></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="undead"><Undead /></td>
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
        <td aria-label="orc"><Orc /></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="tauren"><Tauren /></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="troll"><Troll /></td>
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
        <td aria-label="bloodelf"><Bloodelf /></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="orc"><Orc /></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="undead"><Undead /></td>
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
        <td aria-label="orc"><Orc /></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="tauren"><Tauren /></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="troll"><Troll /></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="undead"><Undead /></td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
        <td>x</td>
      </tr>
      </tbody>
    </table>
  );
};

export default RaceStats;
