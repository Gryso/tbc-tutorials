import React from "react";
import "./raceStats.scss";
import {Druid, Mage, Priest, Shaman, Warlock} from "../gameElements/class/classes";
import {Bloodelf, Draenei, Dwarf, Gnome, Human, Nightelf, Orc, Tauren, Troll, Undead} from "../gameElements/race/races";

const RaceStats = () => {
  return (
    <table className="spellDpsStatsTable" aria-describedby="spell-dps-stats">
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
        <td aria-label="tauren"><Tauren /></td>
        <td>83</td>
        <td>66</td>
        <td>87</td>
        <td>142</td>
        <td>139</td>
      </tr>
      </tbody>

      <tbody className="mage">
      {/* MAGE */}
      <tr>
        <th scope="row" rowSpan="6" aria-label="mage"><Mage /></th>
        <td aria-label="draenei"><Draenei /></td>
        <td>34</td>
        <td>36</td>
        <td>50</td>
        <td>152</td>
        <td>147</td>
        <td>3713</td>
        <td>4241</td>
      </tr>
      <tr>
        <td aria-label="gnome"><Gnome /></td>
        <td>28</td>
        <td>42</td>
        <td>50</td>
        <td>162</td>
        <td>145</td>
        <td>3713</td>
        <td>4391</td>
      </tr>
      <tr>
        <td aria-label="human"><Human /></td>
        <td>33</td>
        <td>39</td>
        <td>51</td>
        <td>151</td>
        <td>159</td>
        <td>3723</td>
        <td>4226</td>
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

      <tbody className="warlock">
      {/* WARLOCK */}
      <tr>
        <th scope="row" rowSpan="5" aria-label="warlock"><Warlock /></th>
        <td aria-label="gnome"><Gnome /></td>
        <td>46</td>
        <td>61</td>
        <td>75</td>
        <td>143</td>
        <td>131</td>
        <td>4060</td>
        <td>4480</td>
      </tr>
      <tr>
        <td aria-label="human"><Human /></td>
        <td>51</td>
        <td>58</td>
        <td>76</td>
        <td>133</td>
        <td>144</td>
        <td>4070</td>
        <td>4330</td>
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
