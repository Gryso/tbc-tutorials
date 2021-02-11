import React from "react";
import "./raceStats.scss";
import {Bloodelf, Draenei, Dwarf, Human, Nightelf, Troll, Undead} from "../gameElements/race/races";
import Spell from "../gameElements/spell/Spell";

const RaceStats = () => {
  return (
    <table className="priestRacialsTable" aria-describedby="priest-racials">
      <tbody className="alliance">
      <tr>
        <th scope="row" aria-label="draenei"><Draenei /></th>
        <td><Spell id="32548">Symbol of Hope</Spell>, <Spell id="44046">Chastise</Spell></td>
      </tr>
      <tr>
        <th scope="row" aria-label="dwarf"><Dwarf /></th>
        <td><Spell id="44046">Chastise</Spell>, <Spell id="25437">Desperate Prayer</Spell></td>
      </tr>
      <tr>
        <th scope="row" aria-label="human"><Human /></th>
        <td><Spell id="25437">Desperate Prayer</Spell>, <Spell id="25441">Feedback</Spell></td>
      </tr>
      <tr>
        <th scope="row" aria-label="nightelf"><Nightelf /></th>
        <td><Spell id="25446">Starshards</Spell>, <Spell id="2651">Elune's Grace</Spell></td>
      </tr>
      </tbody>

      <tbody className="horde">
      <tr>
        <th scope="row" aria-label="bloodelf"><Bloodelf /></th>
        <td><Spell id="25461">Touch of Weakness</Spell>, <Spell id="32676">Consume Magic</Spell></td>
      </tr>
      <tr>
        <th scope="row" aria-label="troll"><Troll /></th>
        <td><Spell id="28385">Shadowguard</Spell>, <Spell id="25816">Hex of Weakness</Spell></td>
      </tr>
      <tr>
        <th scope="row" aria-label="undead"><Undead /></th>
        <td><Spell id="25461">Touch of Weakness</Spell>, <Spell id="25467">Devouring Plague</Spell></td>
      </tr>
      </tbody>
    </table>
  );
};

export default RaceStats;
