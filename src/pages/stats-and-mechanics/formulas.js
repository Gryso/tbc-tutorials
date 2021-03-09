import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import {Heading4, Heading5, Title} from "../../components/headers/headers";
import StatsAndMechanicsSideMenu from "../../components/menus/sideMenus/StatsAndMechanicsSideMenu";
import {defenseMultiplier, expertiseMultiplier, ratingMultipliers} from "../../data/statsFormulas";
import Formula from "../../components/formula/Formula";
import Table from "../../components/table/Table";

const Formulas = () => {
  return (
    <MainLayout pageTitle="Formulas">
      <SideMenuLayout sideMenu={StatsAndMechanicsSideMenu}>
        <Title>Formulas</Title>
        <Heading4>Maximal Defense Skill</Heading4>
        <Formula>
          DefenseSkill = Level * 5
        </Formula>
        <Heading4>Maximal Weapon Skill</Heading4>
        <Formula>
          WeaponSkill = Level * 5
        </Formula>
        <Heading4>Armor for 75% Reduction</Heading4>
        <Formula>
          Armor = (1402.5 * enemyLevel) - 66502.5
        </Formula>
        <Heading4>Resistance for 75% average reduction</Heading4>
        <Formula>
          Resistance = (enemyLevel) => 5 * level;
        </Formula>
        <Heading4>Target resistance</Heading4>
        EffectiveResistance = BaseResistance - Penetration (min is 0)<br />
        BonusResistanceFromLevelDifference = (TargetLevel - CasterLevel) * 5 (min is 0)
        <Formula>
          TargetResistance = EffectiveResistance + BonusResistanceFromLevelDifference
        </Formula>
        <Heading4>Average damage reduced by resistance</Heading4>
        <Formula>
          DamageReduction = (TargetResistance / (CasterLevel * 5)) * 0.75
        </Formula>
        <Heading4>Glancing Blow Chance</Heading4>
        <Formula>
          Chance = 10 + (enemyLevel * 5) - 350
        </Formula>
        <Heading4>Player vs mob Melee Miss Chance</Heading4>
        <Heading5>Mob's Defense Skill - Player's Weapon Skill ≤ 10</Heading5>
        single-wielding-base = 5%<br />
        dual-wielding-base = 24%<br />
        <Formula>
          Chance = wielding-base + (DefenseSkill - WeaponSkill) * 0.1%
        </Formula>
        <Heading5>Mob's Defense Skill - Player's Weapon Skill > 10</Heading5>
        single-wielding-base = 7%<br />
        dual-wielding-base = 26%<br />
        <Formula>
          Chance = wielding-base + (DefenseSkill - WeaponSkill - 10) * 0.4%
        </Formula>
        <Heading4>Player vs mob spell Miss chance</Heading4>
        <Heading5>Mob's Level - Player's level ≤ 2</Heading5>
        <Formula>
          Chance = 4 + (enemyLevel - Level) * 1
        </Formula>
        <Heading5>Mob's Level - Player's level > 2</Heading5>
        <Formula>
          Chance = - 16 + (enemyLevel - Level) * 11 (There is cap at 99)
        </Formula>
        <Heading4>Cast Speed from spell haste rating</Heading4>
        <Formula>
          CastingSpeedFromSpellHasteRating = 1 + (hasteRating / 1570)
        </Formula>
        <Heading4>Cast time of spell reduced by Spell Haste Rating</Heading4>
        <Formula>
          ReducedCastTime = baseCastTime / (CastingSpeedFromSpellHasteRating * OtherCastingSpeedSource *
          OtherCastingSpeedSource * ...)
        </Formula>
        <Heading4>Casting Time Reduction of Spell Haste Rating as decimal number</Heading4>
        <Formula>
          TimeReduction = 1 - (1 / (1 + (hasteRating) / 1570))
        </Formula>
        <Heading4>Spell Haste Rating Required for Reduction</Heading4>
        <Formula>
          RequiredSpellHasteRating = 1570 * (1 / reduction - 1)
        </Formula>
        <Heading4>Level 70 Mana Regeneration</Heading4>
        <Formula>
          ManaPer5Seconds = 5 * (0.001 + sqrt(Int) * Spirit * 0.009327)
        </Formula>
        <Heading4>Damage Reduction of Block</Heading4>
        <Formula>
          DamageReduction = Block value + (Strength / 20) - 1
        </Formula>

        DamageReduction = Block value + (Strength / 20) - 1

        <Heading4 align="center">Defense Ratings</Heading4>
        <Table>
          <thead>
            <tr>
              <th>Rating</th>
              <th>Effect</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Defense Rating</td>
              <td>1 Defense Skill</td>
              <td>{ratingMultipliers.defense}</td>
            </tr>
            <tr>
              <td>Defense Skill</td>
              <td>1% Block, Dodge, Parry Change, Miss; -1% Crit, Dazed Change</td>
              <td>{defenseMultiplier}</td>
            </tr>
            <tr>
              <td>Dodge Rating</td>
              <td>1% Dodge Change</td>
              <td>{ratingMultipliers.dodge}</td>
            </tr>
            <tr>
              <td>Parry Rating</td>
              <td>1% Parry Change</td>
              <td>{ratingMultipliers.parry}</td>
            </tr>
            <tr>
              <td>Block Rating</td>
              <td>1% Block Chance</td>
              <td>{ratingMultipliers.block}</td>
            </tr>
            <tr>
              <td>Block Value</td>
              <td>1%</td>
              <td>1%</td>
            </tr>
            <tr>
              <td>Resilience Rating</td>
              <td>-1% Crit Chance, -2% Crit Damage, -1% DoT Damage</td>
              <td>{ratingMultipliers.resilience}</td>
            </tr>
          </tbody>
        </Table>

        <Heading4 align="center">Physical Combat Ratings</Heading4>
        <Table>
          <thead>
            <tr>
              <th>Rating</th>
              <th>Effect</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Expertise Rating</td>
              <td>1 Expertise</td>
              <td>{ratingMultipliers.expertise}</td>
            </tr>
            <tr>
              <td>Expertise (whole points)</td>
              <td>-1% Dodge and Parry Change</td>
              <td>{expertiseMultiplier}</td>
            </tr>
            <tr>
              <td>Hit Rating</td>
              <td>1% Hit Change</td>
              <td>{ratingMultipliers.meleeHit}</td>
            </tr>
            <tr>
              <td>Critical Strike Rating</td>
              <td>1% Critical Strike Change</td>
              <td>{ratingMultipliers.meleeCrit}</td>
            </tr>
            <tr>
              <td>Haste Rating</td>
              <td>-1% Attack Time</td>
              <td>{ratingMultipliers.meleeHaste}</td>
            </tr>
          </tbody>
        </Table>

        <Heading4 align="center">Spell Combat Ratings</Heading4>
        <Table>
          <thead>
            <tr>
              <th>Rating</th>
              <th>Effect</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Spell Hit Rating</td>
              <td>1% Spell Hit Change</td>
              <td>{ratingMultipliers.spellHit}</td>
            </tr>
            <tr>
              <td>Spell Critical Strike Rating</td>
              <td>1% Spell Critical Strike Change</td>
              <td>{ratingMultipliers.spellCrit}</td>
            </tr>
            <tr>
              <td>Haste Rating</td>
              <td>-1% Spell Casting Time</td>
              <td>{ratingMultipliers.spellHaste}</td>
            </tr>
          </tbody>
        </Table>

      </SideMenuLayout>
    </MainLayout>
  );
};

export default Formulas;
