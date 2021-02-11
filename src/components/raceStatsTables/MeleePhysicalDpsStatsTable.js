import React from "react";
import "./raceStats.scss";
import {Rogue, Warrior} from "../gameElements/class/classes";
import {Bloodelf, Draenei, Dwarf, Gnome, Human, Nightelf, Orc, Tauren, Troll, Undead} from "../gameElements/race/races";

const RaceStats = () => {
  return (
    <table className="meleePhysicalDpsStatsTable" aria-describedby="melee-physical-dps-stats">
      <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Race</th>
        <th scope="col">Strength</th>
        <th scope="col">Melee AP</th>
        <th scope="col">Agility</th>
        <th scope="col">Physical Crit</th>
      </tr>
      </thead>

      <tbody className="rogue">
      {/* ROGUE */}
      <tr>
        <th scope="row" rowSpan="8" aria-label="rogue"><Rogue /></th>
        <td aria-label="dwarf"><Dwarf /></td>
        <td>97</td>
        <td>154</td>
        <td>92</td>
        <td>38</td>
        <td>57</td>
        <td>4444</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="gnome"><Gnome /></td>
        <td>90</td>
        <td>161</td>
        <td>88</td>
        <td>45</td>
        <td>58</td>
        <td>4404</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="human"><Human /></td>
        <td>95</td>
        <td>158</td>
        <td>89</td>
        <td>39</td>
        <td>63</td>
        <td>4414</td>
        <td>x</td>
      </tr>
      <tr>
        <td aria-label="nightelf"><Nightelf /></td>
        <td>92</td>
        <td>163</td>
        <td>88</td>
        <td>39</td>
        <td>58</td>
        <td>4404</td>
        <td>x</td>
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
