import React from "react";
import "./raceStats.scss";
import {Hunter} from "../gameElements/class/classes";
import {Bloodelf, Draenei, Dwarf, Nightelf, Orc, Tauren, Troll} from "../gameElements/race/races";

const RaceStats = () => {
  return (
    <table className="rangedPhysicalDpsStatsTable" aria-describedby="ranged-physical-dps-stats">
      <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Race</th>
        <th scope="col">Agility</th>
        <th scope="col">Ranged AP</th>
        <th scope="col">Physical Crit</th>
        <th scope="col">Intellect</th>
        <th scope="col">Mana</th>
        <th scope="col">Spirit</th>
        <th scope="col">Mana Regen</th>
      </tr>
      </thead>

      <tbody className="hunter">
      {/* HUNTER */}
      <tr>
        <th scope="row" rowSpan="7" aria-label="hunter"><Hunter /></th>
        <td aria-label="draenei"><Draenei /></td>
        <td>65</td>
        <td>148</td>
        <td>107</td>
        <td>78</td>
        <td>85</td>
      </tr>
      <tr>
        <td aria-label="dwarf"><Dwarf /></td>
        <td>66</td>
        <td>147</td>
        <td>111</td>
        <td>76</td>
        <td>82</td>
      </tr>
      <tr>
        <td aria-label="nightelf"><Nightelf /></td>
        <td>61</td>
        <td>156</td>
        <td>83</td>
        <td>4458</td>
        <td>4258</td>
      </tr>
      <tr>
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
    </table>
  );
};

export default RaceStats;
