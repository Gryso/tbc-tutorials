import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import PveTutorialsMenu from "../../components/menus/sideMenus/PveTutorialsSideMenu";
import {Heading2, Heading3, Heading4, Heading5, Title} from "../../components/headers/headers";
import {Link} from "gatsby";
import {
  agilityFor1PercentCrit,
  agilityToCrit,
  attackPowerMultiplier,
  critRatingToCrit,
  damageReductionOfArmor,
  dualWieldingMissIncrease,
  expertiseFor1PercentReduction,
  expertiseRatingFor1Expertise,
  intellectToMana,
  missChanceForLevel,
  ratingFor1Percent
} from "../../data/statsFormulas";
import {Druid, Hunter, Paladin, Rogue, Shaman, Warlock, Warrior} from "../../components/gameElements/class/classes";
import {Arms, Fury} from "../../components/gameElements/talentSpecialisation/TalentSpecialisations";
import {
  AmountOfArmorValuesDataTable,
  ArmorPenetrationOnFixedArmorDataTable, DpsIncreasePerCritChancePercent,
  ExpertiseDataTable,
  FixedArmorPenetrationOnArmorDataTable,
  GlancingBlowDataTable,
  MeleeHasteDataTable
} from "../../components/dataTables/physicalDpsDataTables";
import Item from "../../components/gameElements/item/Item";
import Talent from "../../components/gameElements/talent/Talent";
import Spell from "../../components/gameElements/spell/Spell";
import {BearForm, CatForm} from "../../components/gameElements/stances/stances";
import Formula from "../../components/formula/Formula";
import {Wolf} from "../../components/gameElements/minion/minions";
import {
  ImpactOfDifferentSpiritAndIntellectDistributionDataTable,
  PointsSplitBetweenSpiritAndIntellectDataTable
} from "../../components/dataTables/spellDataTables";
import {orderedArmorAmounts} from "../../data/bossArmor";
import Table from "../../components/table/Table";
import Expresion from "../../components/expresion/Expresion";

const Physical = () => {

  return (
    <MainLayout pageTitle="Physical DPS mechanics">
      <SideMenuLayout sideMenu={PveTutorialsMenu}>
        <Title>Physical DPS mechanics</Title>

        <Heading2>Hitting the Enemy</Heading2>
        <p>
          Pleas read <Link to="/stats-and-mechanics/enemy-level-and-characters-statistics">Impact of enemy level on
          characters statistics</Link> first as it will be mentioned numerous time trough this tutorial.
        </p>
        <p>
          All following information assumes player attacking enemy from behind. <strong>All melee physical classes
          (except for tank) should always attack enemy from behind to
          avoid</strong> <Link to="/stats-and-mechanics/parry-haste">Parry Haste</Link>.
        </p>

        <Heading3>Critical Strike</Heading3>
        <p>
          Critical Strike is successfully hit that deals 200% damage of normal hit. (This is 100% bonus damage for
          calculation in talents and items that "Increase Critical Strike damage bonus
          by X" <Talent id={19490}>Mortal Shots</Talent> would increase your Critical Strike damage to 230% overall)
        </p>
        There are 2 ways to increase your chance of Critical Strike:
        <ol>
          <li>
            <strong>Critical Strike Rating</strong>: Increase critic chance by {critRatingToCrit(1)}%
            per point. (<strong>{ratingFor1Percent("meleeCrit")}</strong> Critical Strike Rating for 1% chance)
          </li>

          <li><strong>Agility</strong>:
            <ul>
              <li>
                <Druid />: needs <strong>{agilityFor1PercentCrit("druid")}</strong> agility for 1% of
                Critical Strike ({agilityToCrit(1, "druid")}% chance per point)
              </li>
              <li>
                <Hunter />: needs <strong>{agilityFor1PercentCrit("hunter")}</strong> agility for 1% of
                Critical Strike ({agilityToCrit(1, "hunter")}% chance per point)
              </li>
              <li>
                <Paladin />: needs <strong>{agilityFor1PercentCrit("paladin")}</strong> agility for 1% of
                Critical Strike ({agilityToCrit(1, "paladin")}% chance per point)
              </li>
              <li>
                <Rogue />: needs <strong>{agilityFor1PercentCrit("rogue")}</strong> agility for 1% of
                Critical Strike ({agilityToCrit(1, "rogue")}% chance per point)
              </li>
              <li>
                <Shaman />: needs <strong>{agilityFor1PercentCrit("shaman")}</strong> agility for 1% of
                Critical Strike ({agilityToCrit(1, "shaman")}% chance per point)
              </li>
              <li>
                <Warrior />: needs <strong>{agilityFor1PercentCrit("warrior")}</strong> agility for 1% of
                Critical Strike ({agilityToCrit(1, "warrior")}% chance per point)
              </li>
            </ul>
          </li>
        </ol>
        <DpsIncreasePerCritChancePercent/>

        <Heading3>Hit</Heading3>
        <p>
          Hit is basic successfully hit that deals 100% damage. There si no much more to it. Hit fills remaining space
          in <Link to="/stats-and-mechanics/attack-tables">Attack Table</Link> up to 100 and can be pushed out if
          rest of the possibilities is higher than 100%.
        </p>

        <Heading3>Glancing Blow</Heading3>
        <p>
          Glancing Blow is successful attack damage of which is reduces to 75% of normal hit. Chance for Glancing Blow
          against Boss (lvl 73) is 25%, there is no way to avoid it as there is no stat that decrease this chance
          and it cannot be pushed out of <Link to="/stats-and-mechanics/attack-tables">Attack Table</Link> table as it
          has higher priority than Critical Strike and Hit. Glancing Blow is only possible on white melee attacks,
          yellow attacks (spells and abilities) and Ranged attacks cannot glance.
        </p>
        <GlancingBlowDataTable />

        <Heading3>Miss</Heading3>
        <p>
          Miss is unsuccessfully hit that deals no damage. Chance of missing is different for players using single
          weapon
          and players using two weapons. Chance of Missing an attack can be decreased with Hit Rating or by various
          spells and talents. Hit Rating is very important and should (along with Expertise rating) have priority over
          any other stat as it does not matter how hard can you hit if you miss your attack.
        </p>

        <Heading4>Wielding Single Weapon</Heading4>
        <p>
          This includes: <Druid />, <Hunter />, <Paladin />, <Arms /> <Warrior /> and <Shaman /> if they uses two-hand
          weapon (or one one-hand weapon).
        </p>
        <p>
          Players wielding Single Weapon has {missChanceForLevel(73)}% chance to Miss attack against Boss (lvl 73).
          This chance is same for Special attacks and auto-attacks. You can decrease chance you will miss attack again
          boss by increasing your Hit Rating. You
          need {Math.ceil(ratingFor1Percent("meleeHit") * missChanceForLevel(73))} Hit rating to decrease chance of
          missing to 0.
        </p>

        <Heading4>Wielding Dual Weapons</Heading4>
        <p>This includes: <Rogue />, <Fury /> <Warrior /> and <Shaman /> if they use two one-hand weapons.</p>
        <ul>
          <li>
            <strong>Special attack</strong>: Players wielding Dual Weapon has {missChanceForLevel(73)}% chance
            to Miss <strong>Special attack</strong> against Boss (lvl 73). You can decrease chance you will
            miss <strong>Special attack</strong> again boss by increasing your hit rating. You
            need {Math.ceil(ratingFor1Percent("meleeHit") * missChanceForLevel(73))} Hit rating
            to decrease chance of missing a <strong>Special attack</strong> to 0. This is often referred to as a
            Soft Hit Cap. Hit Rating before reaching Soft Hit Cap is very important and should (along with Expertise
            rating) have priority over any other stat.
          </li>
          <li>
            <strong>Auto-attack</strong>: Players wielding Dual Weapon has {missChanceForLevel(73, 2)}% chance
            to Miss <strong>Auto-attack</strong> against Boss (lvl 73). You can decrease chance you will
            miss <strong>Auto-attack</strong> again boss by increasing your hit rating. You
            need {Math.ceil(ratingFor1Percent("meleeHit") * missChanceForLevel(73, 2))} Hit rating
            to decrease chance of missing a <strong>Auto-attack</strong> to 0. This is often referred to as a
            Hard Hit Cap. After reaching Soft Hit Cap value of Hit rating dramatically decreases (especially compared to
            Expertise Rating) and depending on your class it might be better to rather invest in other stats.
          </li>
        </ul>

        <Heading3>Dodge</Heading3>
        <p>
          Dodge is hit completely avoided by Boss resulting in miss. Boss, unlike the player, can Dodge from every
          direction including rear. Boss has 6.5% chance to Dodge player attack. (<Hunter />'s ranged attack cannot be
          dodged making Expertise Rating useless for Hunters.) You can decrease chance boss will dodge your attack with
          Expertise.
        </p>
        <Heading5>Expertise</Heading5>
        <p>
          Expertise decrease chance enemy will dodge your attack by 0.25%. Expertise can be improved with Expertise
          Rating
          and you need {expertiseRatingFor1Expertise()} Expertise Rating for one Expertise This means you
          need {expertiseFor1PercentReduction() * 6.5} Expertise
          or {Math.ceil(expertiseFor1PercentReduction() * expertiseRatingFor1Expertise() * 6.5)} Expertise Rating to
          decrease chance of Dodge to 0%. Expertise Rating is very important and should have priority over any other
          stat
          as it does not matter how hard can you hit if your attack is completely avoided. Expertise rating should
          arguably have higher priority than Hit rating despite fact they provide same damage increase, because items
          with
          Expertise Rating are much rarer.
        </p>
        <ExpertiseDataTable />

        <Heading3>Block</Heading3>
        <p>
          We need more information
        </p>

        <Heading2>Improving Damage</Heading2>
        <Heading3>Armor reduction</Heading3>
        <p>
          Armor is attribute that decreases physical damage received. Reduction is applied to damage of every successful
          attack. The most common ({orderedArmorAmounts[0].proportion}% of encounters) armor value on Boss
          is {orderedArmorAmounts[0].armor} which reduces damage
          by {damageReductionOfArmor(+orderedArmorAmounts[0].armor, 70, true)}% and second most common
          ({orderedArmorAmounts[1].proportion}% of encounters) armor value on Boss
          is {orderedArmorAmounts[1].armor} which reduces
          damage by {damageReductionOfArmor(+orderedArmorAmounts[1].armor, 70, true)}%. You can increase your damage by
          directly reducing armor of boss (using spells like <Spell id={26993}>Faerie Fire</Spell> or items like <Item
          id={12798} quality="rare">Annihilator</Item>) or by items with Armor Penetration.
        </p>
        <AmountOfArmorValuesDataTable />

        <Heading5>Armor Penetration</Heading5>
        <p>
          Armor Penetration reduces amount of enemies Armor affecting your attacks. It is usually found on items with
          'Your attacks ignore x of your opponent's armor' bonuses. Improving Damage (like <Item id={32591}>Choker of
          Serrated Blades</Item>). You can learn more in our <Link to="/stats-and-mechanics/armor-reduction-calculator">Armor
          Reduction Calculator</Link>
        </p>

        <ArmorPenetrationOnFixedArmorDataTable />
        Amount of damage increased per point of Armor Penetration is not linear and grows faster the more Penetration
        you have.
        <FixedArmorPenetrationOnArmorDataTable />
        Damage increase of Armor Penetration grows indirectly with amount of armor enemy has, meaning less armor enemy
        has more effective Armor Penetration is.

        <Heading3>Attack Power</Heading3>
        <p>
          Attack Power is attribute that increase your damage you need {attackPowerMultiplier} Attack Power to increase
          DPS of your Auto Attack by 1. Attack power also increase damage of your Special Attacks and Abilities.
        </p>
        There are 3 ways to increase your Attack Power:
        <ol>
          <li>
            <strong>Increases Attack Power Bonus</strong>: Straight up increase Attack Power (both Ranged and Melee)
          </li>
          <li>
            <strong>Strength</strong>:
            <ul>
              <li>
                <Druid />, <Paladin />, <Shaman /> and <Warrior />: Each point of strength increases Melee Attack Power
                by <strong>2</strong>
              </li>
              <li>
                <Rogue />, <Hunter />: Each point of strength increases Melee Attack Power
                by <strong>1</strong>
              </li>
            </ul>
          </li>
          <li>
            <strong>Agility</strong>:
            <ul>
              <li>
                <Rogue />, <Druid /> in <CatForm />, <Hunter />: Each point of Agility
                increases <strong>Melee</strong> Attack Power by <strong>1</strong>
              </li>
              <li>
                <Hunter />, <Rogue /> and <Warrior />: Each point of Agility
                increases <strong>Ranged</strong> Attack Power by <strong>1</strong>
              </li>
            </ul>
          </li>
        </ol>

        <Table cellAlign="center" leftAlignFirstColumn={true}>
          <caption>AP calculation (lvl 70 no talents)</caption>
          <thead>
            <tr>
              <th>Class</th>
              <th>Str</th>
              <th>Agi</th>
              <th>Lvl</th>
              <th>Penalty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th aria-label="druid" scope="row"><Druid /></th>
              <td>x2</td>
              <td>x0</td>
              <td>x0</td>
              <td>-20</td>
            </tr>
            <tr>
              <th aria-label="cat form" scope="row"><CatForm /></th>
              <td>x2</td>
              <td>x1</td>
              <td>x2</td>
              <td>-20</td>
            </tr>
            <tr>
              <th aria-label="bear form" scope="row"><BearForm /></th>
              <td>x2</td>
              <td>x0</td>
              <td>x3</td>
              <td>-20</td>
            </tr>
            <tr>
              <th aria-label="hunter (melee)" scope="row"><Hunter /> (Melee)</th>
              <td>x1</td>
              <td>x1</td>
              <td>x2</td>
              <td>-20</td>
            </tr>
            <tr>
              <th aria-label="hunter (ranged)" scope="row"><Hunter /> (Ranged)</th>
              <td>x0</td>
              <td>x1</td>
              <td>x2</td>
              <td>-10</td>
            </tr>
            <tr>
              <th aria-label="paladin" scope="row"><Paladin /></th>
              <td>x2</td>
              <td>x0</td>
              <td>x3</td>
              <td>-20</td>
            </tr>
            <tr>
              <th aria-label="rogue" scope="row"><Rogue /></th>
              <td>x1</td>
              <td>x1</td>
              <td>x2</td>
              <td>-20</td>
            </tr>
            <tr>
              <th aria-label="shaman" scope="row"><Shaman /></th>
              <td>(x1) - 10</td>
              <td>x0</td>
              <td>x2</td>
              <td>-20</td>
            </tr>
            <tr>
              <th aria-label="warrior" scope="row"><Warrior /></th>
              <td>x2</td>
              <td>x0</td>
              <td>x3</td>
              <td>-20</td>
            </tr>
          </tbody>
        </Table>

        <Heading4>Auto-Attacks Damage</Heading4>
        <p>
          Without weapon you hit for 1-2 damage every 2 seconds (0.6 DPS) when you use weapon both speed and damage are
          based on Weapon attributes (except <CatForm/> 51-75 every second (63 dps) and <BearForm/> 127-188 every 2.5
          seconds (63 dps)).
        </p>
        <p>
          Weapon damage is also increased by you Attack Power. Note this is <strong>Weapon Speed</strong> (or normalized
          speed) not character attack speed (damage calculation is done before other bonuses like Haste Rating Speed
          increase). Game uses following calculations for you Damage (various talents may alter this values): </p>
        <ul>
          <li>
            <strong>MainHand / TwoHand</strong>:
            <ul>
              <li><strong>Min Damage</strong>: <Expresion>WeaponMinimalDamage + (AP/14 * WeaponSpeed)</Expresion></li>
              <li><strong>Max Damage</strong>: <Expresion>WeaponMaximalDamage + (AP/14 * WeaponSpeed)</Expresion></li>
              <li><strong>DPS</strong>: <Expresion>WeaponDPS + AP/14</Expresion></li>
            </ul>
          </li>
          <li>
            <strong>OffHand</strong>:
            <ul>
              <li><strong>Min Damage</strong>: <Expresion>(WeaponMinimalDamage + (AP/14 * WeaponSpeed)) / 2</Expresion></li>
              <li><strong>Max Damage</strong>: <Expresion>(WeaponMaximalDamage + (AP/14 * WeaponSpeed)) / 2</Expresion></li>
              <li><strong>DPS</strong>: <Expresion>(63 + AP/14) / 2</Expresion></li>
            </ul>
          </li>
          <li>
            <strong><CatForm/></strong>:
            <ul>
              <li><strong>Min Damage</strong>: <Expresion>51 + (AP/14 * 1)</Expresion></li>
              <li><strong>Max Damage</strong>: <Expresion>75 + (AP/14 * 1)</Expresion></li>
              <li><strong>DPS</strong>: <Expresion>63 + AP/14</Expresion></li>
            </ul>
          </li>
          <li>
            <strong><BearForm/></strong>:
            <ul>
              <li><strong>Min Damage</strong>: <Expresion>127 + (AP/14 * 2.5)</Expresion></li>
              <li><strong>Max Damage</strong>: <Expresion>188 + (AP/14 * 2.5)</Expresion></li>
              <li><strong>DPS</strong>: <Expresion>63 + AP/14</Expresion></li>
            </ul>
          </li>
          <li>
            <strong>Hands</strong>:
            <ul>
              <li><strong>Min Damage</strong>: <Expresion>~1 + (AP/14 * 2)</Expresion></li>
              <li><strong>Max Damage</strong>: <Expresion>~2 + (AP/14 * 2)</Expresion></li>
              <li><strong>DPS</strong>: <Expresion>~0.8 + AP/14</Expresion></li>
            </ul>
          </li>
        </ul>

        <Heading4>Special Attacks Damage</Heading4>
        <p>
          The base damage of any Special melee attack that does "weapon damage" is the actual damage of Main-hand
          weapon. This means Special Attacks with slower weapon (with same DPS) will do more damage than with fast
          weapon.
        </p>

        <Heading5>Attack Power Bonus of Special Attacks</Heading5>
        Special attacks Also get bonus from your Attack Power. This is formula for non normalized abilities.
        <Formula>
          SpecialAttacksDamage = MainHandWeaponDamage + (MainHandWeaponSpeed * AttackPower / 14)
        </Formula>

        <Heading5>Attack Speed Normalization</Heading5>
        <p>
          Same instant abilities use normalized Weapon Speed in Attack Power Bonus of Special Attacks calculation to
          reduce bonus slow weapon have over fast weapon. Spell that are not normalized use their
        </p>
        Normalized weapon speed for different weapon types:
        <ul>
          <li>2.4 for one-handed weapons</li>
          <li>1.7 for daggers</li>
          <li>3.3 for two-handed weapons</li>
          <li>2.8 for ranged weapons</li>
          <li>1 for <Druid /> <CatForm /></li>
          <li>2.5 for <Druid /> <BearForm /></li>
        </ul>
        SpecialAttacksDamage is then calculated as:
        <Formula>
          SpecialAttacksDamage = MainHandWeaponDamage + (NormalizedWeaponSpeed * AttackPower / 14)
        </Formula>
        Abilities that use normalized weapon speed:
        <ul>
          <li>
            <Rogue />: <Spell id={27441}>Ambush</Spell>, <Spell id={26863}>Backstab</Spell>, <Spell
            id={26864}>Hemorrhage</Spell>, <Spell id={34413}>Mutilate</Spell>, <Spell id={5938}>Shiv</Spell> and <Spell
            id={26862}>Sinister Strike</Spell>
          </li>
          <li>
            <Warrior />: <Spell id={30016}>Devastate</Spell>, <Spell id={11585}>Overpower</Spell>, <Spell id={30330}>Mortal
            Strike</Spell> and <Spell id={1680}>Whirlwind</Spell>
          </li>
          <li><Hunter />: <Spell id={27021}>Multi-Shot</Spell></li>
        </ul>

        <Heading5>Dual Weapon Special Attacks</Heading5>
        There are Special Attacks that use both Main-hand and off-hand at once: <Spell
        id={34413}>Mutilate</Spell>, <Spell id={1680}>Whirlwind</Spell> and <Spell id={17364}>Stormstrike</Spell> their
        damage is calculated as:
        <Formula>
          SpecialAttacksDamage = (MainHandWeaponDamage + (MainHandWeaponSpeed * AttackPower/14)) + (OffHandWeaponDamage
          + (OffHandWeaponSpeed * AttackPower/14))/2
        </Formula>

        <Heading3>Attack Speed</Heading3>

        <Heading4>Global Cooldown</Heading4>
        <p>
          Global cooldown is 1.5 second (1 seconds for <Rogue /> and <Druid />'s <CatForm /> abilities) long universal
          cooldown that starts when players use any spell, ability, change equip and use same items. It prevents using
          any of mentioned in short successions. There are exceptions to this rule ans same spells do not trigger Global
          Cooldown or are not affected by it. (For example <Spell id={34026}>Kill Command</Spell>, <Spell
          id={25231}>Cleave</Spell>) or <Spell id={26669}>Evasion</Spell>) <Rogue /> and <Druid /> are still affected
          by 1.5 second long cooldown from items and other abilities.
        </p>

        <Heading4>Haste</Heading4>
        <p>
          You can decrease your time between attacks using Haste Rating. Player
          needs about {ratingFor1Percent("meleeHaste")} Haste Rating for 1% of Attack Speed
          improvement. Way attack time reduction is calculates is quite
          complicated, haste is applied after talents and increase attack speed (attacks per seconds) not reduce time
          between attack. You have to divide attack time of your weapon by speed calculated from Haste Rating to get
          reduced
          attack time of your weapon. Despite the fact that values of the speed bonus per one haste rating
          decrease in a logarithmic fashion,
          the <strong>effect of haste rating on DPS increase LINERALY</strong> and is not affected by diminishing
          return. This means one point of Haste Rating is always worth the same damage output wise. Formula for Attack
          Speed Improvement from Haste Rating:
        </p>
        <Formula>
          AttackSpeedFromHasteRating = 1 + (hasteRating / 1570)
        </Formula>
        <MeleeHasteDataTable />
        <Heading5>Other sources of attack speed</Heading5>
        <p>
          Haste rating stacks additively with itself but different sources of Casting Speed increase
          (<Spell id={6774}>Slice and Dice</Spell> and <Spell id={2825}>Bloodlust</Spell>) stacks multiplicatively.
          Formula for Attack Speed Improvement from multiple sources is:
        </p>
        <Formula>
          OverAllAttackSpeedImprovement = AttackSpeedFromHasteRating * (1 + (OtherSource1 / 100)) * (1 +
          (OtherSource2 / 100)) ...
        </Formula>
        Resulting attack time of weapon is then calculated as:
        <Formula>
          ReducedAttackTime = baseAttackTime / OverAllAttackSpeedImprovement
        </Formula>

        <Heading3>Others</Heading3>
        <p>
          There are also other bonuses that directly or indirectly increase damage either by buffing you or
          debuffing boss.
        </p>
        <Heading5>Increase your damage</Heading5>
        <p>
          This spells and items provide you with some form of damage increase be it direct, from proc or attacks.
          Examples are <Hunter /> <Wolf />'s <Spell id={24597}>Furious Howl</Spell>, <Item id={32654} quality="rare">Crystalforged
          Trinket</Item>, <Talent id={34460}>Ferocious Inspiration</Talent> and <Spell id={25587}>Windfury Totem</Spell>
        </p>
        <Heading5>Increase damage delt to the enemy</Heading5>
        <p>
          This spells or debuffs increase damage delt to or received by the enemy. Examples
          are: <Item id={9088} quality="common">Gift of Arthas</Item> or <Spell id={26864}>Hemorrhage</Spell> (They do
          not stack together)
        </p>

        <Heading2>Penalty of wielding two weapons</Heading2>
        <p>
          <Rogue />, <Hunter />, <Warrior /> and <Shaman /> with <Talent id={674}>Dual Wield</Talent> talent can
          wielding
          two one-hand weapons at once. This comes at a cost:
        </p>
        <ul>
          <li>
            <strong>Special Abilities</strong>: damage of your special abilities is (usually) calculated from your
            Main-hand weapon damage as One-Hand weapons have generally less damage than Two-Hand weapons this will
            decrease damage of your Special Abilities. (All Special Abilities also count as hit with Main-hand weapon
            for purposes of various abilities or bonuses that proc on hit)
          </li>
          <li>
            <strong>Hit chance penalty</strong>: chance to miss with both weapons is increased
            by <strong>{dualWieldingMissIncrease}% </strong>. This penalty only affects auto-attacks all special attacks
            have same chance to Hit as with one weapon.
          </li>
          <li>
            <strong>Off-Hand damage reduction</strong> damage of your off-hand weapon is reduced by <strong>50%</strong>
          </li>
        </ul>

        <Heading2>Resource</Heading2>
        <Heading4>Mana</Heading4>
        <p>
          Mana Points (short MP) is resource used by casters which they use as to cast spells. Every spell cost certain
          amount of mana to
          cast. There are two ways to increase your Mana:
        </p>
        <ol>
          <li>
            <strong>Intellect</strong> increase Mana by {intellectToMana(1)} points.
          </li>
          <li>
            <strong>+Mana bonus</strong> increase your Mana by fixed amount.
          </li>
        </ol>
        <Heading5>Mana Regeneration</Heading5>
        <p>
          Mana (for characters that have it) is regenerated every 2 seconds (Effects that directly state interval in
          which they regenerate mana are exempt from this rule) and is represented as Mana Per 5 Seconds in character
          sheet. (calculated as mana per 2 seconds * 5/2)
        </p>

        <Heading5>Spirit Based Mana Regeneration</Heading5>
        <p>
          Rate at which Spirit Based Mana Regeneration regenerates mana is based on Intellect, Spirit and character
          level. Exact formula is:
        </p>
        <Formula>
          MP5 = 5 * (0.001 + sqrt(Int) * Spirit * BaseLevelRegeneration(0.009327 for level 70) (Round up)
        </Formula>
        <Heading5>Best Spirit and Intellect Ratio</Heading5>
        <p>
          We can calculate best ratio of Spirit and Intellect for maximal mana regeneration (level 70). This ration
          is <strong>Spirit 2 / 1 intellect</strong> (There is about 0.5% buffer to both sides around this spot due to
          rounding) this means that <strong>your Intellect should always be half of your Spirit</strong> for maximal
          Spirit Based Mana Regeneration (This also provides highest bonus in mana and Spell Critical Strike making it
          all around win)
        </p>
        <PointsSplitBetweenSpiritAndIntellectDataTable />
        <ImpactOfDifferentSpiritAndIntellectDistributionDataTable />
        <p>
          (459 Intellect will make your Spirit worth 1 mana per 5 seconds. From this point up mana
          regeneration from MP5 is less valuable than Spirit (This does not take into account interruption of Spirit
          Based Mana Regeneration from Five Second Rule))
        </p>
        <Heading5>Five Second Rule</Heading5>
        <p>
          Spirit Based Mana Regeneration is interrupted for 5 seconds after player spends mana to cast a spell. (Not
          when player start casting spell) This is handled differently for Channeled Spells as mana is spend at the
          start of channeling triggering minimal amount of 5 seconds long Spirit Based Mana Regeneration interruption
          that does not end before channeling is finished. (Meaning <Warlock />'s <Spell id={27217}>Drain
          Soul</Spell> will
          interrupt Spirit Based Mana Regeneration for full 15 seconds)
        </p>

        <Heading5>MP5 bonus based Mana Regeneration</Heading5>
        <p>
          Item bonuses that directly regenerate mana ('Restores 12 mana per 5 sec' bonus) also restore mana every 2
          seconds but they are exempt from 5 second rule and continue to regenerate mana even after and during spell
          casting making them (with exceptions) more valuable than Spirit Based Mana Regeneration.
        </p>
        <Heading5>Energize effects Mana Regeneration</Heading5>
        <p>
          Energize effects like <Spell id={27142}>Blessing of Wisdom</Spell>, <Spell id={25570}>Mana Spring
          Totem</Spell> and <Spell id={33736}>Water Shield</Spell>
          are also exempt from 5 second rule and they regenerate mana in intervals written in their tooltip.
        </p>

        <Heading4>Energy</Heading4>
        <p>
          Energy is resources used by <Rogue /> and <Druid /> in <CatForm /> to execute their abilities. Maximal amount
          of energy is 100 points (<Rogue /> can increase this maximum up to 120) and it regenerates at a fixed rate of
          20 energy every 2 seconds, in and out of combat.
        </p>
        <Heading4>Rage</Heading4>
        <p>
          Rage is resources used by <Warrior /> and <Druid /> in <BearForm /> to execute their abilities. Maximal amount
          of rage is 100 points and is by default empty and builds only by being hit, by dealing damage, or by using
          certain Abilities. When out of combat, Rage degenerates or depletes at a constant rate.
        </p>

        <Heading2>Not getting killed</Heading2>
        <p>
          Read about Threat and Aggro in our <Link to="/stats-and-mechanics/threat">Threat Mechanics Tutorial</Link>
        </p>
      </SideMenuLayout>
    </MainLayout>
  );
};

export default Physical;
