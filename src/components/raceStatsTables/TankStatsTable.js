import React from "react";
import "./raceStats.scss";
import {Druid, Paladin, Warrior} from "../gameElements/class/classes";
import {Bloodelf, Draenei, Dwarf, Gnome, Human, Nightelf, Orc, Tauren, Troll, Undead} from "../gameElements/race/races";

const RaceStats = () => {
  return (
    <table className="tankStatsTable" aria-describedby="tank-stats">
      <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Race</th>
        <th scope="col">Agility</th>
        <th scope="col">Dodge</th>
        <th scope="col">Armor</th>
        <th scope="col">Stamina</th>
        <th scope="col">Health</th>
        <th scope="col">Defence</th>
        <th scope="col">Parry</th>
        <th scope="col">Block</th>
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

      <tbody className="warrior">
      {/* WARRIOR */}
      <tr>
        <th scope="row" rowSpan="9" aria-label="warrior"><Warrior /></th>
        <td aria-label="draenei"><Draenei /></td>
        <td>146</td>
        <td>93</td>
        <td>132</td>
        <td>34</td>
        <td>53</td>
        <td>5584</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="dwarf"><Dwarf /></td>
        <td>147</td>
        <td>92</td>
        <td>136</td>
        <td>32</td>
        <td>50</td>
        <td>5624</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="gnome"><Gnome /></td>
        <td>140</td>
        <td>99</td>
        <td>132</td>
        <td>38</td>
        <td>51</td>
        <td>5584</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="human"><Human /></td>
        <td>145</td>
        <td>96</td>
        <td>133</td>
        <td>33</td>
        <td>56</td>
        <td>5594</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="nightelf"><Nightelf /></td>
        <td>142</td>
        <td>101</td>
        <td>132</td>
        <td>33</td>
        <td>51</td>
        <td>5584</td>
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
