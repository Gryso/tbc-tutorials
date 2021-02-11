import React from "react";
import "./raceStats.scss";
import {Druid, Hunter, Mage, Paladin, Priest, Rogue, Shaman, Warlock, Warrior} from "../gameElements/class/classes";
import {Draenei, Dwarf, Gnome, Human, Nightelf} from "../gameElements/race/races";
import {alliance} from "./raceStats";


const RaceStats = () => {
  return (
    <table className="raceStatsTable alliance" aria-describedby="alliance">
      <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Race</th>
        <th scope="col">Strength</th>
        <th scope="col">Agility</th>
        <th scope="col">Stamina</th>
        <th scope="col">Intellect</th>
        <th scope="col">Spirit</th>
        <th scope="col">Health</th>
        <th scope="col">Mana</th>
      </tr>
      </thead>

      {/*---ALLIANCE---*/}
      <tbody className="druid">
      {/* DRUID */}
      <tr>
        <th scope="row" rowSpan="1" aria-label="druid"><Druid /></th>
        <td aria-label="nightelf"><Nightelf /></td>
        <td>73</td>
        <td>75</td>
        <td>82</td>
        <td>120</td>
        <td>133</td>
        <td>4254</td>
        <td>3890</td>
      </tr>
      </tbody>

      <tbody className="hunter">
      {/* HUNTER */}
      <tr>
        <th scope="row" rowSpan="3" aria-label="hunter"><Hunter /></th>
        <td aria-label="draenei"><Draenei /></td>
        <td>65</td>
        <td>148</td>
        <td>107</td>
        <td>78</td>
        <td>85</td>
        <td>4458</td>
        <td>4273</td>
      </tr>
      <tr>
        <td aria-label="dwarf"><Dwarf /></td>
        <td>66</td>
        <td>147</td>
        <td>111</td>
        <td>76</td>
        <td>82</td>
        <td>4498</td>
        <td>4243</td>
      </tr>
      <tr>
        <td aria-label="nightelf"><Nightelf /></td>
        <td>61</td>
        <td>156</td>
        <td>107</td>
        <td>77</td>
        <td>83</td>
        <td>4458</td>
        <td>4258</td>
      </tr>
      </tbody>

      <tbody className="mage">
      {/* MAGE */}
      <tr>
        <th scope="row" rowSpan="3" aria-label="mage"><Mage /></th>
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
      </tbody>

      <tbody className="paladin">
      {/* PALADIN */}
      <tr>
        <th scope="row" rowSpan="3" aria-label="paladin"><Paladin /></th>
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
      </tbody>

      <tbody className="priest">
      {/* PRIEST */}
      <tr>
        <th scope="row" rowSpan="4" aria-label="priest"><Priest /></th>
        <td aria-label="draenei"><Draenei /></td>
        <td>40</td>
        <td>42</td>
        <td>57</td>
        <td>146</td>
        <td>153</td>
        <td>3781</td>
        <td>4530</td>
      </tr>
      <tr>
        <td aria-label="dwarf"><Dwarf /></td>
        <td>41</td>
        <td>41</td>
        <td>61</td>
        <td>144</td>
        <td>150</td>
        <td>3821</td>
        <td>4500</td>
      </tr>
      <tr>
        <td aria-label="human"><Human /></td>
        <td>39</td>
        <td>45</td>
        <td>58</td>
        <td>145</td>
        <td>166</td>
        <td>3791</td>
        <td>4515</td>
      </tr>
      <tr>
        <td aria-label="nightelf"><Nightelf /></td>
        <td>36</td>
        <td>50</td>
        <td>57</td>
        <td>145</td>
        <td>151</td>
        <td>3781</td>
        <td>4515</td>
      </tr>
      </tbody>

      <tbody className="rogue">
      {/* ROGUE */}
      <tr>
        <th scope="row" rowSpan="4" aria-label="rogue"><Rogue /></th>
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
      </tbody>

      <tbody className="shaman">
      {/* SHAMAN */}
      <tr>
        <th scope="row" rowSpan="1" aria-label="shaman"><Shaman /></th>
        <td aria-label="draenei"><Draenei /></td>
        <td>103</td>
        <td>61</td>
        <td>113</td>
        <td>109</td>
        <td>122</td>
        <td>4109</td>
        <td>4313</td>
      </tr>
      </tbody>

      <tbody className="warlock">
      {/* WARLOCK */}
      <tr>
        <th scope="row" rowSpan="2" aria-label="warlock"><Warlock /></th>
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
      </tbody>

      <tbody className="warrior">
      {/* WARRIOR */}
      <tr>
        <th scope="row" rowSpan="5" aria-label="warrior"><Warrior /></th>
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
      </tbody>
    </table>
  );
};

export default RaceStats;
