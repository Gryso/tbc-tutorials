import React from "react";
import "./raceStats.scss";
import {Bloodelf, Draenei, Dwarf, Gnome, Human, Nightelf, Orc, Tauren, Troll, Undead} from "../gameElements/race/races";
import {Druid, Hunter, Mage, Paladin, Priest, Rogue, Shaman, Warlock, Warrior} from "../gameElements/class/classes";
import Icon from "../gameElements/icon/Icon";

const PossibleClassesForRaceTable = () => {

  return (
    <table className="possibleClassesForRaceTable" aria-describedby="possible classes for race table">
      <thead>
        <tr>
          <th scope="col">Race</th>
          <th scope="col" aria-label="druid"><Druid /></th>
          <th scope="col" aria-label="hunter"><Hunter /></th>
          <th scope="col" aria-label="mage"><Mage /></th>
          <th scope="col" aria-label="paladin"><Paladin /></th>
          <th scope="col" aria-label="priest"><Priest /></th>
          <th scope="col" aria-label="rogue"><Rogue /></th>
          <th scope="col" aria-label="shaman"><Shaman /></th>
          <th scope="col" aria-label="warlock"><Warlock /></th>
          <th scope="col" aria-label="warrior"><Warrior /></th>
        </tr>
      </thead>

      <tbody className="alliance">
        <tr>
          <th scope="row" aria-label="draenei"><Draenei /></th>
          <td />
          <td><Icon type="hunter" /></td>
          <td><Icon type="mage" /></td>
          <td><Icon type="paladin" /></td>
          <td><Icon type="priest" /></td>
          <td />
          <td><Icon type="shaman" /></td>
          <td />
          <td><Icon type="warrior" /></td>
        </tr>
        <tr>
          <th scope="row" aria-label="dwarf"><Dwarf /></th>
          <td />
          <td><Icon type="hunter" /></td>
          <td />
          <td><Icon type="paladin" /></td>
          <td><Icon type="priest" /></td>
          <td><Icon type="rogue" /></td>
          <td />
          <td />
          <td><Icon type="warrior" /></td>
        </tr>
        <tr>
          <th scope="row" aria-label="gnome"><Gnome /></th>
          <td />
          <td />
          <td><Icon type="mage" /></td>
          <td />
          <td />
          <td><Icon type="rogue" /></td>
          <td />
          <td><Icon type="warlock" /></td>
          <td><Icon type="warrior" /></td>
        </tr>
        <tr>
          <th scope="row" aria-label="human"><Human /></th>
          <td />
          <td />
          <td><Icon type="mage" /></td>
          <td><Icon type="paladin" /></td>
          <td><Icon type="priest" /></td>
          <td><Icon type="rogue" /></td>
          <td />
          <td><Icon type="warlock" /></td>
          <td><Icon type="warrior" /></td>
        </tr>
        <tr>
          <th scope="row" aria-label="nightelf"><Nightelf /></th>
          <td><Icon type="druid" /></td>
          <td><Icon type="hunter" /></td>
          <td />
          <td />
          <td><Icon type="priest" /></td>
          <td><Icon type="rogue" /></td>
          <td />
          <td />
          <td><Icon type="warrior" /></td>
        </tr>
      </tbody>
      <tbody className="horde">
        <tr>
          <th scope="row" aria-label="bloodelf"><Bloodelf /></th>
          <td />
          <td><Icon type="hunter" /></td>
          <td><Icon type="mage" /></td>
          <td><Icon type="paladin" /></td>
          <td><Icon type="priest" /></td>
          <td><Icon type="rogue" /></td>
          <td />
          <td><Icon type="warlock" /></td>
          <td />
        </tr>
        <tr>
          <th scope="row" aria-label="orc"><Orc /></th>
          <td />
          <td><Icon type="hunter" /></td>
          <td />
          <td />
          <td />
          <td><Icon type="rogue" /></td>
          <td><Icon type="shaman" /></td>
          <td><Icon type="warlock" /></td>
          <td><Icon type="warrior" /></td>
        </tr>
        <tr>
          <th scope="row" aria-label="tauren"><Tauren /></th>
          <td><Icon type="druid" /></td>
          <td><Icon type="hunter" /></td>
          <td />
          <td />
          <td />
          <td />
          <td><Icon type="shaman" /></td>
          <td />
          <td><Icon type="warrior" /></td>
        </tr>
        <tr>
          <th scope="row" aria-label="troll"><Troll /></th>
          <td />
          <td><Icon type="hunter" /></td>
          <td><Icon type="mage" /></td>
          <td />
          <td><Icon type="priest" /></td>
          <td><Icon type="rogue" /></td>
          <td><Icon type="shaman" /></td>
          <td />
          <td><Icon type="warrior" /></td>
        </tr>
        <tr>
          <th scope="row" aria-label="undead"><Undead /></th>
          <td />
          <td />
          <td><Icon type="mage" /></td>
          <td />
          <td><Icon type="priest" /></td>
          <td><Icon type="rogue" /></td>
          <td />
          <td><Icon type="warlock" /></td>
          <td><Icon type="warrior" /></td>
        </tr>
      </tbody>
    </table>
  );
};

export default PossibleClassesForRaceTable;
