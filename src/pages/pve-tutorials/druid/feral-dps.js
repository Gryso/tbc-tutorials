import React from "react";
import MainLayout from "../../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../../components/layouts/sideMenuLayout/SideMenuLayout";
import PveTutorialsMenu from "../../../components/menus/sideMenus/PveTutorialsSideMenu";
import {Heading2, Heading3, Heading4, Heading5, Title} from "../../../components/headers/headers";
import Item from "../../../components/gameElements/item/Item";
import {BearForm, CatForm, SwiftFlightForm, TravelForm} from "../../../components/gameElements/stances/stances";
import Talent from "../../../components/gameElements/talent/Talent";
import Spell from "../../../components/gameElements/spell/Spell";
import Quest from "../../../components/gameElements/quest/Quest";
import {Boj} from "../../../components/gameElements/currency/currency";
import {
  Archimonde,
  Azgalor,
  Brutallus,
  EredarTwins,
  FathomLordKarathress,
  Felmyst,
  GruulTheDragonkiller,
  HexLordMalacrass,
  HighKingMaulgar,
  IllidanStormrage,
  IllidariCouncil,
  KaelthasSunstrider,
  Kalecgos,
  LadyVashj,
  LeotherasTheBlind,
  Magtheridon,
  MotherShahraz,
  PrinceMalchezaar,
  ShadeOfAran,
  Supremus,
  TheCurator,
  VoidReaver
} from "../../../components/gameElements/boss/bosses";
import {
  BlackTemple,
  GruulsLair,
  HyjalSummit,
  Karazhan,
  MagtheridonsLair,
  SerpentshrineCavern,
  SunwellPlateau,
  ZulAman
} from "../../../components/gameElements/instance/Instances";
import Table from "../../../components/table/Table";
import round from "../../../utils/round";
import statsFormulas, {
  agilityToCrit,
  critRatingToCrit,
  damageReductionOfArmor,
  expertiseFor1PercentReduction,
  expertiseRatingFor1Expertise,
  expertiseRatingToExpertise,
  expertiseToReduction,
  hasteRatingToSpeed,
  hitRatingToHitChance,
  intellectToMana,
  missChanceForLevel,
  ratingFor1Percent,
  staminaToHealth
} from "../../../data/statsFormulas";
import {
  Arms,
  Balance,
  BeastMastery,
  Enhancement,
  FeralCombat,
  Marksmanship,
  Retribution,
  Shadow,
  ShamanRestoration,
  Subtlety,
  Survival
} from "../../../components/gameElements/talentSpecialisation/TalentSpecialisations";
import {druid} from "../../../data/raceStats";
import {Draenei, Nightelf, Tauren} from "../../../components/gameElements/race/races";
import {
  Druid,
  Hunter,
  Paladin,
  Priest,
  Rogue,
  Shaman,
  Warlock,
  Warrior
} from "../../../components/gameElements/class/classes";
import {Link} from "gatsby";
import {orderedArmorAmounts} from "../../../data/bossArmor";
import {
  Alchemy,
  Blacksmithing,
  Cooking,
  Enchanting,
  Engineering,
  Firstaid,
  Fishing,
  Herbalism,
  Jewelcrafting,
  Leatherworking,
  Mining,
  Skinning,
  Tailoring
} from "../../../components/gameElements/profession/professions";
import {Wolf} from "../../../components/gameElements/minion/minions";
import SimpleMacro from "../../../components/macro/SimpleMacro";
import Expresion from "../../../components/expresion/Expresion";

function calculateWeaponAttackPower(feralAp, agility, strength, king = true) {
  let statsMultiplayer = king ? 1.133 : 1.03;
  return round((feralAp + (agility * statsMultiplayer) + (strength * statsMultiplayer * 2)) * 1.1, 0);
}

function calculateWeaponCritBonus(agility, criticalStrikeRating, king = true) {
  let statsMultiplayer = king ? 1.133 : 1.03;
  return round(agilityToCrit(agility * statsMultiplayer, "druid") + critRatingToCrit(criticalStrikeRating), 2);
}

const Physical = () => {

  return (
    <MainLayout pageTitle="Feral DPS">
      <SideMenuLayout sideMenu={PveTutorialsMenu}>
        <Title>Feral DPS (Cat)</Title>

        <Heading2>Cat Form</Heading2>
        <ol>
          <li>
            <CatForm /> Allows you to use following cat abilities:
            <ul>
              <li><Spell id={27000}>Claw</Spell></li>
              <li><Spell id={27004}>Cower</Spell></li>
              <li><Spell id={33357}>Dash</Spell></li>
              <li><Spell id={27011}>Faerie Fire (Feral)</Spell></li>
              <li><Spell id={20719}>Feline Grace</Spell></li>
              <li><Spell id={24248}>Ferocious Bite</Spell></li>
              <li><Spell id={22570}>Maim</Spell></li>
              <li><Spell id={33983}>Mangle (Cat)</Spell></li>
              <li><Spell id={27006}>Pounce</Spell></li>
              <li><Spell id={9913}>Prowl</Spell></li>
              <li><Spell id={27003}>Rake</Spell></li>
              <li><Spell id={27005}>Ravage</Spell></li>
              <li><Spell id={27008}>Rip</Spell></li>
              <li><Spell id={27002}>Shred</Spell></li>
              <li><Spell id={9846}>Tiger's Fury</Spell></li>
              <li><Spell id={5225}>Track Humanoids</Spell></li>
            </ul>
          </li>
          <li>
            <CatForm /> changes resource that you are using from Mana to Energy. (This also makes you immune to Mana
            Burn and Mana Drain effects.)
          </li>
          <li>Abilities in <CatForm /> have global cooldown reduced to 1.0 second from usual 1.5 seconds.</li>
          <li>Your <strong>base</strong> Attack Speed in <CatForm /> is normalized to 1 attack per second.</li>
          <li>
            In <CatForm /> you will cease to attack with your Weapon and use cat pawns instead fully ignoring your
            Weapon. (Due to this you are immune to <Spell id={676}>Disarm</Spell>
          </li>
          <li><CatForm /> reduces threat you generate by 29% down to 0.71 threat point per one damage delt. (0.71x
            Threat Multiplier)
          </li>
          <li>
            Spirit Based Mana regeneration in <CatForm /> is reduced by 11% down to 89%. (Energize effects and MP5 bonus
            Mana regeneration is unaffected)
          </li>
          <li>
            <CatForm /> increase your Attack Power by 40 and <Talent id={16975}>Predatory Strikes</Talent> adds another
            150 Attack Power
          </li>
          <li><CatForm /> increase your Attack Power by amount equal to your Agility</li>
          <li>
            <CatForm /> makes you immune to <Spell id={12826}>Polymorph</Spell> effects.
          </li>
          <li>
            <CatForm /> allows you to free yourself from Movement Impairing effects
            and <Spell id={12826}>Polymorph</Spell> effect by by either shapeshifting into or out of <CatForm />
          </li>
          <li>
            <CatForm /> enables passive ability <Spell id={20719}>Feline Grace</Spell> that decrease damage from falling
            by 17% (also increases the distance you can fall before taking damage)
          </li>
          <li>
            <CatForm /> allows you to track position of humanoid enemies on your minimap
            using <Spell id={5225}>Track Humanoids</Spell>
          </li>
          <li>
            <CatForm /> allows you to sneak around undetected unless particularly close to enemy
            with <Spell id={9913}>Prowl</Spell> ability
          </li>
          <li>
            <Talent id={24894}>Heart of the Wild</Talent> increase all Attack Power in <CatForm /> by 10% (Increasing
            bonus from Agility to 1.1 AP and from Strength to 2.2 AP)
          </li>
          <li>
            <Talent id={16944}>Sharpened Claws</Talent> increase chance of Critical Strike in <CatForm /> by 6%
          </li>
          <li>
            <Talent id={24866}>Feral Swiftness</Talent> increase chance to Dodge attack by 4% and increase your
            outdoor movement speed by 30% while in <CatForm />
          </li>
          <li>
            <Talent id={17007}>Leader of the Pack</Talent> provides <CatForm /> with <Spell id={24932}>Leader of the
            Pack</Spell> aura which increase chance of Critical Strike by 5% to you and your party.
          </li>
          <li>
            <Talent id={33869}>Predatory Instincts</Talent> increases Damage of your Critical Strike by 10% (This is
            whole damage not only bonus part of Critical Strike like with other talents making resulting Critical Strike
            Damage 220%)
          </li>
          <li>
            <Talent id={33873}>Nurturing Instinct</Talent> increases all healing you receive in <CatForm /> by 20%.
          </li>
          <li>
            In <CatForm /> Weapon bonuses and enchants with "Chance on Hit" effect <strong>does not work</strong>. This
            include permanent enchants like <Spell id={27984}>Enchant Weapon - Mongoose</Spell>, temporary enchants
            like <Spell id={25587}>Windfury Totem</Spell> and items like <Item id={32471}>Shard of Azzinoth</Item>. This
            is case only for <strong>weapons</strong>. other items like <Item id={28034} quality="rare">Hourglass of the
            Unraveller</Item> or <Item id={34539} quality="common">Righteous Weapon Coating</Item> does work.
          </li>
        </ol>

        <Heading2>Energy</Heading2>
        <p>
          Energy is resources used for Abilities by <Druid /> in <CatForm /> minimal amount of energy is 0 and maximal
          is
          100 (this cannot be improved for <Druid />). Energy regenerates by 20 points every 2 seconds. This interval
          begins when you ShapeShift into <CatForm /> and by default you have no 0 energy after ShapeShift, this can be
          improved with <Talent id={17061}>Furor</Talent> up to 40 and with <Item id={8345} quality="rare">Wolfshead
          Helm</Item> by 20. When you leave <CatForm /> all accumulated energy is lost.
        </p>

        <Heading2>Race</Heading2>
        <Heading5>Racials</Heading5>
        Both races have <Spell id={20551}>Nature Resistance</Spell> and <Tauren /> has <Spell
        id={20550}>Endurance</Spell> that could provide some additional survivability and <Nightelf />'s <Spell
        id={20585}>Wisp Spirit</Spell> can let you AFK a bit longer before pull as you can get there faster after wipe.
        Apart from that racials are pretty inconsequential.
        <Heading5>Base Stats</Heading5>
        <Table cellAlign="center" leftAlignFirstColumn={true} centerTable={false}>
          <thead>
            <tr>
              <th>Race</th>
              <th>Agility</th>
              <th>Strength</th>
              <th>Stamina</th>
              <th>Intellect</th>
              <th>Spirit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{druid.nightelf.component()}</td>
              <td className="highlight">{druid.nightelf.baseStats.agility}</td>
              <td>{druid.nightelf.baseStats.strength}</td>
              <td>{druid.nightelf.baseStats.stamina}</td>
              <td className="highlight">{druid.nightelf.baseStats.intellect}</td>
              <td>{druid.nightelf.baseStats.spirit}</td>
            </tr>
            <tr>
              <td>{druid.tauren.component()}</td>
              <td>{druid.tauren.baseStats.agility}</td>
              <td className="highlight">{druid.tauren.baseStats.strength}</td>
              <td className="highlight">{druid.tauren.baseStats.stamina}</td>
              <td>{druid.tauren.baseStats.intellect}</td>
              <td className="highlight">{druid.tauren.baseStats.spirit}</td>
            </tr>
          </tbody>
        </Table>
        <p>
          <Nightelf /> has much higher Agility and higher Intellect. <Tauren /> tries to compensate with Stamina, Spirit
          and Strength. <Nightelf />s Agility lead is higher than <Tauren />s Strength lead and Agility is more
          desirable stat for DPS <Druid />. Same is true for Intellect and Spirit as <Nightelf /> has higher lead and
          Intellect is more important (due to lower spirit regeneration in <CatForm />). Leaving <Tauren /> with
          additional Stamina to compensate which although helpful is not enough. This gives us clear winner, If you can
          choose <strong><Nightelf /> is better choice</strong>.
        </p>


        <Heading2>Stats</Heading2>

        <Heading3>Primary</Heading3>
        <p>
          All primary attributes calculations are affected by <Talent id={33856}>Survival of the Fittest</Talent> and
          Intellect is also affected by <Talent id={24894}>Heart of the Wild</Talent>. Attack Power values from Strength
          and Agility also include bonus from <Talent id={24894}>Heart of the Wild</Talent>. All values in parenthesis
          are values with <Spell id={20217}>Blessing of Kings</Spell> buff applied.
        </p>
        <Heading5>Agility</Heading5>
        <p>
          Agility is best stat you can get (apart from Hit and Expertise rating) one point does all of the following:
        </p>
        <ul>
          <li>Increase Attack Power by 1.133 (1.2463)</li>
          <li>
            Increase chance of Critical Strike (220% Damage) by {agilityToCrit(1, "druid")}%
            ({agilityToCrit(1.1, "druid")}%)
          </li>
          <li>
            Additional chance of Critical Strike increase amount of additional combo points
            from <Talent id={37117}>Primal Fury</Talent>
          </li>
          <li>Increase Armor by 2.2 (2.42)</li>
          <li>
            Increase your Dodge by {round(statsFormulas.druid.agiToDodge * 1.03, 3)}%
            ({round(statsFormulas.druid.agiToDodge * 1.133, 3)}%)
          </li>
          <li>
            Increase your Bonus Healing by 1 (1.1) due to <Talent id={33873}>Nurturing Instinct</Talent>
          </li>
        </ul>
        <Heading5>Strength</Heading5>
        <p>
          Strength increase your Attack Power by 2.266 (2.4926).
        </p>
        <Heading5>Stamina</Heading5>
        <p>
          Stamina increase your Health by {staminaToHealth(1.03)} ({staminaToHealth(1.133)}). For <Tauren /> with <Spell
          id={20550}>Endurance</Spell> Stamina increase your Health
          by {staminaToHealth(1.03, true)} ({staminaToHealth(1.133, true)}).
        </p>
        <Heading5>Intellect</Heading5>
        <p>
          Intellect increase Mana by {intellectToMana(1.236)} points ({intellectToMana(1.3596)}) and increase amount of
          mana regenerated by Spirit. Note one point of Intellect from equipment provides 1.03 (1.133) effective
          Intellect.
        </p>
        <Heading5>Spirit</Heading5>
        <p>
          Spirit increase Mana and Health regeneration. Health regenerated is inconsequential and for amount of Mana
          regenerated pleas check <Link to="/pve-tutorials/physical/#spirit-based-mana-regeneration">Spirit based Mana
          regeneration paragraph of our Physical DPS mechanics Tutorial</Link>, Note that mana regeneration
          in <CatForm /> is reduced to 89% and one point of Spirit provides 1.03 Spirit (1.133).
        </p>

        <Heading3>Secondary</Heading3>
        <Heading5>Expertise</Heading5>
        <p>
          Expertise decrease chance enemy will dodge or parry your attack by 0.25%. As you should <strong>always attack
          enemy from behind to
          avoid</strong> <Link to="/stats-and-mechanics/parry-haste">Parry Haste</Link>. Only dodge reduction matters to
          us as NPC can dodge attack from every direction.
          Expertise can be improved with Expertise Rating and you need {expertiseRatingFor1Expertise()} Expertise Rating
          for one Expertise. (Expertise is <strong>rounded down</strong>.)
          Boss (level 73) has 6.5% chance to Dodge player attack. This means you
          need {expertiseFor1PercentReduction() * 6.5} Expertise
          or {Math.ceil(expertiseFor1PercentReduction() * expertiseRatingFor1Expertise() * 6.5)} Expertise Rating to
          decrease chance of Dodge to 0% (This is Hard Cap and any point of Expertise Rating above this is wasted).
          There is no other way to improved this. Decrease of Dodge chance from Expertise Rating is same as decrease of
          Miss chance from Hit Ratinging point to point. But as Expertise Rating is not so common as Hit Ratinging items
          with
          Expertise Rating are more valuable. Both Expertise and Hit Ratinging should be your main priority as nothing
          else
          will provide bigger damage increase. One of most overlooked items is <Item id={30834}>Shapeshifter's
          Signet</Item> which is absolutely AWESOME improving your damage by fixed 1.25% just from Expertise Rating
          Bonus and you can just buy it from vendor (if you are Exalted with Lower City fraction).
        </p>
        <Heading5>Hit Ratinging</Heading5>
        <p>
          Hit Ratinging decrease chance you will miss target with your attacks by {hitRatingToHitChance(1)}%. Attacking
          Boss (level 73) you chance to miss is {missChanceForLevel(73)}% so you
          need {Math.ceil(ratingFor1Percent("meleeHit") * missChanceForLevel(73))} Hit Ratinging to never miss a Boss.
          Damage increase of Hit Ratinging is same as of Expertise Rating and this two stats should be main priority of
          your itemization. Nothing else will provide you with bigger damage increase. But note that any point of Hit
          Rating about required amount is wasted
        </p>
        <p>
          <Balance /> <Druid />'s <Talent id={33602}>Improved Faerie Fire</Talent> can increase chance you will hit the
          target by 3% which reduces Hit Ratinging required
          to {Math.ceil(ratingFor1Percent("meleeHit") * (missChanceForLevel(73) - 3))}. <Balance /> <Druid /> should be
          in your raid (If not talk to your raid leader), but you should also carry same additional items with Hit
          Rating to swap in case there is no <Balance /> in your raid. (Ideally also weapon with Hit Ratinging so you
          can
          swap it in case your <Balance /> <Druid /> dies during combat.) Another cheap trick is to itemize for 122 Hit
          Rating and use <Item id={33872} quality="common">Spicy Hot Talbuk</Item> instead of Agility food if there is
          no <Balance /> <Druid />. You are not benefiting from full <Talent id={33602}>Improved Faerie
          Fire</Talent> bonus but you can be lazy and have few more slots in your bag.
        </p>
        <p>
          (<Draenei /> <Warrior />, <Paladin /> and <Hunter /> have racial ability <Spell id={6562}>Heroic
          Presence</Spell> which increase chance you will hit by 1%. That
          is only {Math.ceil(ratingFor1Percent("meleeHit") * (missChanceForLevel(73) - 1))} or
          even {Math.ceil(ratingFor1Percent("meleeHit") * (missChanceForLevel(73) - 4))} (With <Talent
          id={33602}>Improved Faerie Fire</Talent>) Hit Ratinging required for lucky <Nightelf />.)
        </p>
        <Heading5>Attack Power</Heading5>
        <p>
          Attack Power increase damage of your abilities and your overall DPS by 0.071 per point (or 1 DPS per 14AP).
          Every point of Attack Power increase your effective Attack Power by 1.1 (due to <Talent id={24894}>Heart of
          the Wild</Talent>). If there is <Enhancement /> <Shaman /> in your group <Talent id={30811}>Unleashe
          Rage</Talent>increase this value to 1.21 effective Attack Power.
        </p>
        <Heading5>Critical Strike Rating</Heading5>
        <p>
          Critical Strike Rating increase you chance of Critical Strike by {critRatingToCrit(1)} which also increase
          amount of additional combo points from <Talent id={37117}>Primal Fury</Talent> talent
        </p>
        <Heading5>Armor Penetration</Heading5>
        <p>
          Armor Penetration found on items with 'ignore x of your opponent's armor' reduce amount of enemies armor that
          affect your attacks. There are two common values you should be prepared most common
          is {orderedArmorAmounts[0].armor} and second most common is {orderedArmorAmounts[1].armor} to match both value
          you should aim for default (in your main gear) value of {orderedArmorAmounts[1].armor} armor reduction
          (including all raid buffs and debuffs) and be able to swap items that will bump your Armor penetration up
          to {orderedArmorAmounts[0].armor} when necessary. Any point of Armor Penetration above enemies armor (again
          count in all buffs/debuffs) is wasted and Damage Increase from Armor Penetration scales in faster than liner
          fashion (more Penetration you have more effective it is). So it is important to get the amount just right and
          if you focus on Armor Penetration make sure you stick to it. You can learn more in <Link
          to="/pve-tutorials/physical/#armor-penetration">Armor Penetration part of our Physical DPS mechanics
          tutorial</Link> and play with our <Link to="/stats-and-mechanics/armor-reduction-calculator">Armor Reduction
          Calculator</Link>
        </p>
        <Heading5>Haste Rating</Heading5>
        <p>
          Haste Rating reduce attack between your attacks by about {hasteRatingToSpeed(1)} per point. Way haste rating
          is calculated is quite complicated and you can read about it in our <Link
          to="/pve-tutorials/physical/#haste">Physical DPS mechanics</Link> tutorial. Note that Haste Rating also
          increase amount of procs from <Spell id={16864}>Omen of Clarity</Spell>, <Link
          to="pve-tutorials/druid/feral-dps/#malorne-harness-t4">Malorne Harness set 2 piece Bonus</Link> and trinkets
          like <Item id={28830}>Dragonspine Trophy</Item> or <Item id={32505}>Madness of the Betrayer</Item>. (Despite
          the popular belief that haste is less effective on classes with fast attack speed haste is still awesome
          for <Druid /> as that is not how percentages work.)
        </p>

        <Heading2>Talents</Heading2>
        <p>
          Talents are to same degree relative and should be customized for your situation so even tough we will list
          same standard build do not follow them religiously.
        </p>
        <ul>
          <li><Link
            to="https://calculators.iradei.eu/talents/druid?00000000000000000000055000213232211530125105503301000000000000">Pure
            DPS</Link></li>
          <li><Link
            to="https://calculators.iradei.eu/talents/druid?00000000000000000000055000213232212532125105503001000000000000">Pure
            DPS but I cannot waste mana fast enough</Link></li>
          <li><Link
            to="https://calculators.iradei.eu/talents/druid?01000000000000000000050320213232212513125105503001000000000000">I
            like my PvP</Link></li>
          <li><Link
            to="https://calculators.iradei.eu/talents/druid?00000000000000000000050303213232210530125105503301000000000000">Tank/DPS
            hybrid</Link></li>
        </ul>

        <Heading2>Abilities</Heading2>
        <p>
          If your hostile Ability either one that generates Combo Points or Finishing move are Parried, Dodged, Absorbed
          or you
          miss your attack 80% of energy cost is returned (or in other word Ability costs only 20% if attack does not
          connect). On Block even if all damage is fully absorbed no energy is returned.
        </p>
        [quote=Rlnshadow]Which means that an OoC Ferocious Bite at 100 energy will deal 410 more damage. Pretty
        sick.[/quote] Yes. It's so bad it's sick. If you use the energy for two Mangles or Shreds instead, you will do
        at least four times the damage. If Clearcasting procs, you have 5 combo points, ~40 energy or more and is
        about to use Ferocious Bite, don't use it. The 40 energy amounts to about 170 damage, while a Mangle or Shred
        and a Ferocious Bite afterwards would deal much higher damage. It doesn't matter that the combo point is
        wasted, you will still do much less damage if you burn Clearc

        <Heading3>Powershifting</Heading3>
        <p>
          Powershifting is the act of switching out and back into <CatForm /> in order to gain instant boost of Energy
          from <Talent id={17061}>Furor</Talent> talent and <Item id={8345} quality="rare">Wolfshead Helm</Item>.
          This replenish energy much faster than regular Energy regeneration and allow you to instantly use
          another <Spell id={27002}>Shred</Spell> and then some. This is very Mana intensive and require good mana
          management as well as constant use of <Item id={31677} quality="common">Fel Mana Potion</Item> or <Item
          id={22832} quality="common">Super Mana Potion</Item>.
        </p>
        <p>
          Usual Powershifting macro you will see recommended is <Expresion>/cast !Cat Form</Expresion> which is quite
          bad and forces you to estimate everything by manually wasting huge sums of Energy and time. Our macro will not
          let you Shapeshift if next energy tick will provide you enough Energy for another <Spell
          id={27002}>Shred</Spell> (saving mana) and if you are not able to shapeshift back to <CatForm /> (saving
          auto-attacks). (Dire Bear Form is used intentionally in #show command to prevent green glow of active spell
          around the Powershifting macro. As <BearForm /> and <CatForm /> cost same amount of mana and have same GCD you
          will see all necessary information. But We recommend use of custom icon as <Expresion>?</Expresion> Icon will
          result in Dire Bear Form icon.)
        </p>
        <SimpleMacro
          name="Powershifting"
          description={"This is best Powershifting macro you can use"}
          text={`#show Dire Bear Form
/script local gcd=GetSpellCooldown("Cat Form");  local e = UnitMana("player"); if gcd==0 and e<22 then CancelPlayerBuff("Cat Form") end;
/stopmacro [stance:3]
/cast Cat Form(Shapeshift)`}
        />

        <Heading3>Combo Points</Heading3>
        <ul>
          <li><Spell id={27000}>Claw</Spell></li>
          <li><Spell id={33983}>Mangle (Cat)</Spell></li>
          <li><Spell id={27006}>Pounce</Spell></li>
          <li><Spell id={27003}>Rake</Spell></li>
          <li><Spell id={27005}>Ravage</Spell></li>
          <li><Spell id={27002}>Shred</Spell></li>
        </ul>
        <Heading3>Finishing moves</Heading3>
        <ul>
          <li><Spell id={24248}>Ferocious Bite</Spell></li>
          <li><Spell id={22570}>Maim</Spell></li>
          <li><Spell id={27008}>Rip</Spell></li>
        </ul>
        <Heading3>Rest</Heading3>
        <ul>
          <li><Spell id={33357}>Dash</Spell></li>
          <li><Spell id={27011}>Faerie Fire (Feral)</Spell></li>
          <li><Spell id={20719}>Feline Grace</Spell></li>
          <li><Spell id={9913}>Prowl</Spell></li>
          <li><Spell id={9846}>Tiger's Fury</Spell></li>
          <li><Spell id={5225}>Track Humanoids</Spell></li>
        </ul>

        <Heading2>Rotation</Heading2>

        <Heading2>Equipment</Heading2>
        <Heading3>Equipment Sets</Heading3>
        <Heading5 anchorId="malorne-harness-t4">Malorne Harness (T4)</Heading5>
        <ul>
          <li><Item id={29096}>Breastplate of Malorne</Item> (<Magtheridon /> <MagtheridonsLair />)</li>
          <li><Item id={29097}>Gauntlets of Malorne</Item> (<TheCurator /> <Karazhan />)</li>
          <li><Item id={29099}>Greaves of Malorne</Item> (<GruulTheDragonkiller /> <GruulsLair />)</li>
          <li><Item id={29100}>Mantle of Malorne</Item> (<HighKingMaulgar /> <GruulsLair />)</li>
          <li><Item id={29098}>Stag-Helm of Malorne</Item> (<PrinceMalchezaar /> <Karazhan />)</li>
          <li><strong>(2) Set</strong>: Your melee attacks in Cat Form have a chance to generate 20 additional energy.
          </li>
          <li><strong>(4) Set</strong>: Increases your strength by 30 in Cat Form.</li>
        </ul>
        <p>
          2 Set Bonus is <strong>AMAZING</strong> it is hard to quantify how amazing it exactly is but it is with no
          doubt best <CatForm /> set bonus. Only think holding it back are relatively weak stats of T4 items chance is
          4%. 4 Set Bonus is fine but nothing extraordinary as 30 Strength is not that hard to get nor that useful
        </p>

        <Heading5 anchorId="nordrassil-harness-t5">Nordrassil Harness (T5)</Heading5>
        <ul>
          <li><Item id={30222}>Nordrassil Chestplate</Item> (<KaelthasSunstrider /> <SerpentshrineCavern />)</li>
          <li><Item id={30223}>Nordrassil Handgrips</Item> (<LeotherasTheBlind /> <SerpentshrineCavern />)</li>
          <li><Item id={30228}>Nordrassil Headdress</Item> (<LadyVashj /> <SerpentshrineCavern />)</li>
          <li><Item id={30229}>Nordrassil Feral-Kilt</Item> (<FathomLordKarathress /> <SerpentshrineCavern />)</li>
          <li><Item id={30230}>Nordrassil Feral-Mantle</Item> (<VoidReaver /> <SerpentshrineCavern />)</li>
          <li><strong>(2) Set</strong>: When you shift out of Bear Form or Cat Form, your next Regrowth spell takes 2
            fewer sec. to cast.
          </li>
          <li><strong>(4) Set</strong>: Your Shred ability deals an additional 75 damage.</li>
        </ul>
        <p>
          2 Set Bonus is useful for same niche situations but apart from that pretty useless.
          4 Set Bonus is good but nothing special 75 <Spell id={27002}>Shred</Spell> damage is less than bonus
          from <Item id={29390}>Everbloom Idol</Item>.
        </p>

        <Heading5 anchorId="thunderheart-harness-t6">Thunderheart Harness (T6)</Heading5>
        <ul>
          <li><Item id={31042}>Thunderheart Chestguard</Item> (<IllidanStormrage /> <BlackTemple />)</li>
          <li><Item id={31034}>Thunderheart Gauntlets</Item> (<Azgalor /> <HyjalSummit />)</li>
          <li><Item id={31039}>Thunderheart Cover</Item> (<Archimonde /> <HyjalSummit />)</li>
          <li><Item id={31044}>Thunderheart Leggings</Item> (<IllidariCouncil /> <BlackTemple />)</li>
          <li><Item id={31048}>Thunderheart Pauldrons</Item> (<MotherShahraz /> <BlackTemple />)</li>
          <li><Item id={34556}>Thunderheart Waistguard</Item> (<Brutallus /> <SunwellPlateau />)</li>
          <li><Item id={34444}>Thunderheart Wristguards</Item> (<Kalecgos /> <SunwellPlateau />)</li>
          <li><Item id={34573}>Thunderheart Treads</Item> (<Felmyst /> <SunwellPlateau />)</li>
          <li><strong>(2) Set</strong>: Reduces the energy cost of your Mangle ability in Cat Form by 5.</li>
          <li><strong>(4) Set</strong>: Increases the damage dealt by your Rip and Ferocious Bite abilities by 15%.</li>
        </ul>
        <p>
          2 Set Bonus is great reducing energy you have to spend on <Spell id={33983}>Mangle (Cat)</Spell> in your
          rotation.
          4 Set Bonus is amazing 15% bonus to <Spell id={27008}>Rip</Spell> and <Spell id={24248}>Ferocious
          Bite</Spell> greatly increa your DPS.
        </p>

        <Heading5 anchorId="gladiators-sanctuary-s1234">Gladiator's Sanctuary (S1, S2,S3,S4)</Heading5>
        <ul>
          <li><Item id={34998}>Brutal Gladiator's Dragonhide Gloves</Item></li>
          <li><Item id={34999}>Brutal Gladiator's Dragonhide Helm</Item></li>
          <li><Item id={35000}>Brutal Gladiator's Dragonhide Legguards</Item></li>
          <li><Item id={35001}>Brutal Gladiator's Dragonhide Spaulders</Item></li>
          <li><Item id={35002}>Brutal Gladiator's Dragonhide Tunic</Item></li>
          <li><strong>(2) Set</strong>: +35 Resilience Rating.</li>
          <li><strong>(4) Set</strong>: Increases your movement speed by 15% while in Bear Form, Cat Form, or Travel
            Form. Only active outdoors.
          </li>
        </ul>
        <p>
          2 Set Bonus is of no use for DPS feral druid
          4 Set Bonus can be beneficial in same situations but those are few and far between.
        </p>

        <Heading3>Weapons</Heading3>
        <p>
          Weapons on <Druid /> in <CatForm /> works differently than on other classes and all they do is provide you
          with stats. Speed and Damage of your Weapon and your Weapon Skill have no effect on your Attacks
          in <CatForm />. Your speed in <CatForm /> is normalized to 1 second, all damage is based on <CatForm /> damage
          which is calculated from your Attack Power, and your Weapon Skill in <CatForm /> is always considered to be
          350 no matter what weapon do you use.
        </p>
        <Heading5>Weapon comparison</Heading5>
        <p>
          Best early weapon you can get is <Item id={28658}>Terestian's
          Stranglestaff</Item> from <ShadeOfAran /> in <Karazhan /> and you will not be able to replace it until t5/s2
          where (in case that you have enough hit) <Item id={32014}>Merciless Gladiator's Maul</Item> can be used. Then
          you will have to wait for <ZulAman /> and get <Item id={33465}>Staff of Primal
          Fury</Item> from <HexLordMalacrass /> or <Item id={33716}>Vengeful Gladiator's Staff</Item>. With opening of
          Isle of Quel'Danas you will be able to buy <Item id={34898}>Staff of the Forest Lord</Item> for
          150 <Boj /> and later you can get <Item id={35103}>Brutal Gladiator's Staff</Item> or even the best weapon
          available <Item id={34198}>Stanchion of Primal Instinct</Item> from <EredarTwins /> in <SunwellPlateau />.
        </p>
        <Table cellAlign="center" leftAlignFirstColumn={true}>
          <caption><FeralCombat /> Weapon Stats (Totals include <Spell id={20217}>Blessing of Kings</Spell>)</caption>
          <thead>
            <tr>
              <th>Weapon</th>
              <th>Feral AP</th>
              <th>Agility</th>
              <th>Strength</th>
              <th>Total AP</th>
              <th>Total Crit</th>
              <th>Other</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong><Item id={34198}>Stanchion of Primal Instinct</Item></strong></td>
              <td>1197</td>
              <td className="highlight">75</td>
              <td>47</td>
              <td className="highlight">{calculateWeaponAttackPower(1197, 75, 47)}</td>
              <td className="highlight">{calculateWeaponCritBonus(75, 0)}%</td>
              <td className="highlight">350 Armor Reduction</td>
            </tr>
            <tr>
              <td><strong><Item id={35103}>Brutal Gladiator's Staff</Item></strong></td>
              <td>1197</td>
              <td />
              <td className="highlight">50</td>
              <td>{calculateWeaponAttackPower(1197, 0, 50)}</td>
              <td>{calculateWeaponCritBonus(0, 50)}%</td>
              <td className="highlight">+26 Hit Rating</td>
            </tr>
            <tr>
              <td><strong><Item id={34898}>Staff of the Forest Lord</Item></strong></td>
              <td>1110</td>
              <td>52</td>
              <td className="highlight">50</td>
              <td>{calculateWeaponAttackPower(1110, 52, 50)}</td>
              <td>{calculateWeaponCritBonus(52, 0)}%</td>
              <td />
            </tr>
            <tr>
              <td><strong><Item id={33716}>Vengeful Gladiator's Staff</Item></strong></td>
              <td>1110</td>
              <td />
              <td>46</td>
              <td>{calculateWeaponAttackPower(1110, 0, 46)}</td>
              <td>{calculateWeaponCritBonus(0, 46)}%</td>
              <td>+22 Hit Rating</td>
            </tr>
            <tr>
              <td><strong><Item id={33465}>Staff of Primal Fury</Item></strong></td>
              <td>973</td>
              <td>49</td>
              <td />
              <td>{calculateWeaponAttackPower(973, 49, 0)}</td>
              <td>{calculateWeaponCritBonus(49, 0)}%</td>
              <td>315 Armor Reduction</td>
            </tr>
            <tr>
              <td><strong><Item id={32014}>Merciless Gladiator's Maul</Item></strong></td>
              <td>1010</td>
              <td />
              <td>42</td>
              <td>{calculateWeaponAttackPower(1010, 0, 42)}</td>
              <td>{calculateWeaponCritBonus(0, 42)}%</td>
              <td>+18 Hit Rating</td>
            </tr>
            <tr>
              <td><strong><Item id={28658}>Terestian's Stranglestaff</Item></strong></td>
              <td>829</td>
              <td>37</td>
              <td>38</td>
              <td>{calculateWeaponAttackPower(829, 37, 38)}</td>
              <td>{calculateWeaponCritBonus(37, 0)}%</td>
              <td>+25 Hit Rating</td>
            </tr>
            <tr>
              <td><strong><Item id={28476}>Gladiator's Maul</Item></strong></td>
              <td>894</td>
              <td />
              <td>32</td>
              <td>{calculateWeaponAttackPower(894, 0, 32)}</td>
              <td>{calculateWeaponCritBonus(0, 35)}%</td>
              <td>+20 Hit Rating</td>
            </tr>
            <tr>
              <td><strong><Item id={30883}>Pillar of Ferocity</Item></strong></td>
              <td>1059</td>
              <td />
              <td>47</td>
              <td>{calculateWeaponAttackPower(1059, 0, 47)}</td>
              <td>{calculateWeaponCritBonus(0, 0)}%</td>
              <td />
            </tr>
            <tr>
              <td><strong><Item id={29171}>Earthwarden</Item></strong></td>
              <td>712</td>
              <td />
              <td />
              <td>{calculateWeaponAttackPower(712, 0, 0)}</td>
              <td>{calculateWeaponCritBonus(0, 0)}%</td>
              <td className="highlight">+24 Expertise Rat</td>
            </tr>
            <tr>
              <td><strong><Item id={29359}>Feral Staff of Lashing</Item></strong></td>
              <td>754</td>
              <td>35</td>
              <td>36</td>
              <td>{calculateWeaponAttackPower(754, 35, 36)}</td>
              <td>{calculateWeaponCritBonus(35, 0)}%</td>
              <td />
            </tr>
            <tr>
              <td><strong><Item id={31334}>Staff of Natural Fury</Item></strong></td>
              <td>712</td>
              <td />
              <td>35</td>
              <td>{calculateWeaponAttackPower(712, 0, 35)}</td>
              <td>{calculateWeaponCritBonus(0, 0)}%</td>
              <td className="highlight">-200 Shapeshift Mana</td>
            </tr>
            <tr>
              <td><strong><Item id={30021}>Wildfury Greatstaff</Item></strong></td>
              <td>992</td>
              <td />
              <td />
              <td>{calculateWeaponAttackPower(992, 0, 0)}</td>
              <td>{calculateWeaponCritBonus(0, 0)}%</td>
              <td />
            </tr>
          </tbody>
        </Table>
        <Heading5 anchorId="staff-of-primal-fury"><Item>Staff of Primal Fury</Item></Heading5>
        <p>
          Although not the best staff for your DPS <Item id={31334}>Staff of Natural Fury</Item> has amazing bonus that
          decrease mana cost of all you form by 200. This provides countless awesome advantages and fact that you can
          just pull it out of from you bag at any time makes it even better. <strong>Every <Druid /> should have <Item
          id={31334}>Staff of Natural Fury</Item> in his inventory.</strong> You will find yourself in situation when
          you ran out of mana from Powershifting or you need that one more shapeshift after <Spell
          id={20747}>Rebirth</Spell> or <Spell id={29166}>Innervate</Spell> to stay relevant in fight. Or you want to
          save same mana on <TravelForm /> spam when you need to get out of slow or roots. Or you are just that fucking
          efficient and want to save mana on <SwiftFlightForm />. There are many uses for <Item id={31334}>Staff of
          Natural Fury</Item> and You should have it at your disposal.
        </p>


        <Heading3>Trinkets</Heading3>
        <p>
          Majority of trinkets with use effect share 30 second long cooldown that prevents you using 2 of them at once.
        </p>
        <Table cellAlign="center" leftAlignFirstColumn={true} centerTable={false}>
          <caption>Values include <Talent id={33856}>Survival of the Fittest</Talent>, <Spell id={20217}>Blessing of
            Kings</Spell> and <Talent id={24894}>Heart of the Wild</Talent></caption>
          <thead>
            <tr>
              <th>Trinket</th>
              <th>Type</th>
              <th>Passive</th>
              <th>Use/Proc</th>
              <th>Duration</th>
              <th>Cooldown</th>
              <th>Averaged Bonus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2}><strong><Item id={34472}>Shard of Contempt</Item></strong><br /></td>
              <td>P</td>
              <td>44 Expertise</td>
              <td>253 AP</td>
              <td>20</td>
              <td>45</td>
              <td>112 AP</td>
            </tr>
            <tr>
              <td colSpan={7}>
                This trinket is super annoying as it does not look as awesome and flashy as other late game toys but
                flat {expertiseToReduction(expertiseRatingToExpertise(44))}% damage increase with great long AP proc is
                just too damn good to pass on.
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={28830}>Dragonspine Trophy</Item></strong><br /></td>
              <td>P</td>
              <td>44 AP</td>
              <td>325 Haste</td>
              <td>10</td>
              <td>20</td>
              <td>81 Haste</td>
            </tr>
            <tr>
              <td colSpan={7}>
                {round(hasteRatingToSpeed(325), 1)}% attack speed
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={32505}>Madness of the Betrayer</Item></strong><br /></td>
              <td>P</td>
              <td>20 Hit/92 AP</td>
              <td>-300 Armor</td>
              <td>10</td>
              <td>0</td>
              <td>-300 Armor</td>
            </tr>
            <tr>
              <td colSpan={7}>
                Everything about this trinket is great just not the best. But if you are missing Hit or Armor
                penetration go for it. (Maximal damage increase by armor reduction
                is {damageReductionOfArmor(300, 70, true)}%)
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={34427}>Blackened Naaru Sliver</Item></strong><br /></td>
              <td>P</td>
              <td>54 Haste</td>
              <td>0-484 AP</td>
              <td>20</td>
              <td>50</td>
              <td>151 AP</td>
            </tr>
            <tr>
              <td colSpan={7}>
                It take about 7 to 8 seconds to build up 10 stacks giving you about 12 seconds of full effect averaging
                around 377AP. You can plan your rotation and Finishing Move timing around the bonus.
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={30627}>Tsunami Talisman</Item></strong><br /></td>
              <td>P</td>
              <td>38 Crit/10 Hit</td>
              <td>374 AP</td>
              <td>10</td>
              <td>45</td>
              <td>83 AP</td>
            </tr>
            <tr>
              <td colSpan={7}>
                This is as suited for <FeralCombat /> <Druid /> as something can be. Huge crit (which trinket also
                improves by {critRatingToCrit(38)}%) guarantees fast proc. AP from proc is solid but a bit short and
                additional Hit will never offend.
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={33831}>Berserker's Call</Item></strong><br /></td>
              <td>U</td>
              <td>99 AP</td>
              <td>396 AP</td>
              <td>20</td>
              <td>120</td>
              <td>66 AP</td>
            </tr>
            <tr>
              <td colSpan={7}>
                Just pure row power. AP ussually is not soo good for <FeralCombat /> <Druid /> but this baby has so much
                of it..
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={32654} quality="rare">Crystalforged Trinket</Item></strong><br /></td>
              <td>U</td>
              <td>7 Wep Damage</td>
              <td>237 AP</td>
              <td>10</td>
              <td>60</td>
              <td>39 AP</td>
            </tr>
            <tr>
              <td colSpan={7}>
                This is quite underrated gem with <CatForm /> base speed of 1 sec this gives you at minimum 7dps
                increase just from auto-attack. Add your special attacks some Haste or <Spell
                id={2825}>Bloodlust</Spell> and active bonus and you get surprisingly good trinket.
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={28579}>Romulo's Poison Vial</Item></strong><br /></td>
              <td>P</td>
              <td>35 Hit</td>
              <td>222-333 Damage</td>
              <td>0</td>
              <td>0</td>
              <td>4.48+ dmg/Hit</td>
            </tr>
            <tr>
              <td colSpan={7}>
                35 Hit is HUGE (although situational) and 4.48 DPS (just from auto-attack) is also solid (Keep in mind this is spell and
                benefits from bonuses like <Spell id={17364}>Stormstrike</Spell> and <Spell id={27228}>Curse of the
                Elements</Spell>)
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={28034} quality="rare">Hourglass of the Unraveller</Item></strong><br /></td>
              <td>P</td>
              <td>32 Crit</td>
              <td>330 Ap</td>
              <td>10</td>
              <td>45</td>
              <td>73 AP</td>
            </tr>
            <tr>
              <td colSpan={7}>
                This is just bad version of <Item id={30627}>Tsunami Talisman</Item> although good early game trinket.
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={35702}>Figurine - Shadowsong Panther</Item></strong><br /></td>
              <td>U</td>
              <td>88 AP</td>
              <td>352 AP</td>
              <td>15</td>
              <td>90</td>
              <td>58 AP</td>
            </tr>
            <tr>
              <td colSpan={7}>
                This is just worse version of <Item id={33831}>Berserker's Call</Item>.
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={29383}>Bloodlust Brooch</Item></strong><br /></td>
              <td>U</td>
              <td>79 AP</td>
              <td>305 Ap</td>
              <td>20</td>
              <td>120</td>
              <td>50 AP</td>
            </tr>
            <tr>
              <td colSpan={7}>
                This is just worse version of <Item id={33831}>Berserker's Call</Item>.
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={13503}>Alchemist's Stone</Item></strong><br /></td>
              <td>P</td>
              <td>17 All Stats</td>
              <td>+40% Mana Potion</td>
              <td />
              <td>120</td>
              <td>6 - 10.7 MPS</td>
            </tr>
            <tr>
              <td colSpan={7}>
                This is great early when you need more mana. You get 56 Ap, 0.68 Crit, 175 HP, 300 Mana and same Spirit
                regen. Mana potion bonus is also quite significant.
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={35751}>Assassin's Alchemist Stone</Item></strong><br /></td>
              <td>P</td>
              <td>120 AP</td>
              <td>+40% Mana Potion</td>
              <td />
              <td>120</td>
              <td>6 - 10.7 MPS</td>
            </tr>
            <tr>
              <td colSpan={7}>
                This is not super good it is not enough AP to justify it and at this point in game you should be able
                to keep up with mana. On other hand it allows you to use some <Item id={22838} quality="common">Haste
                Potion</Item>.
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={35694}>Figurine - Khorium Boar</Item></strong><br /></td>
              <td>U</td>
              <td>92 AP</td>
              <td>Summon Boar</td>
              <td>30</td>
              <td>300</td>
              <td>~3.5 dmg/sec</td>
            </tr>
            <tr>
              <td colSpan={7}>Boar does about 35 DPS for 30 seconds and does not share 30 sec CD with other use
                effects.
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={32486}>Ashtongue Talisman of Equilibrium</Item></strong><br /></td>
              <td>P</td>
              <td/>
              <td>158 Str (347 AP)</td>
              <td>8</td>
              <td>0</td>
              <td>93 AP</td>
            </tr>
            <tr>
              <td colSpan={7}>
                This is not great as 8 sec duration with 40% proc amount to about 3.2 sec average uptime
                per <Spell id={33983}>Mangle</Spell> use. It is great for farming tho.
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={28121} quality="rare">Icon of Unyielding Courage</Item></strong><br /></td>
              <td>U</td>
              <td>30 Hit</td>
              <td>-600 Armor</td>
              <td>20</td>
              <td>120</td>
              <td>-100 Armor</td>
            </tr>
            <tr>
              <td colSpan={7}>
                Nice early game hit and damage increase from use effect up to maximum
                of {damageReductionOfArmor(600, 70, true)}%.
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={28288} quality="rare">Abacus of Violent Odds</Item></strong><br /></td>
              <td>U</td>
              <td>70 AP</td>
              <td>260 Haste</td>
              <td>10</td>
              <td>120</td>
              <td>22 Haste</td>
            </tr>
            <tr>
              <td colSpan={7}>
                AP bonus + {hasteRatingToSpeed(260)}% attack speed for 10 use effect. It stack nicely
                with <Spell id={2825}>Bloodlust</Spell> and improve your chance of <Spell id={16864}>Omen of
                Clarity</Spell> proc.
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={25937} quality="uncommon">Terokkar Tablet of Precision</Item></strong><br /></td>
              <td>U</td>
              <td>22 Hit</td>
              <td>154 AP</td>
              <td>15</td>
              <td>90</td>
              <td>26 AP</td>
            </tr>
            <tr>
              <td colSpan={7}>
                Nice early game hit and small AP use bonus.
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={28041} quality="rare">Bladefist's Breadth</Item></strong><br /></td>
              <td>U</td>
              <td>26 Crit</td>
              <td>220 Ap</td>
              <td>15</td>
              <td>90</td>
              <td>37 AP</td>
            </tr>
            <tr>
              <td colSpan={7}>
                Super early Crit + Ap use effect.
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={32658} quality="rare">Badge of Tenacity</Item></strong><br /></td>
              <td>U</td>
              <td>308 Armor</td>
              <td>170 Agi</td>
              <td>20</td>
              <td>120</td>
              <td>28 Agi</td>
            </tr>
            <tr>
              <td colSpan={7}>This is pretty bad with exception of off-tanking</td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={30664}>Living Root of the Wildheart</Item></strong><br /></td>
              <td>P</td>
              <td></td>
              <td>72 Str (158 AP)</td>
              <td>15</td>
              <td>0</td>
              <td>71 AP</td>
            </tr>
            <tr>
              <td colSpan={7}>
                Strength bonus is not very significant and combined with low proc rate and no passive bonus this is
                pretty much just <Item id={22450}>Void Crystal</Item>
              </td>
            </tr>
          </tbody>
        </Table>

        <Heading3>Idols</Heading3>
        <ul>
          <li>
            <Item id={32387} quality="rare">Idol of the Raven Goddess</Item> (<Quest id={11001}>Vanquish the Raven
            God</Quest>)
          </li>
          <li><Item id={29390}>Everbloom Idol</Item> (15x<Boj />)</li>
          <li><Item id={33509}>Idol of Terror</Item> (20x<Boj />)</li>
          <li><Item id={32257}>Idol of the White Stag</Item> (<Supremus />, <BlackTemple />)</li>
          <li><Item id={25940} quality="rare">Idol of the Claw</Item> (Pandemonius(1), Mana-Tombs(Normal))</li>
          <li><Item id={28064} quality="uncommon">Idol of the Wild</Item> (<Quest id={10132}>Colossal Menace</Quest>)
          </li>
          <li>
            <Item id={28372} quality="rare">Idol of Feral Shadows</Item> (Zereketh the Unbound(1), The
            Arcatraz(HC/Normal))
          </li>
          <li>
            <Item id={27990} quality="rare">Idol of Savagery</Item> (<Item id={24579} quality="common">Mark of Honor
            Hold</Item>/<Item id={24581} quality="common">Mark of Thrallmar</Item>)
          </li>
          <li>
            <Item id={22397}>Idol of Ferocity</Item> (Lord Roccor, BRD) this is just weak version
            of <Item id={27990} quality="rare">Idol of Savagery</Item></li>
        </ul>

        <Heading3>Enchants</Heading3>
        <ul>
          <li>
            <strong>Head</strong>: <Item id={29192} quality="uncommon">Glyph of Ferocity</Item> if you need Hit
            otherwise <Item id={30846} quality="uncommon">Glyph of the Outcast</Item> (<Item id={8345} quality="rare">Wolfshead
            Helm</Item> with <Item id={29192} quality="uncommon">Glyph of Ferocity</Item> is good item to compensate for
            missing <Balance /> <Druid /> as it is dirt cheap and you can easily swap it.)
          </li>
          <li>
            <strong>Shoulder</strong>: <Item id={28910} quality="rare">Greater Inscription of the
            Blade</Item> (preferably) <Item id={28888} quality="rare">Greater Inscription of the Blade</Item>
          </li>
          <li><strong>Back</strong>: <Spell id={34004}>Enchant Cloak - Greater Agility</Spell></li>
          <li><strong>Chest</strong>: <Spell id={46502}>Enchant Chest - Exceptional Stats</Spell></li>
          <li>
            <strong>Wrists</strong>: <Spell id={27899}>Enchant Bracer - Brawn</Spell> (if you are not tanking or playing
            PVP), <Spell id={27905}>Enchant Bracer - Stats</Spell>
          </li>
          <li><strong>Hands</strong>: <Spell id={25080}>Enchant Gloves - Superior Agility</Spell>, <Spell id={33995}>Enchant
            Gloves - Major Strength</Spell></li>
          <li><strong>Legs</strong>: <Item id={29535}>Nethercobra Leg Armor</Item></li>
          <li><strong>Feet</strong>: <Spell id={34007}>Enchant Boots - Cat's Swiftness</Spell> (Being able to hit is
            worth more than agility)
          </li>
          <li>
            <strong>Finger</strong>: <Spell id={27920}>Enchant Ring - Striking</Spell> (if you are not tanking or
            playing PVP), <Spell id={22538}>Formula: Enchant Ring - Stats</Spell>
          </li>
          <li><strong>Weapon</strong>: <Spell id={27977}>Enchant 2H Weapon - Major Agility</Spell></li>
        </ul>

        <Heading3>Gems</Heading3>
        <ul>
          <li>
            <strong>Meta</strong>: You cannot put Meta gem into <Item id={8345} quality="rare">Wolfshead Helm</Item> but
            if you could use one it would be: <Item id={32409}>Relentless Earthstorm Diamond</Item>
          </li>
          <li>
            <strong>Red</strong>: <Item id={32194}>Delicate Crimson Spinel</Item>, <Item id={24028} quality="rare">Delicate
            Living Ruby</Item>
          </li>
          <li>
            <strong>Orange</strong>: <Item id={32220}>Glinting Pyrestone</Item>, <Item id={24061} quality="rare">Glinting
            Noble Topaz</Item>
          </li>
          <li>
            <strong>Purple</strong>: <Item id={32212}>Shifting Shadowsong Amethyst</Item>, <Item id={30549}>Shifting
            Tanzanite</Item>, <Item id={24055} quality="rare">Shifting Nightseye</Item>
          </li>
          <li><strong>Yellow</strong>: Don't! Get Orange!</li>
          <li><strong>Blue</strong>: Don't! Get Purple!</li>
          <li><strong>Green</strong>: Don't! Get help!</li>
        </ul>


        <Heading2>Mana Management</Heading2>
        <p>
          Even though resource used in <CatForm /> is Energy <Druid /> still uses mana even <Spell id={768}>Cat
          Form</Spell> itself cost mana to use. Powershifting is main Mana drain but apart from that you will need to
          use <Spell id={29166}>Innervate</Spell>, <Spell>Rebirth</Spell> or even help healers with <Spell
          id={26983}>Tranquility</Spell>Get yourself <Item id={31334}>Staff of Natural Fury</Item> as it can greatly
          help with Mana management.
        </p>

        <Heading5 anchorId="innervate"><Spell>Innervate</Spell></Heading5>
        <p>
          <Spell id={29166}>Innervate</Spell> is awesome spell that increase your Spirit Based Mana regeneration by 400%
          and allow it to take full effect even during casting. This is awesome tool to regenerate your Mana especially
          when supplemented with weapon that provide Spirit bonus. Using <Spell id={29166}>Innervate</Spell> on you
          should be generally avoided as it better spend on Healer or same spell DPS. Make sure no one else will need it
          before you use it on yourself as it can be difference between wipe and successful kill.
        </p>

        <Heading5 anchorId="rebirth"><Spell>Rebirth</Spell></Heading5>
        <p>
          As <Druid /> you have unique spell <Spell id={20747}>Rebirth</Spell> that can resurrect someone even during
          combat. <Spell>Rebirth</Spell> costs 1611 Mana and can be difference between successful kill and
          wipe. <strong>Make
          sure you always have enough Mana or means to get necessary Mana to use <Spell>Rebirth</Spell></strong> when it
          is off cooldown.
        </p>

        <Heading5>Spirit Weapon</Heading5>
        <p>
          You should carry Weapon with spirit bonus to improve effect of <Spell id={29166}>Innervate</Spell> or just to
          regenerate mana in situation where you have time to do that. You should also enchant Weapon with <Spell
          id={23803}>Enchant Weapon - Mighty Spirit</Spell> and put gems that increase your Spirit (<Item id={32201}>Sparkling
          Empyrean Sapphire</Item>, <Item id={24035} quality="rare">Sparkling Star of Elune</Item> or <Item id={23119}
                                                                                                            quality="uncommon">Sparkling
          Azure Moonstone</Item>) as well. Your options are:
        </p>
        <ol>
          <li><Item id={34337}>Golden Staff of the Sin'dorei</Item> (57 - 107 Spirit)</li>
          <li><Item id={34608}>Rod of the Blazing Light</Item> (41 - 91 Spirit)</li>
          <li><Item id={29981}>Ethereum Life-Staff</Item> (62 - 82 Spirit)</li>
          <li><Item id={28604}>Nightstaff of the Everliving</Item> (55 - 75 Spirit)</li>
          <li><Item id={27791} quality="rare">Serpentcrest Life-Staff</Item> (46 - 66 Spirit)</li>
          <li><Item id={32344}>Staff of Immaculate Recovery</Item> (35 - 55 Spirit)</li>
        </ol>

        <Heading5>Potions and Runes</Heading5>
        <p>
          Best potion you can use is <Item id={31677} quality="common">Fel Mana Potion</Item> it has drawback in debuff
          that decrease you Spell Power and Healing but as Physical DPS <FeralCombat /> <Druid /> is not really affects.
          Second option is any version <Item id={22832} quality="common">Super Mana Potion</Item> if <Item id={31677}
                                                                                                           quality="common">Fel
          Mana Potion</Item> is too expensive or fight is not that mana demanding. If you are really struggling to keep
          up you can also use<Item id={20520} quality="uncommon">Dark Rune</Item> or <Item id={12662}
                                                                                           quality="uncommon">Demonic
          Rune</Item>. Ideally you want to use all of this in Powershifting macro to avoid downtime on attacks.
        </p>


        <Heading2>Threat</Heading2>
        <p>
          <Druid /> in <CatForm /> generates 0.71 threat per one point of damage delt. With <Spell id={1038}>Blessing of
          Salvation</Spell> this value is 0.497 (0.71 * 0.7) threat per point of damage. You can reduce threat by 1170
          using <Spell id={27004}>Cower</Spell>, this is usually not very effective as one critical hit of <Spell
          id={27002}>Shred</Spell> can generate more threat. Just stop attacking and regenerate same mana or do any
          other activities you need to do. Refresh <Spell id={27011}>Faerie Fire (Feral)</Spell> use <Spell
          id={29166}>Innervate</Spell> or <Spell id={20747}>Rebirth</Spell> help with healing or just take a break.
          Anything is better than wiping whole raid due to taking Aggro from Tank. <Spell id={27011}>Faerie Fire
          (Feral)</Spell> also generates 108 additional threat. You can learn more in our <Link
          to="/stats-and-mechanics/threat">Threat Mechanics Tutorial</Link>
        </p>

        <Heading2>Profession</Heading2>
        <Heading5 anchorId="alchemy"><Alchemy /></Heading5>
        <p>
          Provides you with <Item id={13503}>Alchemist's Stone</Item> which is solid early game trinket and <Item
          id={35751}>Assassin's Alchemist Stone</Item> which is not so good. Both Alchemist's stones provide you with
          increased effect of all Mana Potions (including <Item id={31677} quality="common">Fel Mana Potion</Item>) by
          40%. You can also use <Item id={22795} quality="common">Fel Blossom</Item> to stay alive a bit
          longer. <Alchemy /> together
          with <Enchanting /> are your second best options after <Leatherworking />.
        </p>
        <Heading5 anchorId="enchanting"><Enchanting /></Heading5>
        <p>
          Both <Spell id={27920}>Enchant Ring - Striking</Spell> and <Spell id={27927}>Enchant Ring - Stats</Spell> are
          awesome and well worth enchanting your rings. You can also get rid of <Enchanting /> after you enchanted your
          BiS rings. (Last one for DPS is <Item id={34361}>Hard Khorium Band</Item> so you can ditch <Enchanting /> at
          beginning of last phase.) <Enchanting /> together with <Alchemy /> are your second best options
          after <Leatherworking />. I personally prefer <Enchanting />.
        </p>
        <Heading5 anchorId="engineering"><Engineering /></Heading5>
        <p>
          You cannot use Goggles from engineering due to <Item id={8345} quality="rare">Wolfshead Helm</Item> and you
          cannot use grenades in <CatForm /> neither. You can use <Item id={10725} quality="common">Gnomish Battle
          Chicken</Item>but that is it.
        </p>
        <Heading5 anchorId="jewelcrafting"><Jewelcrafting /></Heading5>
        <p>
          Both Physical damage Gems (<Item id={33131}>Crimson Sun</Item> and <Item id={33143}>Stone of Blades</Item>)
          are worse than <Item id={32194}>Delicate Crimson Spinel</Item> or <Item id={32220}>Glinting Pyrestone</Item>.
          Both <Item id={35702}>Figurine - Shadowsong Panther</Item> and <Item id={34358}>Hard Khorium Choker</Item> are
          OK but not good enough to make it worth wile. (You can keep trinkets and gems even after you
          unlearn <Jewelcrafting />.)
        </p>
        <Heading5 anchorId="leatherworking"><Leatherworking /></Heading5>
        <p>
          Provides you and your party with awesome <Item id={29529} quality="rare">Drums of Battle</Item> and offer some
          great crafted
          items like <Item id={34369}>Carapace of Sun and Shadow</Item> and <Item id={30041}>Boots of Natural
          Grace</Item>. <strong><Leatherworking /> is your best option.</strong>
        </p>
        <Heading5 anchorId="tailoring-and-blacksmithing"><Tailoring /> and <Blacksmithing /></Heading5>
        <p>
          Both are useless as you cannot wear Plate armor and there is no weapon crafted in <Blacksmithing /> that you
          can use and <Tailoring /> provides nothing of value.
        </p>
        <Heading5>Secondary Professions</Heading5>
        <p>
          All <Cooking />, <Firstaid /> and <Fishing /> are cool and can be situational useful or used to gather
          resources.
        </p>
        <Heading5>Gathering Professions</Heading5>
        <p>
          <Herbalism />, <Mining /> and <Skinning /> are necessary to level up other profession if you are not drowning
          in gold and should be replace with something more useful as soon as possible.
        </p>

        <Heading2>Consumables</Heading2>
        <Heading5>Food</Heading5>
        <p>
          Best food for DPS is Agility food: <Item id={27664} quality="common">Grilled Mudfish</Item> or <Item
          id={27659} quality="common">Warp Burger</Item>. You can also use Hit food if you are short on Hit Rating:
          <Item id={33872} quality="common">Spicy Hot Talbuk</Item> or Strength food if you run our of Agility food or
          fight does not matter: <Item id={27658} quality="common">Roasted Clefthoof</Item>.
        </p>

        <Heading5>Elixirs and Flasks</Heading5>
        <p>
          You can use <Item id={22854} quality="common">Flask of Relentless Assault</Item> if you dying a lot and want
          to save some many
          but elixirs are better option. (There is also awesome <Item id={32598} quality="common">Unstable Flask of the
          Beast</Item> that
          can only be used in <GruulsLair />)
        </p>
        <p>
          For Battle Elixir you have two options <Item id={22831} quality="common">Elixir of Major
          Agility</Item> and <Item id={28104} quality="common">Elixir of Mastery</Item> and also two options for
          Guardian Elixir <Item id={32067} quality="common">Elixir of Draenic
          Wisdom</Item> and <Item id={22840} quality="common">Elixir of Major Mageblood</Item>. <strong>Best combination
          is <Item id={22831} quality="common">Elixir of Major Agility</Item> and <Item id={32067} quality="common">Elixir
            of Draenic Wisdom</Item></strong> (because
          of <Talent id={24894}>Heart of the Wild</Talent>)
        </p>

        <Heading5>Stones and Oils</Heading5>
        <p>
          As <Druid /> in <CatForm /> does not benefit from <Spell id={25587}>Windfury Totem</Spell> you can use <Item
          id={28421} quality="common">Adamantite Weightstone</Item> or <Item id={20748} quality="common">Brilliant Mana
          Oil</Item> if you have problems with mana for Powershifting. (There is also <Item id={34539} quality="common">Righteous
          Weapon Coating</Item> which is best option but can only be used in <SunwellPlateau />)
        </p>
        <Heading5>Potions</Heading5>
        <p>
          If you are doing good mana wise you can use same of damage potions. Best you can use
          is <Item id={22838} quality="common">Haste Potion</Item> then <Item id={22828} quality="common">Insane
          Strength Potion</Item>and <Item id={22837} quality="common">Heroic Potion</Item> is the least effective. Again
          you should use those inside of Powershifting macro to maximize damage.
        </p>

        <Heading2>Buffs</Heading2>
        <Heading4>Omen Of Clarity</Heading4>
        <p>
          <Spell id={16864}>Omen of Clarity</Spell> gives your melee attacks chance to apply <Spell
          id={16870}>Clearcasting</Spell> buff that allows you to use next Ability for free (Ability cost 0 energy, rage
          or mana). Proc rate is 5.833% per melee swing that does damage or is absorbed. There is no internal cooldown
          on the ability, and it can happen multiple times in a row. You can increase amount of <Spell
          id={16870}>Clearcasting</Spell> applications by improving your Attack
          Speed, {ratingFor1Percent("meleeHaste")} Haste increase amount of activations per time period by ~0.058%.
          (For <Spell id={24248}>Ferocious Bite</Spell> this mean all your energy will be counted toward additional
          damage as Ability itself costs no energy (This is horrible damage wise))
        </p>

        <Heading5>Paladin Blessing</Heading5>
        <p>
          <Spell id={20217}>Blessing of Kings</Spell> is best Buff you can get what so ever but not being able to attack
          is more debilitating so <Spell id={1038}>Blessing of Salvation</Spell> gets priority and <Spell id={20217}>Blessing
          of Kings</Spell> is close second. Next is <Spell id={27140}>Blessing of Might</Spell> make sure that you get
          it from someone with <Talent id={20048}> Improved Blessing of Might</Talent> and the last one is <Spell
          id={27142}>Blessing of Wisdom</Spell> again ideally with <Talent id={20245}>Improved Blessing of
          Wisdom</Talent> rest of Blessing is pretty inconsequential and you can let <Paladin /> decided what situation
          asks for.
        </p>

        <Heading5>Shaman Totem</Heading5>
        <p>
          <Druid /> in <CatForm /> does not benefit from <Spell id={25587}>Windfury Totem</Spell> so totems are easy
          choice <Spell id={25359}>Grace of Air Totem</Spell>, <Spell id={25528}>Strength of Earth Totem</Spell>
          (make sure <Shaman /> has <Talent id={16295}>Enhancing Totems</Talent> talent even if he
          is <ShamanRestoration />) and <Spell id={25570}>Mana Spring Totem</Spell>. If there is someone who benefits
          from <Spell id={25587}>Windfury Totem</Spell> ask your <Shaman /> to alternate between <Spell id={25359}>Grace
          of Air Totem</Spell> and <Spell id={25587}>Windfury Totem</Spell>.
        </p>

        <Heading5>Other</Heading5>
        <ul>

          <li><Spell id={39235}>Arcane Intellect</Spell> increases your Intellect by 49</li>
          <li><Spell id={26990}>Mark of the Wild</Spell> increases All your Stats by 18</li>
          <li><Spell id={25389}>Power Word: Fortitude</Spell> increases your Intellect Stamina 105</li>
          <li><Spell id={25312}>Divine Spirit</Spell> increases your Spirit by by 51</li>
        </ul>

        <Heading2>Synergies</Heading2>
        <Heading5>Party Composition</Heading5>
        <p>
          Your best partner is <Enhancement /> <Shaman /> follow by <BeastMastery /> <Hunter />. As <Hunter />'s bonus
          stack your ideal party composition is quite simple: You, <Enhancement /> <Shaman /> and
          3 <BeastMastery /> <Hunter />s.
        </p>
        <ol>
          <li>
            <p>
              <Shaman /> especially <Enhancement /> is without a doubt your best friend. With <Talent id={16295}>Enhancing
              Totems</Talent> talent, <Spell id={20217}>Blessing of Kings</Spell> and <Talent id={33856}>Survival of the
              Fittest</Talent>, <Spell id={25359}>Grace of Air Totem</Spell> increase your Agility by 100 and <Spell
              id={25528}>Strength of Earth
              Totem</Spell> increase your Strength by 112. That is whopping 356 Attack Power
              and {agilityToCrit(100, "druid")}% Critical Strike chance. But that is not all because <Talent id={30811}>Unleashed
              Rage</Talent> talent of <Enhancement /> <Shaman /> also increase your Attack Power by 10%. (Improving
              bonus of <Spell id={25359}>Grace of Air Totem</Spell> and <Spell id={25528}>Strength of Earth
              Totem</Spell> to 392 AP which already overshadows <Warrior />'s talented <Spell id={2048}>Battle
              Shout</Spell>.) This bonus is massive as <FeralCombat /> has huge amount of Attack Power (Anywhere form
              3000 to 5000+ with raid buffs). Also lets not forget <Spell id={2825}>Bloodlust</Spell> and <Spell
              id={25570}>Mana Spring Totem</Spell> To sum it up: <strong>get <Enhancement /> <Shaman /> to your
              pary.</strong> (Or a
              least <ShamanRestoration /> <Shaman />.)
            </p>
          </li>
          <li>
            <p>
              <BeastMastery /> <Hunter /> <Talent id={34460}>Ferocious Inspiration</Talent> increase all damage delt by
              3%. This effect stack additively so you can get 12% damage bonus from 4 <Hunter />s. This should be more
              effective than <Warrior />'s <Spell id={2048}>Battle Shout</Spell> (With both <Talent id={12861}>Commanding
              Presence</Talent> and <Item id={30446}>Solarian's Sapphire</Item>) if you are doing more than 1182 DPS
              . <Hunter />'s <Wolf /> can also increase your damage with <Spell id={24597}>Furious Howl</Spell>.
            </p>
          </li>
          <li>
            <p>
              <Retribution /> <Paladin /> with <Talent id={31870}>Improved Sanctity Aura</Talent> talent provides you
              with exact same effect as hunter reduced to 2%. (As each aura can be active only once multiple <Paladin />
              are useless.) This should be more
              effective than <Warrior />'s <Spell id={2048}>Battle Shout</Spell> (With both <Talent id={12861}>Commanding
              Presence</Talent> and <Item id={30446}>Solarian's Sapphire</Item>) if you are doing more than 1773 DPS
            </p>
          </li>
          <li>
            <p>
              <Warrior />'s <Spell id={2048}>Battle Shout</Spell> improved by <Talent id={12861}>Commanding
              Presence</Talent> increases your Attack Power by 419 and with <Item
              id={30446}>Solarian's Sapphire</Item> bonus by 496 Attack Power
            </p>
          </li>
          <li>
            <p>
              <Marksmanship /> <Hunter />'s <Spell id={27066}>Trueshot Aura</Spell> increases your Attack Power by 137..
            </p>
          </li>
          <li>
            <p>
              <Shadow /> <Priest />'s <Spell id={34917}>Vampiric Touch</Spell> help you regenerate mana thus allowing
              for more Powershifting.
            </p>
          </li>
          <li>
            <p>
              Anyone with <Engineering /> can use <Item id={10725} quality="common">Gnomish Battle Chicken</Item> which
              can use <Spell id={23060}>Battle Squawk</Spell> improving attack speed by 5%. Anyone
              with <Leatherworking /> can use <Item id={29529} quality="rare">Drums of Battle</Item> or any other Drums.
            </p>
          </li>
        </ol>

        <Heading5>Raid Composition</Heading5>
        <p>
          This is list of all beneficial raid wide debuffs. You also want all raid Buffs.
        </p>
        <Table cellAlign="center" leftAlignFirstColumn={true} centerTable={false}>
          <thead>
            <tr>
              <th>Source</th>
              <th>Ability</th>
              <th>Effect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Balance /> <Druid /></td>
              <td><Talent id={33602}>Improved Faerie Fire</Talent></td>
              <td>Reduce chance you will miss target by 3% and reduces targets armor by 610</td>
            </tr>
            <tr>
              <td><FeralCombat /> <Druid /></td>
              <td><Spell id={33983}>Mangle (Cat)</Spell></td>
              <td>Allow you to only use <Spell id={27002}>Shred</Spell> and Finishing Moves</td>
            </tr>
            <tr>
              <td><Hunter /></td>
              <td><Talent id={19425}>Improved Hunter's Mark</Talent></td>
              <td>Increases your Attack Power by 120</td>
            </tr>
            <tr>
              <td><Survival /> <Hunter /></td>
              <td><Talent id={34503}>Expose Weakness</Talent></td>
              <td>Increases your Attack Power by 25% of <Hunter />'s Agility</td>
            </tr>
            <tr>
              <td><Retribution /> <Paladin /></td>
              <td><Talent id={20337}>Improved Seal of the Crusader</Talent></td>
              <td>Increases your Critical Strike Chance by 3%</td>
            </tr>
            <tr>
              <td><Subtlety /> <Rogue /></td>
              <td><Spell id={26864}>Hemorrhage</Spell></td>
              <td>Increases damage delt to target by 42 per hit</td>
            </tr>
            <tr>
              <td><Rogue /></td>
              <td><Spell id={26866}>Expose Armor</Spell></td>
              <td>Reduce targets armor by up to 3075</td>
            </tr>
            <tr>
              <td><Warlock /></td>
              <td><Spell id={27226}>Curse of Recklessness</Spell></td>
              <td>Reduce targets armor by 800</td>
            </tr>
            <tr>
              <td><Arms /> <Warrior /></td>
              <td><Spell id={29859}>Blood Frenzy</Spell></td>
              <td>Increas physical damage delt to target by 4%</td>
            </tr>
            <tr>
              <td><Warrior /></td>
              <td><Spell id={25225}>Sunder Armor</Spell></td>
              <td>Reduce targets armor by up to 2600</td>
            </tr>
            <tr>
              <td><Item id={12798} quality="rare">Annihilator</Item></td>
              <td><Spell id={16928}>Armor Shatter</Spell></td>
              <td>Reduce targets armor by up to 600</td>
            </tr>
          </tbody>
        </Table>

        <Heading2>Tanking</Heading2>
        <p>
          As you are only class that can suddenly become Tank it is not so bad idea to stay relatively close to tank
          in threat (ideally second). If Tank dies you can be one that will buy those few (or many) necessary seconds to
          finish the fight.
        </p>
        <p>
          In this case it is very helpful to have one of PvP Gladiator's weapons ready (<Item id={35103}>Brutal
          Gladiator's Staff</Item>) to swap in for Resilience bonus giving you Critical Strike Chance Reduction. You can
          also use Gladiator
          Idols (<Item id={35019}>Brutal Gladiator's Idol of Resolve</Item>) and <Item id={32068} quality="common">Elixir
          of Ironskin</Item> reducing chance of Critical Strike to 0 on spot even in combat. (This is of course not
          super reliable and you need S2 or above weapon and S4 idol. On other hand it is better than nothing and can
          save whole raid.) Do not forget to remove <Spell id={1038}>Blessing of Salvation</Spell> in such scenario.
        </p>
        <p>
          Sametime guild will need someone to off-tank same less dangerous mobs. Here you can better prepare as you can
          change your equipment outside of combat. You can get 2 pieces of <Link
          to="pve-tutorials/druid/feral-dps/#gladiators-sanctuary-s1234">Gladiator's Sanctuary set</Link> ideally chest
          + legs (they are not best DPS pieces but they are close) and Gladiator's
          Weapon (<Item id={35103}>Brutal Gladiator's Staff</Item>) or <Item id={32068} quality="common">Elixir of
          Ironskin</Item> which is enough for you to be immune to Critical strike even in S1 gear. You can also
          use <Item id={32062} quality="common">Elixir of Major Fortitude</Item> as your Guardian Elixir and prioritize
          items with additional Expertise, Stamina and Armor. (<Item id={32658} quality="rare">Badge of
          Tenacity</Item> for instance can have both defensive and offensive use.)
        </p>

      </SideMenuLayout>
    </MainLayout>
  );
};

export default Physical;
