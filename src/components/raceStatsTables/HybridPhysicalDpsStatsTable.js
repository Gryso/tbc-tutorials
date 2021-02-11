import React from "react";
import "./raceStats.scss";
import {Druid, Paladin, Shaman} from "../gameElements/class/classes";
import {Bloodelf, Draenei, Dwarf, Human, Nightelf, Orc, Tauren, Troll} from "../gameElements/race/races";

const RaceStats = () => {
  return (
    <table className="hybridPhysicalDpsStatsTable" aria-describedby="hybrid-physical-dps-stats">
      <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Race</th>
        <th scope="col">Strength</th>
        <th scope="col">Melee AP</th>
        <th scope="col">Agility</th>
        <th scope="col">Physical Crit</th>
        <th scope="col">Intellect</th>
        <th scope="col">Mana</th>
        <th scope="col">Spell Crit</th>
        <th scope="col">Spirit</th>
        <th scope="col">Mana Regen</th>
      </tr>
      </thead>

      <tbody className="druid">
      {/* DRUID */}
      <tr>
        <th scope="row" rowSpan="2" aria-label="druid"><Druid /></th>
        <td aria-label="nightelf"><Nightelf /></td>
        <td>73</td>
        <td>75</td>
        <td>82</td>
        <td>120</td>
        <td>133</td>
        <td>4254</td>
        <td>3890</td>
      </tr>
      <tr>
        <td aria-label="tauren"><Tauren /></td>
        <td>83</td>
        <td>66</td>
        <td>87</td>
        <td>142</td>
        <td>139</td>
      </tr>
      </tbody>

      <tbody className="paladin">
      {/* PALADIN */}
      <tr>
        <th scope="row" rowSpan="4" aria-label="paladin"><Paladin /></th>
        <td aria-label="draenei"><Draenei /></td>
        <td>127</td>
        <td>74</td>
        <td>119</td>
        <td>84</td>
        <td>91</td>
        <td>4387</td>
        <td>3933</td>
      </tr>
      <tr>
        <td aria-label="dwarf"><Dwarf /></td>
        <td>128</td>
        <td>73</td>
        <td>123</td>
        <td>82</td>
        <td>88</td>
        <td>4427</td>
        <td>3903</td>
      </tr>
      <tr>
        <td aria-label="human"><Human /></td>
        <td>126</td>
        <td>77</td>
        <td>120</td>
        <td>83</td>
        <td>97</td>
        <td>4397</td>
        <td>3918</td>
      </tr>
      <tr>
        <td aria-label="bloodelf"><Bloodelf /></td>
        <td>123</td>
        <td>79</td>
        <td>138</td>
        <td>87</td>
        <td>88</td>
      </tr>
      </tbody>

      <tbody className="shaman">
      {/* SHAMAN */}
      <tr>
        <th scope="row" rowSpan="4" aria-label="shaman"><Shaman /></th>
        <td aria-label="draenei"><Draenei /></td>
        <td>103</td>
        <td>61</td>
        <td>122</td>
        <td>4109</td>
        <td>4313</td>
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
