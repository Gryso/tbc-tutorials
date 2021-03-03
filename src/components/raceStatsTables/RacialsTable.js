import React from "react";
import "./raceStats.scss";
import {Bloodelf, Draenei, Dwarf, Gnome, Human, Nightelf, Orc, Tauren, Troll, Undead} from "../gameElements/race/races";
import Spell from "../gameElements/spell/Spell";
import Icon from "../gameElements/icon/Icon";

const RacialsTable = () => {

  return (
    <table className="racialsTable" aria-describedby="racials table">
      <thead>
        <tr>
          <th scope="col">Race</th>
          <th scope="col">1</th>
          <th scope="col">2</th>
          <th scope="col">3</th>
          <th scope="col">4</th>
          <th scope="col">5</th>
        </tr>
      </thead>

      <tbody className="alliance">
        <tr>
          <th scope="row" aria-label="draenei"><Draenei /></th>
          <td><Spell id={20579}>Shadow Resistance</Spell></td>
          <td><Spell id={28875}>Gemcutting</Spell></td>
          <td>
            <Spell id={6562}>Heroic Presence</Spell>
            <div>
              (<Icon type="warrior"/>
            <Icon type="paladin"/>
            <Icon type="hunter"/>)
            </div>
          </td>
          <td>
            <Spell id={28878}>Inspiring Presence</Spell>
            <div>
              (<Icon type="priest"/>
              <Icon type="mage"/>
              <Icon type="shaman"/>)
            </div>
          </td>
          <td><Spell id={28880}>Gift of the Naaru</Spell></td>
        </tr>
        <tr>
          <th scope="row" aria-label="dwarf"><Dwarf /></th>
          <td><Spell id={20596}>Frost Resistance </Spell></td>
          <td><Spell id={2481}>Find Treasure </Spell></td>
          <td><Spell id={20594}>Stoneform</Spell></td>
          <td/>
          <td><Spell id={20595}>Gun Specialization</Spell></td>
        </tr>
        <tr>
          <th scope="row" aria-label="gnome"><Gnome /></th>
          <td><Spell id={20592}>Arcane Resistance </Spell></td>
          <td><Spell id={20593}>Engineering Specialist </Spell></td>
          <td><Spell id={20591}>Expansive Mind</Spell></td>
          <td><Spell id={20589}>Escape Artist</Spell></td>
          <td/>
        </tr>
        <tr>
          <th scope="row" aria-label="human"><Human /></th>
          <td><Spell id={20600}>Perception</Spell></td>
          <td><Spell id={20599}>Diplomacy</Spell></td>
          <td><Spell id={20598}>The Human Spirit</Spell></td>
          <td><Spell id={20864}>Mace Specialization</Spell></td>
          <td><Spell id={20597}>Sword Specialization</Spell></td>
        </tr>
        <tr>
          <th scope="row" aria-label="nightelf"><Nightelf /></th>
          <td><Spell id={20551}>Nature Resistance</Spell></td>
          <td><Spell id={20585}>Wisp Spirit</Spell></td>
          <td><Spell id={20582}>Quickness</Spell></td>
          <td><Spell id={20580}>Shadowmeld</Spell></td>
          <td/>
        </tr>
      </tbody>
      <tbody className="horde">
        <tr>
          <th scope="row" aria-label="bloodelf"><Bloodelf /></th>
          <td><Spell id={822}>Magic Resistance</Spell></td>
          <td><Spell id={28877}>Arcane Affinity</Spell></td>
          <td><Spell id={28734}>Mana Tap</Spell></td>
          <td><Spell id={25046}>Arcane Torrent</Spell></td>
          <td/>
        </tr>
        <tr>
          <th scope="row" aria-label="orc"><Orc /></th>
          <td><Spell id={33697}>Blood Fury</Spell></td>
          <td><Spell id={21563}>Command</Spell></td>
          <td><Spell id={20573}>Hardiness</Spell></td>
          <td/>
          <td><Spell id={20574}>Axe Specialization</Spell></td>
        </tr>
        <tr>
          <th scope="row" aria-label="tauren"><Tauren /></th>
          <td><Spell id={20583}>Nature Resistance</Spell></td>
          <td><Spell id={20552}>Cultivation</Spell></td>
          <td><Spell id={20550}>Endurance</Spell></td>
          <td><Spell id={20549}>War Stomp</Spell></td>
          <td/>
        </tr>
        <tr>
          <th scope="row" aria-label="troll"><Troll /></th>
          <td><Spell id={26297}>Berserking</Spell></td>
          <td><Spell id={20557}>Beast Slaying</Spell></td>
          <td><Spell id={20555}>Regeneration</Spell></td>
          <td><Spell id={20558}>Throwing Specialization</Spell></td>
          <td><Spell id={26290}>Bow Specialization</Spell></td>
        </tr>
        <tr>
          <th scope="row" aria-label="undead"><Undead /></th>
          <td><Spell id={20579}>Shadow Resistance</Spell></td>
          <td><Spell id={7744}>Will of the Forsaken</Spell></td>
          <td><Spell id={5227}>Underwater Breathing</Spell></td>
          <td><Spell id={20577}>Cannibalize</Spell></td>
          <td/>
        </tr>
      </tbody>
    </table>
  );
};

export default RacialsTable;
