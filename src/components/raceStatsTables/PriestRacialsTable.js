import React from "react";
import "./raceStats.scss";
import {Bloodelf, Draenei, Dwarf, Human, Nightelf, Troll, Undead} from "../gameElements/race/races";
import Spell from "../gameElements/spell/Spell";

const PriestRacialsTable = () => {
  return (
    <table className="priestRacialsTable" aria-describedby="priest-racials">
      <colgroup span="4" className="alliance"/>
      <colgroup span="3" className="horde"/>
      <tr>
        <th aria-label="nightelf"><Nightelf /></th>
        <th aria-label="draenei"><Draenei /></th>
        <th aria-label="dwarf"><Dwarf /></th>
        <th aria-label="human"><Human /></th>
        <th aria-label="bloodelf"><Bloodelf /></th>
        <th aria-label="undead"><Undead /></th>
        <th aria-label="troll"><Troll /></th>
      </tr>
      <tr>
        <td><Spell id="2651">Elune's Grace</Spell></td>
        <td colSpan="2"><Spell id="44046">Chastise</Spell></td>
        <td><Spell id="25441">Feedback</Spell></td>
        <td><Spell id="32676">Consume Magic</Spell></td>
        <td><Spell id="25467">Devouring Plague</Spell></td>
        <td><Spell id="25816">Hex of Weakness</Spell></td>
      </tr>
      <tr>
        <td><Spell id="25446">Starshards</Spell></td>
        <td><Spell id="32548">Symbol of Hope</Spell></td>
        <td colSpan="2"><Spell id="25437">Desperate Prayer</Spell></td>
        <td colSpan="2"><Spell id="25461">Touch of Weakness</Spell></td>
        <td><Spell id="28385">Shadowguard</Spell></td>
      </tr>
    </table>
  );
};

export default PriestRacialsTable;
