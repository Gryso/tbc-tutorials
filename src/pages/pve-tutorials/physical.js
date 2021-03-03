import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import PveTutorialsMenu from "../../components/menus/sideMenus/PveTutorialsSideMenu";
import {Heading2, Heading3, Heading4, Title} from "../../components/headers/headers";
import {Link} from "gatsby";
import {
  agilityFor1PercentCrit,
  agilityToCrit,
  critRatingToCrit,
  expertiseFor1PercentReduction,
  expertiseRatingFor1Expertise,
  missChanceForLevel,
  ratingFor1Percent
} from "../../data/statsFormulas";
import {Druid, Hunter, Paladin, Rogue, Shaman, Warrior} from "../../components/gameElements/class/classes";
import {Arms, Fury} from "../../components/gameElements/talentSpecialisation/TalentSpecialisations";
import {ExpertiseDataTable, GlancingBlowDataTable} from "../../components/dataTables/physicalDpsDataTables";
import Item from "../../components/gameElements/item/Item";


class Feral extends React.Component {
  render() {
    return null;
  }
}

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
          Critical Strike is successfully hit that deals 200% damage of normal hit.
        </p>
        There are 2 ways to increase your chance of Critical Strike:
        <ol>
          <li>
            <strong>Critical Strike Rating</strong>: Increase critic chance by {critRatingToCrit(1)}%
            per point. ({ratingFor1Percent("meleeCrit")} Critical Strike Rating for 1% chance)
          </li>

          <li><strong>Agility</strong>:
            <ul>
              <li>
                <Druid />: needs {agilityFor1PercentCrit("druid")} agility for 1% of Critically Strike
                ({agilityToCrit(1, "druid")}% chance per point)
              </li>
              <li>
                <Hunter />: needs {agilityFor1PercentCrit("hunter")} agility for 1% of Critically Strike
                ({agilityToCrit(1, "hunter")}% chance per point)
              </li>
              <li>
                <Paladin />: needs {agilityFor1PercentCrit("paladin")} agility for 1% of Critically Strike
                ({agilityToCrit(1, "paladin")}% chance per point)
              </li>
              <li>
                <Rogue />: needs {agilityFor1PercentCrit("rogue")} agility for 1% of Critically Strike
                ({agilityToCrit(1, "rogue")}% chance per point)
              </li>
              <li>
                <Shaman />: needs {agilityFor1PercentCrit("shaman")} agility for 1% of Critically Strike
                ({agilityToCrit(1, "shaman")}% chance per point)
              </li>
              <li>
                <Warrior />: needs {agilityFor1PercentCrit("warrior")} agility for 1% of Critically Strike
                ({agilityToCrit(1, "warrior")}% chance per point)
              </li>
            </ul>
          </li>
        </ol>
        <Heading3>Hit</Heading3>
        <p>
          Hit is basic successfully hit that deals 100% damage. There si no much more to it. Hit fills remaining space
          in <Link to="/stats-and-mechanics/attack-tables">Attack Table</Link> table up to 100 and can be pushed out if
          rest of the possibilities is higher than 100%.
        </p>
        <Heading3>Glancing Blow</Heading3>
        <p>
          Glancing Blow is successful attack damage of which is reduces to 75% of normal hit. Chance for Glancing Blow
          against Boss (lvl 73) is 25%, there is no way to avoid it as there is no stat that decrease this chance
          and it cannot be pushed out of <Link to="/stats-and-mechanics/attack-tables">Attack Table</Link> table as it
          has higher priority than Critical Strike and Hit. Glancing Blow is only possible on white attacks, yellow
          attacks (spells and abilities) cannot glance.
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
          This includes: <Druid />, <Hunter />, <Paladin />, <Arms /> <Warrior /> and <Shaman /> if he uses two-hand
          weapon.
        </p>
        <p>
          Players wielding Single Weapon has {missChanceForLevel(73)}% chance to Miss attack against Boss (lvl 73).
          This chance is same for Special attacks and auto-attacks. You can decrease chance you will miss attack again
          boss by increasing your Hit Rating. You need {Math.ceil(ratingFor1Percent("meleeHit") * missChanceForLevel())}
          Hit rating to decrease chance of missing to 0.
        </p>
        <Heading4>Wielding Dual Weapons</Heading4>
        <p>This includes: <Rogue />, <Fury /> <Warrior /> and <Shaman /> if he uses one-hand weapons.</p>
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
          direction including rear. Boss has 6.5% chance to Dodge player attack. This means you
          need {expertiseFor1PercentReduction() * 6.5} Expertise
          or {Math.ceil(expertiseFor1PercentReduction() * expertiseRatingFor1Expertise() * 6.5)} Expertise Rating to
          decrease chance of Dodge to 0%. Expertise Rating is very important and should have priority over any other
          stat as it does not matter how hard can you hit if your attack is completely avoided. Expertise rating should
          arguably have higher priority than Hit rating despite fact they provide same damage increase, because items
          with Expertise Rating are much rarer.
        </p>
        <ExpertiseDataTable />


        <Heading2>Armor</Heading2>
        <Heading2>Attack Power</Heading2>
        <Heading2>Attack Speed</Heading2>
        <Item id={9088}>Gift of Arthas</Item>
        <Heading2>Normalization</Heading2>

        {/*<ArmorReductionCalculator/>*/}
      </SideMenuLayout>
    </MainLayout>
  );
};

export default Physical;
