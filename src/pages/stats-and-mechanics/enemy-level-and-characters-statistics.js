import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import {Heading2, Heading5, Title} from "../../components/headers/headers";
import StatsAndMechanicsSideMenu from "../../components/menus/sideMenus/StatsAndMechanicsSideMenu";
import {Tauren} from "../../components/gameElements/race/races";
import {Warrior} from "../../components/gameElements/class/classes";
import Icon from "../../components/gameElements/icon/Icon";
import raceStats from "../../data/raceStats";
import {
  armorCapForLevel,
  glancingChanceForLevel,
  missChanceForLevel,
  resistanceCapForLevel, spellMissChanceForLevel, spellResistanceForLevel
} from "../../data/statsFormulas";
import Table from "../../components/table/Table";

const ImpactOfEnemyLevelOnCharactersStatistics = () => {
  return (
    <MainLayout pageTitle="Impact of enemy level on characters statistics">
      <SideMenuLayout sideMenu={StatsAndMechanicsSideMenu}>
        <Title>Impact of enemy level on characters statistics</Title>
        <p>
          Game statistics that you can find in your character sheet are calculated for enemy of same level and are correct
          only for enemy of same level. This sections explains how this data change with increasing enemy level.
          <br />
        </p>

        <Heading2>Player being attacked</Heading2>
        <Heading5 anchorId="player-being-attacked-every-level-of-difference-does-following">
          Every level of difference does following:
        </Heading5>
        <ul>
          <li>
            <strong>Decrease players</strong> chance to <strong>Dodge</strong> enemy attack by <strong>0.2%</strong>
          </li>
          <li>
            <strong>Decrease players</strong> chance to <strong>Parry</strong> en attack by <strong>0.2%</strong>
          </li>
          <li>
            <strong>Decrease players</strong> chance to <strong>Block</strong> enemy attack by <strong>0.2%</strong>
          </li>
          <li>
            <strong>Decrease players</strong> chance to be <strong>Misses</strong> by enemy attack
            by <strong>0.2%</strong>
          </li>
          <li>
            Increase amount of players armor required to reach same amount of damage reduction
            by <strong>1402.5</strong>
          </li>
          <li>
            Increase amount of players resistance required to reach same level of average spell damage reduction by 5
          </li>
          <li>
            From level difference of 2, non players enemy get chance to hit player with Crushing Blow. This chance is
            5% for level difference of 2 and increase by 10% per level going forward
          </li>
        </ul>

        <Table>
          <caption>Lets use level 70 naked <Tauren /> <Warrior /> with no talents against different level npc:</caption>
          <thead>
            <tr>
              <th>Level</th>
              <th>70</th>
              <th>71</th>
              <th>72</th>
              <th>73(<Icon type="skull" />)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Player <strong>Dodge</strong></td>
              <td>{raceStats.horde.warrior.tauren.defenses.dodge}%</td>
              <td>{parseFloat(raceStats.horde.warrior.tauren.defenses.dodge - 0.2).toFixed(2)}%</td>
              <td>{parseFloat(raceStats.horde.warrior.tauren.defenses.dodge - 0.4).toFixed(2)}%</td>
              <td>{parseFloat(raceStats.horde.warrior.tauren.defenses.dodge - 0.6).toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Player <strong>Parry</strong></td>
              <td>5%</td>
              <td>4.8%</td>
              <td>4.6%</td>
              <td>4.4%</td>
            </tr>
            <tr>
              <td>Player <strong>Block</strong></td>
              <td>5%</td>
              <td>4.8%</td>
              <td>4.6%</td>
              <td>4.4%</td>
            </tr>
            <tr>
              <td>Player <strong>Armor</strong> (75% reduction)</td>
              <td>{armorCapForLevel(70)}</td>
              <td>{armorCapForLevel(71)}</td>
              <td>{armorCapForLevel(72)}</td>
              <td>{armorCapForLevel(73)}</td>
            </tr>
            <tr>
              <td>Player <strong>Resistance</strong> (75% avg. reduction)</td>
              <td>{resistanceCapForLevel(70)}</td>
              <td>{resistanceCapForLevel(71)}</td>
              <td>{resistanceCapForLevel(72)}</td>
              <td>{resistanceCapForLevel(73)}</td>
            </tr>
            <tr>
              <td>Enemy <strong>Miss</strong></td>
              <td>5%</td>
              <td>4.8%</td>
              <td>4.6%</td>
              <td>4.4%</td>
            </tr>
            <tr>
              <td>Enemy <strong>Critical Strike</strong></td>
              <td>5%</td>
              <td>5.2%</td>
              <td>5.4%</td>
              <td>5.6%</td>
            </tr>
            <tr>
              <td>Enemy <strong>Crushing Blow</strong></td>
              <td>0%</td>
              <td>0%</td>
              <td>5%</td>
              <td>15%</td>
            </tr>
          </tbody>
        </Table>

        <Heading2>Player attacking enemy</Heading2>
        <Heading5 anchorId="player-attacking-enemy-every-level-of-difference-does-following">
          Every level of difference does following:
        </Heading5>
        <ul>
          <li><strong>Increase players</strong> chance of <strong>Glancing Blow</strong> by <strong>5%</strong></li>
          <li><strong>Decrease players</strong> chance of <strong>Critical Strike</strong> by <strong>1%</strong></li>
          <li>
            <strong>Increase enemy</strong> chance to be <strong>Missed</strong> by <strong>0.5%</strong> (
            first 2 levels of difference) and <strong>3%</strong> above above that.
          </li>
          <li>
            <strong>Increase enemy</strong> chance to be <strong>Missed with spell</strong> by <strong>1%</strong> (
            first 2 levels of difference) and <strong>11%</strong> above above that.
          </li>
          <li><strong>Increase enemy</strong> chance to <strong>Dodge</strong> by <strong>0.5%</strong></li>
          <li><strong>Increase enemy</strong> chance to <strong>Parry</strong> by <strong>0.75</strong>(This is not
            confirmed)
          </li>
          <li><strong>Increase enemy</strong> chance to <strong>Resist Spell</strong> by <strong>??</strong></li>
          <li><strong>Increase enemy</strong> <strong>Resistance</strong> by <strong>5</strong></li>
        </ul>

        <Table>
          <caption>Lets use level 70 naked <Tauren /> <Warrior /> with no talents against different level npc:</caption>
          <thead>
            <tr>
              <th>Level</th>
              <th>70</th>
              <th>71</th>
              <th>72</th>
              <th>73(<Icon type="skull" />)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Player Glancing Blow</td>
              <td>{glancingChanceForLevel(70)}%</td>
              <td>{glancingChanceForLevel(71)}%</td>
              <td>{glancingChanceForLevel(72)}%</td>
              <td>{glancingChanceForLevel(73)}%</td>
            </tr>
            <tr>
              <td>Player Glancing Blow Damage</td>
              <td>??%</td>
              <td>??%%</td>
              <td>??%%</td>
              <td>75%</td>
            </tr>
            <tr>
              <td>Player Critical Strike</td>
              <td>{raceStats.horde.warrior.tauren.melee.crit.toFixed(2)}</td>
              <td>{parseFloat(raceStats.horde.warrior.tauren.melee.crit - 1).toFixed(2)}</td>
              <td>{parseFloat(raceStats.horde.warrior.tauren.melee.crit - 2).toFixed(2)}</td>
              <td>{parseFloat(raceStats.horde.warrior.tauren.melee.crit - 3).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Player Miss</td>
              <td>{missChanceForLevel(70)}%</td>
              <td>{missChanceForLevel(71)}%</td>
              <td>{missChanceForLevel(72)}%</td>
              <td>{missChanceForLevel(73)}%</td>
            </tr>
            <tr>
              <td>Player Spell Miss (Spell Hit related resist)</td>
              <td>{spellMissChanceForLevel(70)}%</td>
              <td>{spellMissChanceForLevel(71)}%</td>
              <td>{spellMissChanceForLevel(72)}%</td>
              <td>{spellMissChanceForLevel(73)}%</td>
            </tr>
            <tr>
              <td>Enemy Dodge</td>
              <td>5%</td>
              <td>5.5%</td>
              <td>6%</td>
              <td>6.5%</td>
            </tr>
            <tr>
              <td>Enemy Parry (Confirmed only for 73)</td>
              <td>11.75%</td>
              <td>12.5%</td>
              <td>13.25%</td>
              <td>14%</td>
            </tr>
            <tr>
              <td>Enemy Resistance</td>
              <td>{spellResistanceForLevel(70)}</td>
              <td>{spellResistanceForLevel(71)}</td>
              <td>{spellResistanceForLevel(72)}</td>
              <td>{spellResistanceForLevel(73)}</td>
            </tr>
          </tbody>
        </Table>

      </SideMenuLayout>
    </MainLayout>
  );
};

export default ImpactOfEnemyLevelOnCharactersStatistics;
