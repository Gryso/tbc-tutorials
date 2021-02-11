import React from "react";
import "./raceStats.scss";
import {Druid, Paladin, Priest, Shaman} from "../gameElements/class/classes";
import {Bloodelf, Draenei, Dwarf, Human, Nightelf, Orc, Tauren, Troll, Undead} from "../gameElements/race/races";

const RaceStats = () => {
  return (
    <table className="healerStatsTable" aria-describedby="healer-stats">
      <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Race</th>
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
        <td>x</td>
      </tr>
      <tr>
        <td><Tauren /></td>
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
      </tr>
      <tr>
        <td aria-label="dwarf"><Dwarf /></td>
        <td>128</td>
        <td>73</td>
        <td>123</td>
        <td>82</td>
        <td>88</td>
      </tr>
      <tr>
        <td aria-label="human"><Human /></td>
        <td>126</td>
        <td>77</td>
        <td>120</td>
        <td>83</td>
        <td>97</td>
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

      <tbody className="priest">
      {/* PRIEST */}
      <tr>
        <th scope="row" rowSpan="7" aria-label="priest"><Priest /></th>
        <td aria-label="draenei"><Draenei /></td>
        <td>40</td>
        <td>42</td>
        <td>57</td>
        <td>146</td>
        <td>153</td>
      </tr>
      <tr>
        <td aria-label="dwarf"><Dwarf /></td>
        <td>41</td>
        <td>41</td>
        <td>61</td>
        <td>144</td>
        <td>150</td>
      </tr>
      <tr>
        <td aria-label="human"><Human /></td>
        <td>39</td>
        <td>45</td>
        <td>58</td>
        <td>145</td>
        <td>166</td>
      </tr>
      <tr>
        <td aria-label="nightelf"><Nightelf /></td>
        <td>36</td>
        <td>50</td>
        <td>57</td>
        <td>145</td>
        <td>151</td>
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
