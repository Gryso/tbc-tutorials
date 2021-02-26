import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import PveTutorialsMenu from "../../components/menus/sideMenus/PveTutorialsSideMenu";
import {Heading2, Heading3, Heading4, Heading5, Title} from "../../components/headers/headers";
import {Druid, Hunter, Paladin, Priest, Shaman, Warlock, Warrior} from "../../components/gameElements/class/classes";
import Spell from "../../components/gameElements/spell/Spell";
import AttackTable from "../../components/attackTable/AttackTable";
import Talent from "../../components/gameElements/talent/Talent";
import {
  Balance,
  FeralCombat,
  PriestHoly,
  ShamanRestoration
} from "../../components/gameElements/talentSpecialisation/TalentSpecialisations";
import {Nightelf, Tauren} from "../../components/gameElements/race/races";
import Icon from "../../components/gameElements/icon/Icon";
import {Link} from "gatsby";
import Item from "../../components/gameElements/item/Item";
import statsFormulas, {
  agilityFor1PercentCrit,
  agilityFor1PercentDodge,
  agilityToCrit,
  armorCapForLevel,
  critRatingToCrit, defenseRatingToDefense, defenseSkillToBonus, dodgeRatingToDodge,
  glancingChanceForLevel, parryRatingToParry, ratingFor1Percent, resilienceRatingToCritReduction,
  resistanceCapForLevel
} from "../../data/statsFormulas";
import {BlackTemple, HyjalSummit, SunwellPlateau} from "../../components/gameElements/instance/Instances";
import {
  ArcaneResistance,
  FireResistance,
  FrostResistance,
  NatureResistance,
  ShadowResistance
} from "../../components/gameElements/resistances/Resistances";
import raceStats from "../../data/raceStats";
import parryExplanation from  "../../images/parryExplanation.png"


const Tank = () => {

  return (
    <MainLayout pageTitle="Tank mechanics">
      <SideMenuLayout sideMenu={PveTutorialsMenu}>
        <Title>Tank mechanics</Title>

        <AttackTable
        />

        <Heading2>Getting hit by the Boss</Heading2>
        <Heading3>Defenses tab statistics vs higher levels</Heading3>
        <p>
          Game statistics that you can find in game in your defenses tab is based on enemy of same level as you. But
          they
          are not correct against bosses that are level 73. Every level of difference decrease your chance to Dodge,
          Parry,
          Block and be missed by 0.2%, increases enemies change to Critical Strike you by 0.2%, increase armor required
          to reach same amount of damage reduction by 1402.5 and increase resistance required to reach same level of
          average spell damage reduction by 5. Also from level difference of 2, non players enemies get chance to hit
          player with Crushing Blow. This is 5% chance for 2 level difference and increase by 10% per level going
          forward.
        </p>
        <table className="simplePageTable">
          <caption>Lets use level 70 naked <Tauren /> <Warrior /> with no talents against different level npc:</caption>
          <thead>
            <tr>
              <td>Level</td>
              <th>70</th>
              <th>71</th>
              <th>72</th>
              <th>73(<Icon type="skull" />)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Player Dodge</td>
              <td>{raceStats.horde.warrior.tauren.defenses.dodge}%</td>
              <td>{parseFloat(raceStats.horde.warrior.tauren.defenses.dodge - 0.2).toFixed(2)}%</td>
              <td>{parseFloat(raceStats.horde.warrior.tauren.defenses.dodge - 0.4).toFixed(2)}%</td>
              <td>{parseFloat(raceStats.horde.warrior.tauren.defenses.dodge - 0.6).toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Player Parry</td>
              <td>5%</td>
              <td>4.8%</td>
              <td>4.6%</td>
              <td>4.4%</td>
            </tr>
            <tr>
              <td>Player Block</td>
              <td>5%</td>
              <td>4.8%</td>
              <td>4.6%</td>
              <td>4.4%</td>
            </tr>
            <tr>
              <td>Boss Miss</td>
              <td>5%</td>
              <td>4.8%</td>
              <td>4.6%</td>
              <td>4.4%</td>
            </tr>
            <tr>
              <td>Boss Critical Strike</td>
              <td>5%</td>
              <td>5.2%</td>
              <td>5.4%</td>
              <td>5.6%</td>
            </tr>
            <tr>
              <td>Boss Crushing Blow</td>
              <td>0%</td>
              <td>0%</td>
              <td>5%</td>
              <td>15%</td>
            </tr>
            <tr>
              <td>Armor (75% reduction)</td>
              <td>{armorCapForLevel(70)}</td>
              <td>{armorCapForLevel(71)}</td>
              <td>{armorCapForLevel(72)}</td>
              <td>{armorCapForLevel(73)}</td>
            </tr>
            <tr>
              <td>Resistance (75% avg. reduction)</td>
              <td>{resistanceCapForLevel(70)}</td>
              <td>{resistanceCapForLevel(71)}</td>
              <td>{resistanceCapForLevel(72)}</td>
              <td>{resistanceCapForLevel(73)}</td>
            </tr>
          </tbody>
        </table>
        <Heading3 anchorId="boss-to-player-successful-attacks">Successful attacks</Heading3>
        <Heading4 anchorId="boss-to-player-successful-attacks-critical-strike">Critical Strike</Heading4>
        <p>
          Critical Strike is successfully hit that deals 200% damage of normal hit.
          Boss (lvl 73) does have 5.6% chance to hit you with Critical Strike.
          As 200% damage is quite devastating this is first problem that tank has to solve.
          There are three ways to decrease change of Critical Strike:
        </p>
        <ol>
          <li>
            <strong>Defense Rating</strong>: Defense Rating increase your Defense skill by {defenseRatingToDefense(1)}
             ({ratingFor1Percent("defense")} defensive Rating = 1 defense skill) 1 point of defense skill does the following:
            <ul>
              <li>Decrease chance to of Critical Strike by {defenseSkillToBonus(1)}%</li>
              <li>Increase chance to Block by {defenseSkillToBonus(1)}%</li>
              <li>Increase chance to Dodge by {defenseSkillToBonus(1)}%</li>
              <li>Increase chance to Parry by {defenseSkillToBonus(1)}%</li>
              <li>Increase chance to be missed by {defenseSkillToBonus(1)}%</li>
              <li>Decrease chance to be dazed by {defenseSkillToBonus(1)}%</li>
            </ul>
            This means you need 140 Defense skill (332 Defense Rating) over your base 350 Defense skill
            making it total of 490 defense skill required to be uncritable.
          </li>
          <li>
            <strong>Resilience Rating:</strong> One point of resilience Rating decreases chance of Critical Strike
            by {resilienceRatingToCritReduction(1)}%.
            That means you need 221 resilience to be fully uncritable. Any single point in resilience Rating after
            this point is wasted as it provides no value from this point. Resilience Rating is especially advantageous
            for <FeralCombat /> <Druid /> because resilience Rating decrease chance of Critical Strike much faster
            than Defense Rating and <Druid /> does not benefit from Parry and Block chance bonus of Defense Rating.
            This means <Druid /> can reach uncritable state faster with resilience and then supplement chance to miss
            and Dodge from defense Rating with Dodge from agility for even greater effect.
          </li>
          <li>
            Pushing Critical Strike out of attack table as described
            in <Link to="#crushing-blow">Crushing Blow section</Link> but this is unreliable and not recommended as
            there are ways to actually decrease chance of Critical Strike.
          </li>
        </ol>
        Relevant talents:
        <ul>
          <li><Druid />: <Talent id={33856}>Survival of the Fittest</Talent> Reduce chance of Critical Strike by 3%,
            decreasing Critical Strike reduction required to 2.6%
          </li>
          <li><Paladin />: <Talent id={20100}>Anticipation</Talent> Increase Defense skill by 20 which reduce chance
            chance of Critical Strike by 0.8% decreasing Critical Strike reduction required to 4.8%
          </li>
          <li><Warrior />: <Talent id={12753}>Anticipation</Talent> Increase Defense skill by 20 which reduce chance
            chance of Critical Strike by 0.8% decreasing Critical Strike reduction required to 4.8%
          </li>
        </ul>
        <Heading4>Crushing Blow</Heading4>
        <p>
          Crushing Blow is successfully hit that deals 150% damage of normal hit.
          Boss (lvl 73) does have 15% chance to hit you with Crushing Blow.
          There is no stat or Rating that can decrease you chance to be hit by Crushing Blow. To avoid Crushing Blow
          you have to increase your Dodge, Block, Parry and miss chance to push possibility of Crushing Blow out of
          attack
          table. You basically need your miss, Dodge, Parry, and Block to reach 102.4% in order to become uncrushable.
          This number is bigger than 100% because
          of <Link to="#defenses-tab-statistics-vs-higher-levels">differences in defenses tab statistics and reality
          against boss level enemy</Link> you can also just subtract values from your stats as described in that
          section and aim for 100%. You can find more about attack tables here: **tank attack table here**
        </p>
        <ul>
          <li>
            For <Druid /> this is not realistically possible as they do not get half of Defense bonus and do not have
            any massive avoidance increasing spell. Increased armor and hp help <Druid /> to soak damage from
            Crushing Blow.
          </li>
          <li>
            <Warrior /> can use <Spell id={2565}>Shield Block</Spell> to reach 75% Block chance. This
            means <Warrior /> need 27.4% additional avoidance. This can be achieved on naked warrior
            with <Talent id={12753}>Anticipation</Talent> (3.2% combined avoidance)
            , <Talent id={13856}>Deflection</Talent> (5% Parry)
            , <Talent id={12727}>Shield Specialization</Talent> (5%), base miss (5%), base Parry (5%), base Block
            (5%) and average <Warrior /> Dodge of 3.92% (excluding <Nightelf /> racial)
            75% + 3.2% + 5% + 5% + 5% + 5% + 5% + 3.92% = 107.12%
          </li>
          <li>
            <Paladin /> can use <Spell id={27179}>Holy Shield</Spell> and <Talent id={20137}>Redoubt</Talent> reaching
            60% Block chance. Adding <Item id={29388}>Libram of Repentance</Item> (5.33% Block),
            <Talent id={20100}>Anticipation</Talent> (3.2% combined avoidance), <Talent
            id={13856}>Deflection</Talent> (5% Parry),
            base miss (5%), base Parry (5%), base Block (5%) and average <Paladin /> Dodge of 3.88%
            60% + 5.33% + 3.2% + 5% + 5% + 5% + 5% + 3.88% = 92.41
            This lefts around 9.99% of avoidance to be fill before becoming uncrushable
          </li>
        </ul>
        <table className="simplePageTable">
          <caption>Bosses not capable of Crushing Blow:</caption>
          <thead>
            <tr>
              <th>Instance</th>
              <th>Non-Crushing Bosses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><HyjalSummit /></td>
              <td>Azgalor, Archimonde</td>
            </tr>
            <tr>
              <td><BlackTemple /></td>
              <td>Illidan Stormrage, Mother Shahraz, Galthois the Shatterer(Council)</td>
            </tr>
            <tr>
              <td><SunwellPlateau /></td>
              <td>Kalecgos|Sathrovarr the Corruptor, Felmyst, Brutallus, M'uru|Entropius, Kil'jaeden</td>
            </tr>

          </tbody>
        </table>
        <Heading4 anchorId="boss-to-player-successful-attacks-hit">Hit</Heading4>
        <p>
          Hit is basic successfully hit that deals 100% damage. There si no much more to it. You can avoid normal hits
          by pushing them away from attack table as they have lowes priority (being push out by both Critical Strike and
          Crushing Blow) and fills remaining space to 100.
        </p>

        <Heading3 anchorId="boss-to-player-avoided-attacks">Avoided attacks</Heading3>
        <Heading4 anchorId="boss-to-player-avoided-attacks-miss">Miss</Heading4>
        <p>
          Miss is unsuccessfully hit that deals no damage. You can increase chance boss will miss attack again you by
          increasing your Defense skill directly or with Defense Rating. One point of Defense skill increases chance
          boss will miss you by 0.04%.
        </p>
        Relevant talents and spells:
        <ul>
          <li>
            <Paladin />: <Talent id={20100}>Anticipation</Talent> Increase Defense skill by 20 which increase chance
            to be missed by 0.8%
          </li>
          <li>
            <Warrior />: <Talent id={12753}>Anticipation</Talent> Increase Defense skill by 20 which increase chance
            to be missed by 0.8%
          </li>
          <li>
            <Balance /> <Druid /> can use <Spell id={27013}>Insect Swarm</Spell> and <Hunter /> can
            use <Spell id={3043}>Scorpid Sting</Spell> to reduce chance boss will hit you. This two spells does not
            stack.
          </li>
        </ul>
        <Heading4 anchorId="boss-to-player-avoided-attacks-dodge">Dodge</Heading4>
        <p>
          Dodge is hit completely avoided by player resulting in miss.
          You can Dodge only frontal melee attacks. There are four ways to increase your chance of dodging an attack:
        </p>
        <ol>
          <li>
            <strong>Defense skill</strong> directly or with Defense Rating increases your chance of Dodge
            by {defenseSkillToBonus(1)}% per defense skill.
          </li>
          <li>
            <strong>Dodge Rating</strong> increase your chance of dodging an attack by 1%
            per {ratingFor1Percent("dodge")} Dodge
            Rating ({dodgeRatingToDodge(1)} Dodge chance per 1 Dodge Rating)
          </li>
          <li>
            <strong>Agility</strong> increase your chance of dodging an attack. Actual rate differs per class:
            <ul>
              <li><Druid />: {statsFormulas.druid.agiToDodge} Dodge chance per 1 agility</li>
              <li><Paladin />: {statsFormulas.paladin.agiToDodge} Dodge chance per 1 agility</li>
              <li><Warrior />: {statsFormulas.warrior.agiToDodge} Dodge chance per 1 agility</li>
            </ul>
          </li>
          <li>
            <Spell id={20582}>Quickness</Spell> is <Nightelf/> only racial that increase chance to Dodge by 1%
          </li>
        </ol>
        Relevant talents and spells:
        <ul>
          <li><Druid />: <Talent id={24866}>Feral Swiftness</Talent> increases chance to Dodge an attack by 4%
            and <Talent id={33856}>Survival of the Fittest</Talent> increases your agility by 3%
          </li>
          <li>
            <Paladin />: <Talent id={20100}>Anticipation</Talent> Increase Defense skill by 20 which increase chance
            to Dodge an attack by 0.8%
          </li>
          <li>
            <Warrior />: <Talent id={12753}>Anticipation</Talent> Increase Defense skill by 20 which increase chance
            to Dodge an attack by 0.8%
          </li>
          <li>
            Any spell that increase your agility for instance: <Spell id={25359}>Grace of Air Totem</Spell>,
            <Spell id={20217}>Blessing of Kings</Spell>, <Spell id={26990}>Mark of the Wild</Spell>
          </li>
        </ul>
        <Heading4 anchorId="boss-to-player-avoided-attacks-parry">Parry</Heading4>
        <p>
          Parry is hit completely avoided by player resulting in miss. You can Parry only frontal melee attacks and
          only some classes can Parry. From tanking classes <Paladin /> and <Warrior /> can Parry. There are two ways
          to increase your chance to Parry an attack:
        </p>
        <ol>
          <li>
            <strong>Defense skill</strong> directly or with Defense Rating increases your chance of Parry
            by {defenseSkillToBonus(1)}% per defense skill.
          </li>
          <li>
            <strong>Parry Rating</strong> increase your chance of Parrying an attack by 1%
            per {ratingFor1Percent("parry")} Parry
            Rating ({parryRatingToParry(1)} Parry chance per 1 Parry Rating)
          </li>
        </ol>
        <p>
          Apart from avoiding attack parry have additional effect reducing time before your next hit. Amount of time
          reduced is based on remaining time before next hit. (24% per parry on average) This makes Parry much more
          lucrative than any other avoidance as it also dramatically increase threat.
        </p>
        <strong>Parry speed increase mechanics:</strong>
        <ul>
          <li>
            <strong>Time before next hit is less than 20% of full timer</strong>: nothing happens you hit at the end of
            your
            swing timer as you would without parrying an attack. (0% speed increase)
          </li>
          <li>
            <strong>Time before next hit is between 60% and 20% of full timer</strong>: time before your next attack is
            reduces to 20%
            of your swing time. (0% - 40% speed increase (20% average))
          </li>
          <li>
            <strong>Time before next hit is more than 60% of full timer</strong>: time before your next attack is
            reduces by 40%
            of your swing time. (40% speed increase)
          </li>
        </ul>
        <img className="pageImage" src={parryExplanation} alt="Parry mechanics Explanation" />

        <Heading4 anchorId="boss-to-player-avoided-attacks-immune-and-reflect">Immune and Reflect</Heading4>
        <ul>
          <li>
            <strong>Immune</strong> is any attack totally and fully avoided by player. There are only few instances
            where this can occur. For our discussion only relevant are <Paladin/>'s "buble" spells
            like <Spell id={1020}>Divine Shield</Spell> and <Spell id={10278}>Blessing of Protection</Spell>
          </li>
          <li>
            <strong>Reflect</strong> is spell attack reflected back to enemy by player. Of tanking classes
            only <Warrior/> has ability <Spell id={23920}>Spell Reflection</Spell> that provides this effect. There are
            also same items and other spells that can trigger Reflect but they are irrelevant for our discussion.
          </li>
        </ul>

        <Heading3 anchorId="boss-to-player-mitigating-successful-attacks">Mitigating Successful Attacks</Heading3>
        <Heading4 anchorId="boss-to-player-mitigating-successful-attacks-block">Block</Heading4>
        <p>
          Block is successful attacks mitigated by player resulting in hit dealing partial damage. This partial damage
          is
          calculated as 100% damage - Shield Block value. Shield Block value is different stat from Block Rating:
        </p>
        <ul>
          <li>
            <strong>Block Rating</strong>: increase <strong>chance</strong> of Blocking an attack by 1%
            per {ratingFor1Percent("block")} Block Rating.
          </li>
          <li>
            <strong>Shield Block value</strong>: increase amount of <strong>damage absorbed</strong> by successful
            Block.
          </li>
        </ul>
        <p>
          Of tanking classes <Paladin /> and <Warrior /> wearing shield can Block. As Block mitigated only part of
          attack it is less useful than Miss, Parry or Dodge.
        </p>
        <ul>
          <li>
            <Warrior /> should aim for maximum of 25.6% (<Link to="#defenses-tab-statistics-vs-higher-levels">.6 because
            of boss level enemy</Link>) base
            Block chance to stay under 100% when combined with <Spell id={2565}>Shield Block</Spell>
          </li>
          <li>
            <Paladin /> should aim for maximum of 40.6% (<Link to="#defenses-tab-statistics-vs-higher-levels">.6 because
            of boss level enemy</Link>) base Block chance to stay under 100% when combined
            with <Spell id={27179}>Holy Shield</Spell> and <Talent id={20137}>Redoubt</Talent> (<Item id={29388}>Libram of Repentance</Item> move
            this number to 35.27% base Block chance)
          </li>
        </ul>

        Relevant talents and spells:
        <ul>
          <li>
            <Paladin />: <Talent id={20100}>Anticipation</Talent> increases Defense skill by 20 which increase chance
            to Block an attack by 0.8%, <Spell id={27179}>Holy Shield</Spell> increases Block chance by 30%, <Talent
            id={20137}>Redoubt</Talent> increases
            Block chance by 30% and <Talent id={20150}>Shield Specialization</Talent> increases the amount of damage
            absorbed by your shield by 30%.
          </li>
          <li>
            <Warrior />: <Talent id={12753}>Anticipation</Talent> Increase Defense skill by 20 which increase chance
            to Block an attack by 0.8%, <Talent id={12727}>Shield Specialization</Talent> increase chance to Block
            an attack by 5%, <Spell id={2565}>Shield Block</Spell> increases Block chance by 75%
            and <Talent id={29600}>Shield Mastery</Talent> increases the amount of damage absorbed by your shield by
            30%.
          </li>
        </ul>

        <Heading4>Armor</Heading4>
        Armor is attribute that decreases physical damage received. Reduction is applied to damage of every successful
        attack. Maximum amount of damage reduction armor can provide is 75%. This does not correlate
        to <Link to="#defenses-tab-statistics-vs-higher-levels">amount displayed in game when attacked by boss level
        enemy.</Link> Any additional point of armor above this level does nothing. <ShamanRestoration /> <Shaman />
        's <Talent id={16240}>Ancestral Healing</Talent> and <PriestHoly /> <Priest />'s <Talent id={15363}>Inspiration
      </Talent> talents increase your amor by 25%. As there is no cooldown for this buffs and they are active nearly
        100%
        of time it make sense to aim for 60% reduction and invest remaining resources to other stats as any armor above
        75% reductions is wasted.
        <table className="simplePageTable center">
          <caption>Real armor values required for maximal damage reduction:</caption>
          <thead>
            <tr>
              <th>Enemy Level</th>
              <th>75% reduction</th>
              <th>60% reduction (<Talent id={15363}>I</Talent><Talent id={16240}>AH</Talent>)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>70</td>
              <td>{armorCapForLevel(70)}</td>
              <td>{Math.ceil(armorCapForLevel(70) * 4 / 5)}</td>
            </tr>
            <tr>
              <td>71</td>
              <td>{armorCapForLevel(71)}</td>
              <td>{Math.ceil(armorCapForLevel(71) * 4 / 5)}</td>
            </tr>
            <tr>
              <td>72</td>
              <td>{armorCapForLevel(72)}</td>
              <td>{Math.ceil(armorCapForLevel(72) * 4 / 5)}</td>
            </tr>
            <tr>
              <td>73(<Icon type="skull" />)</td>
              <td>{armorCapForLevel(73)}</td>
              <td>{Math.ceil(armorCapForLevel(73) * 4 / 5)}</td>
            </tr>
          </tbody>
        </table>
        There are two ways to increase your armor:
        <ul>
          <li><strong>Amor bonus from items</strong>: This is flat amount of armor you can find on your item.
          </li>
          <li>
            <strong>Agility</strong>: 1 point of Agility increase your Armor by 2
          </li>
        </ul>
        Relevant talents and spells:
        <ul>
          <li><Druid />: <Spell id={9634}>Dire Bear Form</Spell> increase armor contributed by items by
            400%, <Talent id={16931}>Thick Hide</Talent> increases armor contributed by items by
            10%, <Talent id={33856}>Survival of the Fittest</Talent> increases your agility by
            3%, <Spell id={39233}>Mark of the Wild</Spell> increases your armor by 340 and agility by 14 (368 armor)
            and <Talent id={17055}>Improved Mark of the Wild</Talent> increases bonus to 459 armor and 18 agility (495
            armor)
          </li>
          <li>
            <Paladin />: <Talent id={12764}>Toughness</Talent> increases armor contributed by items by
            10%, <Spell id={27149}>DevotionAura</Spell> gives 862 additional armor to party
            members and <Talent id={20142}>Improved Devotion Aura</Talent> increases the armor bonus of your Devotion
            Aura by 40%
          </li>
          <li>
            <Warrior />: <Talent id={12764}>Toughness</Talent> increases armor contributed by items by 10%
          </li>
          <li>
            <ShamanRestoration /> <Shaman /> can use<Talent id={16240}>Ancestral Healing</Talent> and <PriestHoly />
            <Priest /> can
            use <Talent id={15363}>Inspiration</Talent> to increase your armor by 25%. This two effects does not
            stack. <Spell id={20217}>Blessing of Kings</Spell> increase your agility by 10%
          </li>
        </ul>

        <Heading4>Resistances</Heading4>
        <p>
          Resistance is attribute that decreases magical damage received. There are 5 school of
          resistances: <ShadowResistance />, <FireResistance />, <FrostResistance />, <NatureResistance /> and <ArcaneResistance />.
          You can only resist spells of respective school.
          Resistance cap against Boss (lvl 73) attacks is 365 giving you average damage reduction of 75%, any point of
          resistance above this is wasted.
          Resistances does not work like armor (subtracting percentage form full damage) instead you have chance to
          resist
          0%, 25%, 50%, 75%, or 100% of regular damage. This means even if you have 365 resistance you can still get hit
          for 100% or for 0% damage but on average majority of hits will be reduced by 75%.
        </p>

        <table className="simplePageTable center">
          <caption>Resistance values required for maximal damage reduction:</caption>
          <thead>
            <tr>
              <th>Enemy Level</th>
              <th>75% average reduction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>70</td>
              <td>{resistanceCapForLevel(70)}</td>
            </tr>
            <tr>
              <td>71</td>
              <td>{resistanceCapForLevel(71)}</td>
            </tr>
            <tr>
              <td>72</td>
              <td>{resistanceCapForLevel(72)}</td>
            </tr>
            <tr>
              <td>73(<Icon type="skull" />)</td>
              <td>{resistanceCapForLevel(73)}</td>
            </tr>
          </tbody>
        </table>

        Relevant spells (Basically no bonus of same school stack with each other):
        <ul>
          <li>
            <Druid />: <Spell id={39233}>Mark of the Wild</Spell> increases all your resistances by 25
            and <Talent id={17055}>Improved Mark of the Wild</Talent> increases bonus to 33 all resistances
          </li>
          <li>
            <Paladin />: <Spell id={27151}>Shadow Resistance Aura</Spell> adds 70 <ShadowResistance />
            , <Spell id={27153}>Fire Resistance Aura</Spell> adds 70 <FireResistance />
            , <Spell id={27152}>Frost Resistance Aura</Spell> adds 70 <FrostResistance />
          </li>
          <li>
            <Shaman />: <Spell id={25574}>Nature Resistance Totem</Spell> adds 70 <NatureResistance />
            , <Spell id={25563}>Fire Resistance Totem</Spell> adds 70 <FireResistance />
            , <Spell id={25560}>Frost Resistance Totem</Spell> adds 70 <FrostResistance />)
          </li>
          <li>
            <Hunter />: <Spell id={27045}>Aspect of the Wild</Spell> adds 70 <NatureResistance />
          </li>
          <li>
            <Priest />: <Spell id={25433}>Shadow Protection</Spell> adds 70 <ShadowResistance />
          </li>
          <li>
            <Warlock />'s Imp: <Spell id={27269}>Fire Shield</Spell> adds 30 <FireResistance /> and can be improved by
            30% with <Talent id={18696}>Improved Imp</Talent>
          </li>
        </ul>

        <Heading4>Stamina and HP</Heading4>


        <Heading4>Other damage reductions</Heading4>
        <Heading5>Attack power reduction</Heading5>

        <Heading5>Attack speed reduction</Heading5>
        <p>
          You can decrease Bosses attack speed to reduce damage done. Relevant talents and spells:
        </p>
        <ul>
          <li>
            <Warrior />: <Spell id={25264}>Thunder Clap</Spell> reduces attack speed by 10%. This can be improved up to
            20% with <Talent id={12666}>Improved Thunder Clap</Talent>
          </li>
          <li>
            <Warlock />'s Succubus can use <Spell id={27275}>Soothing Kiss</Spell> to reduces attack speed by 10%.
            This can be improved up to 13% with <Talent id={18756}>Improved Succubus</Talent>
          </li>
        </ul>
        <Heading5>Damage reduction</Heading5>

        <Heading5>Casting speed reduction</Heading5>
        <Heading5>Absorb</Heading5>
        <p>

        </p>

        <Heading5>Disarm</Heading5>
        <p>
          <Spell id={676}>Disarm</Spell> is <Warrior/> spell that remove targets weapon greatly decreasing its damage.
          Majority of bosses are immune to this effect but it does have some
          uses. (<Talent id={12807}>Improved Disarm</Talent> can prolong duration of <Spell id={676}>Disarm</Spell>)
        </p>
        <table className="simplePageTable">
          <caption>Bosses that can be Disarmed:</caption>
          <thead>
            <tr>
              <th>Instance</th>
              <th>Bosses that can be disarmed</th>
            </tr>
          </thead>
        </table>

        <Heading2>Hitting the Boss</Heading2>
        <Heading3 anchorId="player-to-boss-successful-attacks">Successful attacks</Heading3>
        <Heading4 anchorId="player-to-boss-successful-attacks-critical-strike">Critical Strike</Heading4>
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
                <Druid/>: needs {agilityFor1PercentCrit("druid")} agility for 1% of Critically Strike
                ({agilityToCrit(1, "druid")}% chance per point)
              </li>
              <li>
                <Paladin/>: needs {agilityFor1PercentCrit("paladin")} agility for 1% of Critically Strike
                ({agilityToCrit(1, "paladin")}% chance per point)
              </li>
              <li>
                <Warrior/>: needs {agilityFor1PercentCrit("warrior")} agility for 1% of Critically Strike
                ({agilityToCrit(1, "warrior")}% chance per point)
              </li>
            </ul>
          </li>
        </ol>
        <Heading4 anchorId="player-to-boss-successful-attacks-hit">Hit</Heading4>
        <p>
          Hit is basic successfully hit that deals 100% damage. There si no much more to it. Hit fills remaining space
          in attack table up to 100 and can be pushed out if rest of the possibilities is higher than 100%.
        </p>
        <Heading3 anchorId="player-to-boss-avoided-attacks">Avoided attacks</Heading3>
        <Heading4 anchorId="player-to-boss-avoided-attacks-miss">Miss</Heading4>
        Miss is unsuccessfully hit that deals no damage. Player attacking Boss (lvl 73) has 9.0% chance to miss with
        one hand weapon (This is also the case for <Druid/>). You can decrease chance you will miss attack again boss by
        increasing your hit rating. You need 142 Hit rating to decrease chance of missing to 0.

        This is a bit more complicated for <Paladin/> as some of his spells benefit from melee hit, some from spell hit
        and some from both. 16% spell hit is needed to be hit capped with spells against Boss (lvl 73).

        <Heading4 anchorId="player-to-boss-avoided-attacks-parry-and-dodge">Parry and Dodge</Heading4>
        <Heading3 anchorId="player-to-boss-mitigated-successful-attacks">Mitigated Successful Attacks</Heading3>
        <Heading4 anchorId="player-to-boss-mitigated-successful-attacks-glancing-blow">Glancing Blow</Heading4>
        <p>
          Glancing Blow is successful attack damage of which is reduces to 75% of normal hit. Chance for Glancing Blow
          against Boss (lvl 73) is 25%, there is no way to avoid it as there is no stat that decrease this chance
          and it cannot be pushed out of Attack table as it has higher priority than Critical Strike and Hit. Glancing
          Blow is only possible on white attacks, yellow attacks (spells and abilities) cannot glance.
        </p>
        <table className="simplePageTable center">
          <caption>Glancing Blow chance per enemy level</caption>
          <thead>
            <tr>
              <th>Enemy Level</th>
              <th>Chance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>70</td>
              <td>{glancingChanceForLevel(70)}%</td>
            </tr>
            <tr>
              <td>71</td>
              <td>{glancingChanceForLevel(71)}%</td>
            </tr>
            <tr>
              <td>72</td>
              <td>{glancingChanceForLevel(72)}%</td>
            </tr>
            <tr>
              <td>73(<Icon type="skull" />)</td>
              <td>{glancingChanceForLevel(73)}%</td>
            </tr>
          </tbody>
        </table>

        <Heading4 anchorId="player-to-boss-mitigated-successful-attacks-block">Block</Heading4>
        <p>
          Block is successful attacks mitigated by boss resulting in hit dealing partial damage. Only some Bosses are
          capable od Blocking and this Block works very differently from player Block. It is not part of attack table,
          success is calculated in separate check and any successful hit can be Blocked (Critical Strike, Hit)
        </p>


      </SideMenuLayout>

    </MainLayout>
  );
};

export default Tank;
