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
  Kiljaeden,
  LadyVashj,
  LeotherasTheBlind,
  Magtheridon,
  MotherShahraz,
  Muru,
  Netherspite,
  Nightbane,
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
  critToMeleeDpsImprovement,
  damageReductionOfArmor,
  expertiseFor1PercentReduction,
  expertiseRatingFor1Expertise,
  expertiseRatingToExpertise,
  expertiseToReduction,
  hasteRatingToSpeed,
  hitRatingToHitChance,
  intellectToMana,
  manaRegen,
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
import {HeadlessMacro} from "../../../components/macro/SimpleMacro";
import Expresion from "../../../components/expresion/Expresion";
import Formula from "../../../components/formula/Formula";
import Author from "../../../components/author/Author";
import {DpsIncreasePerCritChancePercent} from "../../../components/dataTables/physicalDpsDataTables";

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
        <Author server="Firemaw">Lodin</Author>

        <Heading2>Cat Form</Heading2>
        <p>
          First lets take a look at our most important ability <Spell id={768}>Cat Form</Spell>. It is druids
          shapeshifting form that turns you into prettier version of <Rogue /> and allow you to effectively deal
          physical
          damage.
          <CatForm /> has following effects:
        </p>
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
          <li><CatForm /> abilities have global cooldown reduced to 1.0 second from usual 1.5 seconds.</li>
          <li>Your <strong>base</strong> Attack Speed in <CatForm /> is normalized to 1 attack per second.</li>
          <li>
            In <CatForm /> you will cease to attack with your Weapon and use cat pawns instead, fully ignoring your
            Weapon. (Due to this you are unaffected by <Spell id={676}>Disarm</Spell>)
          </li>
          <li>
            Your <strong>base</strong>(excluding Attack Power) damage in <CatForm /> is set to 51-75 (63 DPS).
          </li>
          <li><CatForm /> reduces threat you generate by 29% down to 0.71 threat point per one damage delt. (0.71x
            Threat Multiplier)
          </li>
          <li>
            Spirit Based Mana regeneration in <CatForm /> is reduced by 11% down to 89%. (Energize effects and MP5 bonus
            Mana regeneration is unaffected)
          </li>
          <li>
            <CatForm /> increase your Attack Power by 140 (lvl * 2)
            and <Talent id={16975}>Predatory Strikes</Talent> adds another 105 Attack Power
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
          begins when you ShapeShift into <CatForm /> and by default you have 0 energy after ShapeShift, this can be
          improved with <Talent id={17061}>Furor</Talent> up to 40 and with <Item id={8345} quality="rare">Wolfshead
          Helm</Item> by another 20 (up to 60 energy after ShapeShift together).
          When you leave <CatForm /> all accumulated energy is lost.
        </p>

        <Heading2>Race</Heading2>
        <Heading5>Racials</Heading5>
        Both races have <Spell id={20551}>Nature Resistance</Spell> and <Tauren /> has <Spell
        id={20550}>Endurance</Spell> that provides some additional survivability and <Nightelf />'s <Spell
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
          avoid</strong> <Link to="/stats-and-mechanics/parry-haste">Parry Haste</Link>, only dodge reduction matters to
          us as NPC can dodge attack from every direction.
          Expertise can be improved with Expertise Rating and you need {expertiseRatingFor1Expertise()} Expertise Rating
          for one Expertise. (Expertise is <strong>rounded down</strong>.)
          Boss (level 73) has 6.5% chance to Dodge player attack. This means you
          need {expertiseFor1PercentReduction() * 6.5} Expertise
          or {Math.ceil(expertiseFor1PercentReduction() * expertiseRatingFor1Expertise() * 6.5)} Expertise Rating to
          decrease chance of Dodge to 0% (This is Hard Cap and any point of Expertise Rating above this is wasted).
          There is no other way to improved this.
        </p>
        <p>
          Decrease of Dodge chance from Expertise Rating is same as decrease of
          Miss chance from Hit Rating point to point. But as Expertise Rating is not so common as Hit Rating, items
          with
          Expertise Rating are more valuable. Both Expertise and Hit Ratinging should be your main priority as nothing
          else
          will provide bigger damage increase. One of most overlooked items is <Item id={30834}>Shapeshifter's
          Signet</Item> which is absolutely AWESOME improving your damage by fixed 1.25% just from Expertise Rating
          Bonus and you can just buy it from vendor (if you are Exalted with Lower City faction).
        </p>

        <Heading5>Hit Rating</Heading5>
        <p>
          Hit Rating decrease chance you will miss target with your attacks by {hitRatingToHitChance(1)}%. Attacking
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
          Rage</Talent> increase this value to 1.21 effective Attack Power. Formula for your base AttackPower
          in <CatForm /> is:
        </p>
        <Formula>(2 * Strength) + Agility + (2 * Level) - 20)</Formula>
        <p>
          This is further improved by your talents, buffs and Attack Power bonus from your equipment.
        </p>

        <Heading5>Critical Strike Rating</Heading5>
        <p>
          Critical Strike Rating increase you chance of Critical Strike by {critRatingToCrit(1)} which also
          increase amount of additional combo points from <Talent id={37117}>Primal Fury</Talent> talent. One percent
          improvement in your Critical Strike chance increase your DPS
          by {critToMeleeDpsImprovement(1, 1.2)}% (
          with <Talent id={33869}>Predatory Instincts</Talent>).
        </p>

        <Heading5>Armor Penetration</Heading5>
        <p>
          Armor Penetration found on items with 'ignore x of your opponent's armor' reduce amount of enemies armor that
          affect your attacks. There are two common values you should be prepared for. Most common value
          is {orderedArmorAmounts[0].armor} and second most common is {orderedArmorAmounts[1].armor} to match both value
          you should aim for default (in your main gear) value of {orderedArmorAmounts[1].armor} armor reduction
          (including all raid buffs and debuffs) and be able to swap items that will bump your Armor penetration up
          to {orderedArmorAmounts[0].armor} when necessary. Any point of Armor Penetration above enemies armor (again
          count in all buffs/debuffs) is wasted. Damage Increase from Armor Penetration scales in faster than liner
          fashion (more Penetration you have more effective it is). So it is important to get the amount just right and
          if you focus on Armor Penetration make sure you stick to it. You can learn more in <Link
          to="/pve-tutorials/physical/#armor-penetration">Armor Penetration part of our Physical DPS mechanics
          tutorial</Link> and play with our <Link to="/stats-and-mechanics/armor-reduction-calculator">Armor Reduction
          Calculator</Link>
        </p>

        <Heading5>Haste Rating</Heading5>
        <p>
          Haste Rating reduce time between your attacks by about {hasteRatingToSpeed(1)} per point. Way haste rating
          is calculated is quite complicated and you can read about it in our <Link
          to="/pve-tutorials/physical/#haste">Physical DPS mechanics</Link> tutorial. Note that Haste Rating also
          increase amount of procs from <Spell id={16864}>Omen of Clarity</Spell>, <Link
          to="pve-tutorials/druid/feral-dps/#malorne-harness-t4">Malorne Harness set 2 piece Bonus</Link> and trinkets
          like <Item id={28830}>Dragonspine Trophy</Item> or <Item id={32505}>Madness of the Betrayer</Item>. (Despite
          the popular belief that haste is less effective on classes with fast attack speed haste is still awesome
          for <Druid /> as that is not how percentages work.) Note Haste rating only affect your Auto-Attacks and does
          not affect your abilities.
        </p>

        <Heading3>Stats priority</Heading3>
        <p>
          Expertise > Hit > Agility > Armor Penetration > Haste > Critical Strike > Strength > AP > Intellect > Stamina
          > Spirit
        </p>
        {/*<Item id={29390}>Everbloom Idol</Item> benefits from crit.*/}
        {/*<Talent id={37117}>Primal Fury</Talent> benefits from crit.*/}

        <Heading2>Talents</Heading2>
        <p>
          Talents are to same degree relative and should be customized for your situation so even tough we will list
          same standard builds do not follow them religiously. We will also discuss some talents in detail.
        </p>
        <ul>
          <li>
            <a
              href="https://calculators.iradei.eu/talents/druid?00000000000000000000050000003232210530105105503001000000000000">
              Must have Talents (14 free points)</a>
          </li>
          <li>
            <a
              href="https://calculators.iradei.eu/talents/druid?00000000000000000000055000213232211530125105503301000000000000">
              Pure DPS</a>
          </li>
          <li>
            <a
              href="https://calculators.iradei.eu/talents/druid?00000000000000000000055000213232212532125105503001000000000000">
              Pure DPS but I cannot waste mana fast enough</a>
          </li>
          <li>
            <a
              href="https://calculators.iradei.eu/talents/druid?01000000000000000000050320213232212513125105503001000000000000">
              I like my PvP</a>
          </li>
          <li>
            <a
              href="https://calculators.iradei.eu/talents/druid?00000000000000000000050303213232210530125105503301000000000000">
              Tank/DPS hybrid</a>
          </li>
        </ul>

        <Heading4>Omen Of Clarity</Heading4>
        <p>
          <Spell id={16864}>Omen of Clarity</Spell> gives your melee attacks chance to apply <Spell
          id={16870}>Clearcasting</Spell> buff that allows you to use next Ability for free (Ability cost 0 energy, rage
          or mana). Proc rate is 5.833% per melee swing that does damage or is absorbed. There is no internal cooldown
          on the ability, and it can happen multiple times in a row. You can increase amount of <Spell
          id={16870}>Clearcasting</Spell> applications by improving your Attack
          Speed, {ratingFor1Percent("meleeHaste")} Haste increase amount of activations per time period by ~0.058%.
          (For <Spell id={24248}>Ferocious Bite</Spell> <Spell id={16870}>Clearcasting</Spell> means all your energy
          will be counted toward additional damage as Ability itself costs no energy (This is horrible damage wise.)).
        </p>

        <Heading5><Talent id={17073}>Naturalist</Talent></Heading5>
        <p>
          <Talent id={17073}>Naturalist</Talent> increases all physical damage by 10%. Bonus is added at the end of
          other calculation. It does increase your Auto-Attack damage and is visible in character sheet but it does not
          increase Base Damage for purposes of percentual Damage calculation of abilities
          like <Spell id={27002}>Shred</Spell> instead it adds 10% bonus to
          final <Spell id={27002}>Shred</Spell> damage. It also increase damage of DoT abilities
          like <Spell id={27006}>Pounce</Spell> and <Spell id={27003}>Rake</Spell>.
        </p>

        <Heading5><Spell id={16979}>Feral Charge</Spell></Heading5>
        <p>
          People often skip <Spell id={16979}>Feral Charge</Spell> when playing pure DPS but there are many uses for
          this handy spell. It allows you to save time and sometimes even your life. You can charge back from pushbacks
          (<Magtheridon />, <GruulTheDragonkiller />, <Kiljaeden />), pick up spells
          (<Archimonde />, <KaelthasSunstrider />)
          and dangerous zones (<Felmyst />, <Nightbane />, <Netherspite />, <Muru />). Nothing reduce your damage quite
          as
          death or time spend away from your target. You can <Spell id={16979}>Feral Charge</Spell> in, use
          quick <Spell id={33987}>Mangle (Bear)</Spell> and continue your <Spell id={27002}>Shred</Spell> rotation.
        </p>

        <Heading5><Talent id={17061}>Furor</Talent>/<Talent id={16835}>Natural Shapeshifter</Talent></Heading5>
        <p>
          You need both <Talent id={17061}>Furor</Talent> and <Talent id={16835}>Natural Shapeshifter</Talent> for
          effective <Link to="/pve-tutorials/druid/feral-dps/#powershifting">Powershifting</Link> if You do not plan to
          use Powershifting feel free to allocate talent points elsewhere.
        </p>

        <Heading5><Talent id={17108}>Intensity</Talent></Heading5>
        <p>
          <Talent id={17108}>Intensity</Talent> is a bit overrated talent. From empirical privat server data is seems
          it does something but as ShapeShifting seems to not
          trigger <Link to="/pve-tutorials/physical/#five-second-rule">Five Second Rule</Link> and Spirit based
          mana regeneration is unaffected (apart from 11% reduction
          from <CatForm/>.) so <Talent id={17108}>Intensity</Talent> should have nothing to improve. Also your Spirit is
          quite low, probably very far
          from <Link to="/pve-tutorials/physical/#best-spirit-and-intellect-ratio">ideal ratio to Intellect</Link> and
          your regeneration in <CatForm /> is also reduced to 89%. It seems that it will not hurt you, but you will be
          happy if it provides you with one additional shapeshift.
        </p>

        <Heading5><Talent id={37117}>Primal Fury</Talent></Heading5>
        <p>
          Allow you to generate additional Combo Point when you Critical Strik with Combo Point Generating ability.
          This increase value of Critical Strike Rating and Agility. Note that <Spell id={27006}>Pounce</Spell> is only
          Combo Generating Ability that cannot Crit.
        </p>

        <Heading5><Talent id={24894}>Heart of the Wild</Talent></Heading5>
        <p>
          <Talent id={24894}>Heart of the Wild</Talent> improves your Attack Power by 10%. This is calculated as the
          last effect which means all Attack Power buffs and all Primary Stats bonuses from Buffs are also
          included (<Spell id={20217}>Blessing of Kings</Spell>, <Spell id={25359}>Grace of Air Totem</Spell>
          <Spell id={25528}>Strength of Earth Totem</Spell>).
        </p>
        <p>
          <Talent id={24894}>Heart of the Wild</Talent> also increases your Intellect by 20%. That is reason why you
          should focus on Intellect over Spirit.
        </p>

        <Heading5><Talent id={16999}>Savage Fury</Talent></Heading5>
        <p>
          Description of this talent is a bit misleading as one could expect it would add 20% to resulting damage but
          that is not true for all three spells. They are modified as follows:
        </p>
        <ul>
          <li>
            For <Spell id={27000}>Claw</Spell> it improves only Bonus Damage from 190 to 228 but not the "claw" damage
            calculated from Base attack.
          </li>
          <li>
            For <Spell id={27003}>Rake</Spell> it improves static damage values from 78 to 92 on initial hit and from
            108 to 129 on subsequent DoT damage. But it does not improve how <Spell id={27003}>Rake</Spell> scales with
            Attack Power.
          </li>
          <li>
            For <Spell id={33983}>Mangle (Cat)</Spell> it improves both Base Damage multiplier from 160% to 192% and
            Bonus damage from 264 to 317.
          </li>
        </ul>

        <Heading5><Talent id={17007}>Leader of the Pack</Talent></Heading5>
        <p>
          <Spell id={24932}>Leader of the Pack</Spell> provides your party with aura which increase chance of Critical
          Strike by 5% to everyone in the party. This also separately affects <Hunter />'s and <Warlock />'s pets. That
          is
          reason why <Hunter />s love <FeralCombat /> <Druid /> so much. This can be further improved
          with <Item id={32387} quality="rare">Idol of the Raven Goddess</Item> idol,
          providing {(critRatingToCrit(20) + 5) * 5}% Critical Strike Chance to your party. (Maximal amount of
          Crital Strike Chance improvement you can provide is {(critRatingToCrit(20) + 5) * 9}% with
          four <Hunter />s in your party.)
        </p>

        <Heading5><Talent id={33856}>Survival of the Fittest</Talent></Heading5>
        <p>
          <Talent id={33856}>Survival of the Fittest</Talent> improves all your Base Stats by 3%. This includes buffs
          like <Spell id={25359}>Grace of Air Totem</Spell> or <Spell id={26990}>Mark of the Wild</Spell> and stacks
          multiplicatively with <Spell id={20217}>Blessing of Kings</Spell>
        </p>

        <Heading5><Talent id={33873}>Nurturing Instinct</Talent></Heading5>
        <p>
          <Talent id={33873}>Nurturing Instinct</Talent> does not get enough love. There is one basic rule for DPS:
          Dead people do not make any DPS. Apart from helping healers keep you alive this with healing weapon and well
          timed <Spell id={26983}>Tranquility</Spell> (for instance on <Muru />) can make or break you attempt.
        </p>

        <Heading5><Talent id={33869}>Predatory Instincts</Talent></Heading5>
        <p>
          <Talent id={33869}>Predatory Instincts</Talent> is a bit unique compared to other Critical Strike Damage
          improving talents as it does increase full damage of Critical Strike instead of just bonus portion of Critical
          Strike. Meaning it increase whole Critical Strike <strong>Damage</strong> from 200% to 220% (instead of
          increasing just Critical Strike Damage <strong>Bonus</strong> from 100% to 110%).
        </p>

        <Heading2>Abilities</Heading2>
        <p>
          <CatForm /> uses three kinds of spells: Combo Point Generators, Finishing Moves and rest is uncategorized.
          All abilities in <CatForm /> uses energy as resource or have no cost at all. If your hostile Ability either
          one
          that generates Combo Points or Finishing move are Parried, Dodged, Absorbed or you miss your attack 80% of
          energy cost is returned (or in other word Ability costs only 20% if attack does not connect). Although if they
          are Blocked even if all damage is fully absorbed no energy is returned.
        </p>
        <p>
          Combo Point Generators as name suggest generate Combo Points (or CP). Each Combo Point Generator generates 1
          CP per use although this is improved with <Talent id={37117}>Primal Fury</Talent> to generate 2 CP on Critical
          Strike. Maximal amount of CP is 5 and they are used by Finishing Moves. Damage of Combo Point Generators is
          usually based on your Auto-Attack (or base) damage.
        </p>
        <p>
          Second category are Finishing Moves, they use all CP currently on target and their effectiveness is based on
          amount of CP and your Attack Power. They also require at leas one CP to be on target to be used.
        </p>

        <Heading3>Auto-Attack</Heading3>
        <p>
          Your base attack damage is <Expresion>51 - 75</Expresion> and attack speed is 1 Hit per second. This damage
          is further improved by 1/14 of your Attack Power (and by <Talent id={17073}>Naturalist</Talent> talent by 10%
          afterwards). Damage of you Auto-Attack is used to determine damage of various abilities. Formulas for
          your <strong>Base Damage</strong> in <CatForm />:
        </p>
        <ul>
          <li><strong>Min Damage</strong>: <Expresion>(51 + (AP/14))</Expresion></li>
          <li><strong>Max Damage</strong>: <Expresion>(75 + (AP/14))</Expresion></li>
          <li><strong>DPS</strong>: <Expresion>(63 + AP/14)</Expresion></li>
        </ul>

        <Heading3>Combo Point Generators</Heading3>

        <Heading5 anchorId="mangle"><Spell id={33983}>Mangle (Cat)</Spell></Heading5>
        <p>
          <Spell id={33983}>Mangle (Cat)</Spell> is predominantly use for it 12 seconds long +30% Bleed
          and <Spell id={27002}>Shred</Spell> Damage bonus debuff. It costs 40 energy
          (with <Talent id={16938}>Ferocity</Talent>) and can have its energy cost reduced further to 35 energy with 2
          Set
          Bonus of <Link to="/pve-tutorials/druid/feral-dps/#thunderheart-harness-t6">Thunderheart Harness set</Link>.
          It
          deals <Expresion>(2.25 * BaseDamage) + 405</Expresion> Damage (with <Talent id={16999}>Savage Fury</Talent>)
          and is used for improving <Spell id={27002}>Shred</Spell> and <Spell id={27008}>Rip</Spell> Damage or when you
          are not able to attack enemy from behind therefore unable to
          use <Spell id={27002}>Shred</Spell>. <Spell id={33983}>Mangle (Cat)</Spell> also generates 1 (2 on
          Crit <Talent id={37117}>Primal Fury</Talent>) combo point.
        </p>

        <Heading5 anchorId="shred"><Spell id={27002}>Shred</Spell></Heading5>
        <p>
          <Spell id={27002}>Shred</Spell> is your main Damage and Combo Point Generating ability. It cost 42 energy
          (with <Talent id={16968}>Shredding Attacks</Talent> talent), generates 1 (2 on
          Crit <Talent id={37117}>Primal Fury</Talent>) Combo Points and deals <Expresion>(2.25 * BaseDamage) +
          405</Expresion> Damage.
          It gest 30% damage bonus from <Spell id={33983}>Mangle</Spell> so make sure it is always up. If there is
          another druid in your group or raid you can let him use <Spell id={33983}>Mangle</Spell> and only
          use <Spell id={27002}>Shred</Spell> and Finishing Move as only reason to use <Spell
          id={33983}>Mangle</Spell> is to increase <Spell id={27002}>Shred</Spell> damage. You have to attack your
          target from behind to use <Spell id={27002}>Shred</Spell> so
          make sure other classes let you stay in correct position. <Spell id={27002}>Shred</Spell> has highest damage
          per
          energy ratio of all Combo Point Generators (with <Spell id={33983}>Mangle</Spell> bonus) and
          only <Spell id={27005}>Ravage</Spell> deals more damage per hit.
        </p>

        <Heading5 anchorId="rake"><Spell id={27003}>Rake</Spell></Heading5>
        <p>
          <Spell id={27003}>Rake</Spell> is DoT that costs 35 energy (with <Talent id={16938}>Ferocity</Talent>). It
          deals (with <Talent id={16999}>Savage Fury</Talent>) <Expresion>92 + (AP/100)</Expresion> instant Bleed
          (affected by <Spell id={33983}>Mangle</Spell> bonus) Damage and another <Expresion>129 + (AP *
          0.06)</Expresion> Bleed (also affected by <Spell id={33983}>Mangle</Spell> bonus) Damage over next 9 seconds
          (1/3 of damage every 3 seconds). Initial damage is considered to by Hit so it can Crit but
          also <strong>Totally Ignores Armor</strong> (subsequent DoT does as well). This makes it effective against
          enemies with super huge Armor values. But in normal PvE combat there is pretty much no reason to use it as it
          is worse than any other option.
        </p>

        <Heading5 anchorId="claw"><Spell id={27000}>Claw</Spell></Heading5>
        <p>
          <Spell id={27000}>Claw</Spell> is Ability of less fortune <Druid />'s that do not
          have <Spell id={33983}>Mangle (Cat)</Spell>. With <Talent id={16999}>Savage Fury</Talent> it
          deals <Expresion>BaseDamage + 228</Expresion> Damage and
          generates 1 (2 on Crit <Talent id={37117}>Primal Fury</Talent>) combo point.
          There is no reason whatsoever to use it as <FeralCombat /> <Druid />.
        </p>

        <Heading5 anchorId="pounce"><Spell id={27006}>Pounce</Spell></Heading5>
        <p>
          Pounce is only Combo Point Generator that cannot Crit so it always generates just 1 Combo Point. It can be
          used only in <Spell id={9913}>Prowl</Spell> and it deals <Expresion>600 + (AP * 0.18)</Expresion> Bleed
          (affected by <Spell id={33983}>Mangle</Spell> bonus) Damage (1/6 of Damage every 3 seconds).
        </p>

        <Heading5 anchorId="ravage"><Spell id={27005}>Ravage</Spell></Heading5>
        <p>
          <Spell id={27005}>Ravage</Spell> is ability that deals huge damage but can be only used
          in <Spell id={9913}>Prowl</Spell> and you must be behind your target. It cost 60 energy and
          deals <Expresion>(3.85 * BaseDamage) + 514</Expresion> Damage. It also generates 1 (2 on
          Crit <Talent id={37117}>Primal Fury</Talent>) combo point. Although it deals huge damage is less energy
          efficient than <Spell id={27002}>Shred</Spell> so it should not be used as it complicates beginning of fight
          (You must be behind your target in <Spell id={9913}>Prowl</Spell>) and is not generally worth the hassle. You
          will be better off just starting with <Spell id={33983}>Mangle (Cat)</Spell> and focusing
          on <Spell id={27002}>Shred</Spell>.
        </p>

        <Table cellAlign="center" leftAlignFirstColumn={true}>
          <caption>
            Values include <Talent id={16968}>Shredding Attacks</Talent> and <Talent id={16999}>Savage Fury</Talent>.
          </caption>
          <thead>
            <tr>
              <th>Spell</th>
              <th>Energy</th>
              <th>Base Damage Multiplier</th>
              <th>AP Multiplier</th>
              <th>Flat Damage</th>
              <th>Mangle Bonus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><Spell id={33983}>Mangle (Cat)</Spell></th>
              <td>40</td>
              <td>x1.92</td>
              <td>0</td>
              <td>317</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row"><Spell id={33983}>Mangle (Cat)</Spell> 2xT6</th>
              <td>35</td>
              <td>x1.92</td>
              <td>0</td>
              <td>317</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row"><Spell id={27002}>Shred</Spell></th>
              <td>42</td>
              <td>x2.25</td>
              <td>0</td>
              <td>405</td>
              <td>x1.3</td>
            </tr>
            <tr>
              <th scope="row"><Spell id={27000}>Claw</Spell></th>
              <td>40</td>
              <td>x1.00</td>
              <td>0</td>
              <td>228</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row"><Spell id={27005}>Ravage</Spell></th>
              <td>60</td>
              <td>x3.85</td>
              <td>0</td>
              <td>514</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row"><Spell id={27003}>Rake</Spell></th>
              <td>35</td>
              <td>0</td>
              <td>x0.61</td>
              <td>221</td>
              <td>x1.3</td>
            </tr>
            <tr>
              <th scope="row"><Spell id={27006}>Pounce</Spell></th>
              <td>50</td>
              <td>0</td>
              <td>x0.18</td>
              <td>600</td>
              <td>x1.3</td>
            </tr>
          </tbody>
        </Table>

        <Heading3>Finishing moves</Heading3>
        <p>
          Finishing move is ability that require Combo Point created by Combo Point generating
          Abilities (<Spell id={27002}>Shred</Spell>, <Spell id={27003}>Rake</Spell>... ) to be used
          and have their effect improved by amount of Combo Points. <Druid /> in <CatForm /> can use three Finishing
          moves. There is DoT <Spell id={27008}>Rip</Spell> and two instant
          attacks <Spell id={24248}>Ferocious Bite</Spell> and <Spell id={22570}>Maim</Spell>.
        </p>

        <Heading5 anchorId="ferocious-bite"><Spell>Ferocious Bite</Spell></Heading5>
        <p>
          <Spell>Ferocious Bite</Spell> is finishing move that instantly deals damage based on amount of Combo Point
          and also convert any energy remaining after initial cost of 35 energy to additional Damage. Damage range is
          calculated as <Expresion>90 + (169 * CP) + (AP * 0.24) + ((Eng - 35) * 4.1)</Expresion> - <Expresion>123 +
          (169 * CP) + (AP * 0.24) + ((Eng - 35) * 4.1)</Expresion>. Note that <Spell>Ferocious Bite</Spell> is
          capable of Critical Strike but its Damage is reduced by enemies Armor.
        </p>
        <p>
          Damage of <Spell>Ferocious Bite</Spell> can be improved by 15%
          with <Talent id={16862}>Feral Aggression</Talent> and by another 15% with 4 Set
          Bonus of <Link to="/pve-tutorials/druid/feral-dps/#thunderheart-harness-t6">Thunderheart Harness set</Link>
        </p>
        <p>
          Energy bonus is your current energy minus cost of <Spell>Ferocious Bite</Spell> multiplied by 4.1 this is
          horrible ratio. Even the loves flat damage bonus multiplier of <Spell id={27003}>Rake</Spell> (which is worst
          of all abilities) is higher than this. There is literally no worse way to waste
          Energy. <strong>Use <Spell>Ferocious Bite</Spell> with minimal possible amount of energy!</strong>
        </p>
        <p>
          <Spell id={16864}>Omen of Clarity</Spell> reduce cost of <Spell>Ferocious Bite</Spell> to 0 allowing you to
          use 100 energy for bonus of <Spell id={24248}>Ferocious Bite</Spell>. As we discussed energy bonus to damage
          of <Spell id={24248}>Ferocious Bite</Spell> is really bad and you could
          use <Spell id={27002}>Shred</Spell> three times instead so <strong>do not use <Spell id={24248}>Ferocious
          Bite</Spell> with <Spell id={16864}>Omen of Clarity</Spell> buff!</strong>
        </p>
        <Table cellAlign="center" fillFirstCell={true}>
          <caption><Spell id={24248}>Ferocious Bite</Spell> damage in relation to amount of CP</caption>
          <thead>
            <tr>
              <th>CP</th>
              <th>Min Base Dmg</th>
              <th>Max Base Dmg</th>
              <th>AP Bonus</th>
              <th>Energy Bonus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>259</td>
              <td>292</td>
              <td>AP * 0.24</td>
              <td>(Eng - 35) * 4.1</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>428</td>
              <td>461</td>
              <td>AP * 0.24</td>
              <td>(Eng - 35) * 4.1</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>597</td>
              <td>630</td>
              <td>AP * 0.24</td>
              <td>(Eng - 35) * 4.1</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>766</td>
              <td>799</td>
              <td>AP * 0.24</td>
              <td>(Eng - 35) * 4.1</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>935</td>
              <td>968</td>
              <td>AP * 0.24</td>
              <td>(Eng - 35) * 4.1</td>
            </tr>
          </tbody>
        </Table>

        <Heading5 anchorId="rip"><Spell>Rip</Spell></Heading5>
        <p>
          <Spell id={27008}>Rip</Spell> is DoT finishing move that applies Bleed (affected
          by <Spell id={33983}>Mangle</Spell> 30% bonus) that deals
          <Expresion>(102 + (198 * CP)) + (AP * 0.06 * CP(max 4))</Expresion> Damage over 12 seconds (1/6 of Damage
          every 2 seconds). Note that <Spell>Rip</Spell> ignores Armor but is not capable of Critical Strike.
        </p>
        <p>
          Damage of <Spell id={27008}>Rip</Spell> can be improved by 15%
          with 4 Set Bonus
          of <Link to="/pve-tutorials/druid/feral-dps/#thunderheart-harness-t6">Thunderheart Harness set</Link> and by
          also with <Item id={28372} quality="rare">Idol of Feral Shadows</Item>, which increases Damage of
          every <Spell id={27008}>Rip</Spell> tick by <Expresion>7 * CP</Expresion> (210 overall with 5 CP)
        </p>
        <Table cellAlign="center" fillFirstCell={true}>
          <caption><Spell id={27008}>Rip</Spell> damage in relation to amount of CP</caption>
          <thead>
            <tr>
              <th>CP</th>
              <th>Base Damage</th>
              <th>AP Bonus Damage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>300</td>
              <td>0.06 * AP</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>498</td>
              <td>0.12 * AP</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>698</td>
              <td>0.18 * AP</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>894</td>
              <td>0.24 * AP</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>1092</td>
              <td>0.24 * AP</td>
            </tr>
          </tbody>
        </Table>

        <Heading5 anchorId="maim"><Spell>Maim</Spell></Heading5>
        <p>
          <Spell id={22570}>Maim</Spell> is your third finishing moves. It cost 35 energy and its effect increases with
          amount of Combo Points. (You need at least one Combo Point to use <Spell id={22570}>Maim</Spell>) It deals
          less damage than <Spell id={24248}>Ferocious Bite</Spell> or <Spell id={27008}>Rip</Spell> but allow you to
          incapacitate your target for duration based on amount of Combo Points. This might have same uses in PvE combat
          but is overall geared more towards PvP play and will not be part of your standard PvE rotation.
          It Deals <Expresion>(82 * CP) + 45 + MinBaseDamage</Expresion> - <Expresion>(82 * CP)
          + 45 + MaxBaseDamage</Expresion> damage. Is is also only offensive <CatForm /> spell that has cooldown.
        </p>
        <Table cellAlign="center" fillFirstCell={true}>
          <caption><Spell id={22570}>Maim</Spell> damage and duration in relation to amount of CP</caption>
          <thead>
            <tr>
              <th>CP</th>
              <th>Min <Spell id={22570}>Maim</Spell> damage</th>
              <th>Max <Spell id={22570}>Maim</Spell> damage</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>MinBaseDmg + 130</td>
              <td>MaxBaseDmg + 130</td>
              <td>2 sec</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>MinBaseDmg + 214</td>
              <td>MaxBaseDmg + 214</td>
              <td>3 sec</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>MinBaseDmg + 298</td>
              <td>MaxBaseDmg + 298</td>
              <td>4 sec</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>MinBaseDmg + 382</td>
              <td>MaxBaseDmg + 382</td>
              <td>5 sec</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>MinBaseDmg + 466</td>
              <td>MaxBaseDmg + 466</td>
              <td>6 sec</td>
            </tr>
          </tbody>
        </Table>

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
          bad and forces you to estimate everything manually wasting huge sums of Energy and time. Our macro will not
          let you Shapeshift if next energy tick will provide you enough Energy for another <Spell
          id={27002}>Shred</Spell> (saving mana) and if you are not able to shapeshift back to <CatForm /> (saving
          auto-attacks). (Dire Bear Form is used intentionally in #show command to prevent green glow of active spell
          around the Powershifting macro. As <BearForm /> and <CatForm /> cost same amount of mana and have same GCD you
          will see all necessary information. But We recommend use of custom icon as <Expresion>?</Expresion> Icon will
          result in Dire Bear Form icon.)
        </p>
        <HeadlessMacro
          name="Powershifting"
          description={"This is best Powershifting macro you can use"}
          text={`#show Dire Bear Form
/script local gcd=GetSpellCooldown("Cat Form");  local e = UnitMana("player"); if gcd==0 and e<22 then CancelPlayerBuff("Cat Form") end;
/stopmacro [stance:3]
/cast Cat Form(Shapeshift)`}
        />
        <Heading3>Others</Heading3>
        <Heading5><Spell>Dash</Spell></Heading5>
        <p>
          <Spell id={33357}>Dash</Spell> increases your movement speed by 70%. This stacks additively
          with <Talent id={24866}>Feral Swiftness</Talent> making you quite swifty. Use this when you need to get to
          the enemy or escape dangerous situation.
        </p>
        <Heading5><Spell>Faerie Fire (Feral)</Spell></Heading5>
        <p>
          <Spell id={27011}>Faerie Fire (Feral)</Spell> reduces targets Armor by 610
          ({damageReductionOfArmor(610)}% maximal damage improvement). There should
          be <Balance /> <Druid /> with <Talent id={33602}>Improved Faerie Fire</Talent> using hes improved version but
          if there is no chicken it is your job keep <Spell id={27011}>Faerie Fire</Spell> active on enemy. Bear in mind
          it does calculate Hit chance from Spell Hit Rating so you might get bunch of resists.
        </p>

        <Heading5><Spell>Feline Grace</Spell></Heading5>
        <p>
          <Spell id={20719}>Feline Grace</Spell> reduced damage you take from falling by 17%. This can help you stay
          alive (or at least take less damage) in few fight like <Archimonde /> or <KaelthasSunstrider />.
          But <strong>you have to be in <CatForm /></strong> if you feel like you are too high to survive even
          with <Spell id={20719}>Feline Grace</Spell> you can
          use <Spell id={16979}>Feral Charge</Spell> or <Item id={8529} quality="common">Noggenfogger Elixir</Item> as
          last resort.
        </p>

        <Heading5><Spell>Prowl</Spell></Heading5>
        <p>
          <Spell id={9913}>Prowl</Spell> make you invisible from far and harder to detect when close to enemy. It also
          allows you to use <Spell id={27006}>Pounce</Spell> and <Spell id={27005}>Ravage</Spell>.
          Use <Spell id={9913}>Prowl</Spell> every time your group or raid is trying to avoid same group of enemies
          to reduce chance you will engage them.
        </p>

        <Heading5><Spell>Track Humanoids</Spell></Heading5>
        <p>
          <Spell id={5225}>Track Humanoids</Spell> allows you to see humanoids on minimap. This is useful on few rare
          occasion when you can track movement of same patrol but thats pretty much it.
        </p>

        <Heading5><Spell>Cower</Spell></Heading5>
        <p>
          You can reduce your threat by 1170 using <Spell id={27004}>Cower</Spell> ability. It cost 20 energy and
          is usually not very effective as one critical hit of <Spell id={27002}>Shred</Spell> can generate more threat.
          Just stop attacking and regenerate same mana or do any other activities you need to do.
          Refresh <Spell id={27011}>Faerie Fire (Feral)</Spell> use <Spell id={29166}>Innervate</Spell> or <Spell
          id={20747}>Rebirth</Spell>. If there really is nothing else to do then use <Spell id={27004}>Cower</Spell>.
        </p>

        <Heading5><Spell>Tiger's Fury</Spell></Heading5>
        <p>
          <Spell id={9846}>Tiger's Fury</Spell> increase your Base Damage by 40 for the price of 30 energy. This Damage
          increase damage of your Auto-Aattack and is included in percentual Damage calculation of
          abilities like <Spell id={27002}>Shred</Spell>. Maximal damage you can get
          from <Spell id={9846}>Tiger's Fury</Spell> is Critical Strike of <Spell id={27005}>Ravage</Spell> dealing up
          to <Expresion>40 * 3.85 * 2.2 = 338.8</Expresion> additional Damage in one hit.

          Lets take a look at absolute best possible scenario you can imagine we will enough
          hase, <Spell id={2825}>Bloodlust</Spell> and <Item id={28830}>Dragonspine Trophy</Item> proc on to double our
          attack speed and squeeze in 12 melee hits in 6 second duration of <Spell id={9846}>Tiger's Fury</Spell> and
          we will also use <Spell id={27002}>Shred</Spell> six times (tanks
          to best <Spell id={16864}>Omen of Clarity</Spell> procs in history of WoW)
          with <Spell id={33983}>Mangle</Spell> already active . All of this Abilities will just by chance score
          Critical Strike. This would give us <Expresion>(12 * 40 * 2.2) + (6 * 40 * 2.25 * 1.3 * 2.2)
          = 2600.4</Expresion> additional damage from effect of <Spell id={9846}>Tiger's Fury</Spell>. Now this scenario
          is very close to be impossible if not straight up impossible and even in this situation with all start align
          we are only approaching Damage comparable with Critical Strike of normal <Spell id={27002}>Shred</Spell>.
          Yes 30 energy is less than 42 but you will not find yourself in this situation. Far often this would be 5
          melee hits and 3 <Spell id={27002}>Shred</Spell>s with far fewer Critical Strikes and same of them even
          replaced with Glancing Blow or even full Dodge. In this situation you will be happy for 600 damage bonus
          from <Spell id={9846}>Tiger's Fury</Spell>. So it might be useful when you are fresh green 70 and static
          damage bonus seems like good ratio compared to your Attack Power or if you need
          to <Spell id={27005}>Ravage</Spell> something real hard. But apart from that, it would be better to stay away
          from <Spell id={9846}>Tiger's Fury</Spell>. Note that <Spell id={9846}>Tiger's Fury</Spell> is lost when you
          leave <CatForm /> making it impossible to use <Spell id={27002}>Shred</Spell> more than 3 times in its
          duration
          without <Spell id={16864}>Omen of Clarity</Spell> proc.
        </p>

        <Heading2>Rotation</Heading2>
        <p>
          Keep <Spell id={33983}>Mangle (Cat)</Spell> up if there is no
          other <FeralCombat /> <Druid />, use <Spell id={27002}>Shred</Spell> up to minimal amount of 4 Combo Points if
          it crits and you get 5 it is fine. (This is due to way <Spell id={27008}>Rip</Spell> scales with Attack Power
          4 CP version benefits same as 5 CP version so its not much of improvement (257
          with <Spell id={33983}>Mangle</Spell> active to be precise)). Then use <Spell id={27008}>Rip</Spell> and
          repeat. Never use <Spell id={27002}>Shred</Spell> without <Spell id={33983}>Mangle</Spell> and
          keep <Spell id={33983}>Mangle</Spell> up whole time <Spell id={27008}>Rip</Spell> is active (note
          that first proc of <Spell id={27008}>Rip</Spell> is 2 seconds after application so you have same time to
          get <Spell id={33983}>Mangle</Spell> up. If you feel like you build up CP fast enough to
          put <Spell id={24248}>Ferocious Bite</Spell> between two 4 CP application
          of <Spell id={27008}>Rip</Spell> without any downtime use it if you
          have <Talent id={16862}>Feral Aggression</Talent> otherwise just continue
          with <Spell id={27002}>Shred</Spell>. Powershift every time macro lets you (even if <Spell id={16864}>Omen of
          Clarity</Spell> buff is up) and do not forget to keep <Spell id={27011}>Faerie Fire (Feral)</Spell> up at all
          time. Also when <Spell id={16864}>Omen of Clarity</Spell> is up always
          use <Spell id={27002}>Shred</Spell> only exception is when <Spell id={33983}>Mangle</Spell> bonus is not
          active, otherwise always
          prioritize <Spell id={27002}>Shred</Spell> over <Spell id={27008}>Rip</Spell>, <Spell id={33983}>Mangle
          (Cat)</Spell> and especially <Spell id={24248}>Ferocious Bite</Spell>.
        </p>

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
          doubt best <CatForm /> set bonus. Only think holding it back are relatively weak stats of T4 items. Proc
          chance is 4%.
          4 Set Bonus is fine but nothing extraordinary as 30 Strength is not that hard to get nor that useful.
        </p>
        <p>
          You should aim for 2 Set Bonus ideally chest and hands (or shoulders), it is crazy good and you will not
          replace it until <SunwellPlateau /> and it might be worth even there. It is very hard to actually calculate.
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
        <p>
          This set is just straight up bad. You will be better of with <Karazhan /> gear and 2 Set of T4.
          2 Set of t5 is useless and although 4 set could be used you would have to sacrifice 2 Set of T4 which is much
          better.
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
          <li><strong>(2) Set</strong>: Reduces the energy cost of your Mangle ability in <CatForm /> by 5.</li>
          <li><strong>(4) Set</strong>: Increases the damage dealt by your Rip and Ferocious Bite abilities by 15%.</li>
        </ul>
        <p>
          2 Set Bonus is great reducing energy you have to spend on <Spell id={33983}>Mangle (Cat)</Spell> in your
          rotation.
          4 Set Bonus is amazing, 15% bonus to <Spell id={27008}>Rip</Spell> and <Spell id={24248}>Ferocious
          Bite</Spell> greatly increase your DPS.
        </p>
        <p>
          You should not aim for 4 Set before <SunwellPlateau /> Belt, Boots and Bracers are available and combine them
          with Shoulders (and Chest if you want to keep <Item id="30106">Belt of One-Hundred Deaths</Item>).
        </p>

        <Heading5 anchorId="gladiators-sanctuary-s1234">Gladiator's Sanctuary (S1, S2, S3, S4)</Heading5>
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
        <p>
          Although PvP items for <FeralCombat /> <Druid /> are quite good they are never the best (they are usually in
          top
          3 tho). Avoid this sets if possible and try find something better. Only reason to use it is that you are PvP
          players and have nothing better yet or you will be off tanking a lot and need Resilience to reduce chance
          of Critical Strike against you.
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
          Best Trinkets you can get early on are will keep for long time is <Item id={28830}>Dragonspine
          Trophy</Item> combined with <Item id={32654} quality="rare">Crystalforged Trinket</Item>\<Item id={28579}>Romulo's
          Poison Vial</Item>. In T5 you can replace one of those with <Item id={30627}>Tsunami Talisman</Item> and
          with <Item id={32505}>Madness of the Betrayer</Item> in T6. When Magisters' Terrace on Isle of Quel'Danas
          became available you can get <Item id={34472}>Shard of Contempt</Item> and at this point you will have to
          joggle between <Item id={28830}>Dragonspine Trophy</Item> and <Item id={32505}>Madness of the
          Betrayer</Item> depending on your needs. Note that majority of trinkets with use effect share 30 second long
          cooldown that prevents you from using two of them at once.
        </p>
        <Table cellAlign="center" leftAlignFirstColumn={true} centerTable={false}>
          <caption>
            Values include <Talent id={33856}>Survival of the Fittest</Talent>, <Spell id={20217}>Blessing of
            Kings</Spell> and <Talent id={24894}>Heart of the Wild</Talent>.
          </caption>
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
              <td>???</td>
            </tr>
            <tr>
              <td colSpan={7}>
                Increase your attack speed by {round(hasteRatingToSpeed(325), 1)}%. This directly
                affects only your Auto-Attacks but indirectly also increase your chance of <Spell id={16864}>Omen of
                Clarity</Spell> proc.
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={32505}>Madness of the Betrayer</Item></strong><br /></td>
              <td>P</td>
              <td>20 Hit/92 AP</td>
              <td>-300 Armor</td>
              <td>10</td>
              <td>0</td>
              <td>???</td>
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
                35 Hit is HUGE (although situational) and 4.48 DPS (just from auto-attack) is also solid (Keep in mind
                this is spell and
                benefits from bonuses like <Spell id={17364}>Stormstrike</Spell> and <Spell id={27228}>Curse of the
                Elements</Spell>)
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={28034} quality="rare">Hourglass of the Unraveller</Item></strong><br />
              </td>
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
              <td />
              <td>158 Str (347 AP)</td>
              <td>8</td>
              <td>0</td>
              <td>93 AP</td>
            </tr>
            <tr>
              <td colSpan={7}>
                This is not great as 8 sec duration with 40% proc amounts to about 3.2 sec average uptime
                per <Spell id={33983}>Mangle</Spell> use. It is superb for farming tho.
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={28121} quality="rare">Icon of Unyielding Courage</Item></strong><br />
              </td>
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
                AP bonus + {hasteRatingToSpeed(260)}% attack speed for 10 seconds. It stack nicely
                with <Spell id={2825}>Bloodlust</Spell> and improve your chance of <Spell id={16864}>Omen of
                Clarity</Spell> proc.
              </td>
            </tr>
            <tr>
              <td rowSpan={2}><strong><Item id={25937} quality="uncommon">Terokkar Tablet of
                Precision</Item></strong><br /></td>
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
        <ol>
          <li>
            <Item id={32387} quality="rare">Idol of the Raven Goddess</Item> (<Quest id={11001}>Vanquish the Raven
            God</Quest>)
            <ul>
              <li>
                This increase Critical Strike Chance of every party member by {critRatingToCrit(20)}%.
                For 5 players in party that benefits from physical Critical
                Strike <Item id={32387} quality="rare">Idol of the Raven Goddess</Item> can provide up
                to {critRatingToCrit(20) * 5}% additional Critical Strike Chance. (It also separately
                affects <Hunter />'s pet)
                <p>
                  To find out if <Item id={32387} quality="rare">Idol of the Raven Goddess</Item> is better for your
                  situation than <Item id={29390}>Everbloom Idol</Item> you have to calculate your DPS increase
                  with <Item id={29390}>Everbloom Idol</Item> idol as described in its section and then
                  do following for each member of your party (including you):
                </p>

                <ol>
                  <li>
                    Calculate percentual DPS
                    improvement <Item id={32387} quality="rare">Idol of the Raven Goddess</Item> provides
                    as: <Expresion>{critRatingToCrit(20)} * DpsIncreasePerPercentOfCritChance</Expresion> (You
                    can find this value in list below.)
                    <DpsIncreasePerCritChancePercent />
                  </li>
                  <li>
                    Calculate how much DPS particular party member gets from <Item id={32387} quality="rare">Idol of the
                    Raven Goddess</Item> as <Expresion>PartyMemberDPS * PercentualDpsImprovement / 100</Expresion>
                  </li>
                </ol>
                <p>
                  <strong>Then sum up DPS improvements of all party members and if that number is bigger than DPS you
                    calculated for <Item id={29390}>Everbloom Idol</Item> you should
                    use <Item id={32387} quality="rare">Idol of the Raven Goddess</Item>.</strong> For instance if we
                  use 67 DPS improvement you can find in <Item id={29390}>Everbloom Idol</Item> section you would need
                  to do 2000 DPS yourself and also have <Warrior /> that does 2500 DPS and <Shaman /> that does 2000 DPS
                  in your group to make <Item id={32387} quality="rare">Idol of the Raven Goddess</Item> worth using.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <Item id={29390}>Everbloom Idol</Item> (15x<Boj />)
            <ul>
              <li>
                Damage is affected by <Spell id={33983}>Mangle</Spell> and benefits from Critical Strike damage. Lets
                say you can use <Spell id={27002}>Shred</Spell> 23 times per minute and 10 of those would be Critical
                Strikes. That would give you about 67 DPS (this is SWP level gear). You can count amount
                of <Spell id={27002}>Shred</Spell>s per minute you do in your gear with your rotation and check your
                Critical Strike Chance while fully raid buffed in combat to calculate your DPS increas of Evebloom Idol.
                Calculation is <Expresion>(((AmountOfShreds * CriticalStrikeChanceAsDecimal * 1.2) + AmountOfShreds ) *
                88 * 1.3) / 60</Expresion> (CriticalStrikeChanceAsDecimal means 45.25% Crit Chance is 0.4525)
                Note that amount of <Spell id={27002}>Shred</Spell> will differ in scenario where there is
                another <FeralCombat /> <Druid /> to keep <Spell id={33983}>Mangle</Spell> up.
              </li>
            </ul>
          </li>
          <li>
            <Item id={33509}>Idol of Terror</Item> (20x<Boj />)
            <ul>
              <li>
                Both <Talent id={33856}>Survival of the Fittest</Talent> and <Spell id={20217}>Blessing of
                Kings</Spell> affect amount of Agility you receive. 74 Agility that you get with both this buffs amounts
                to: {agilityToCrit(74, "druid")}% Critical Strike Chance and 81 Attack Power
                (with <Talent id={24894}>Heart of the Wild</Talent>). 81 Attack Power amounts to 5.79 DPS increase
                from Auto-Attack only and same more from other
                Abilities. {agilityToCrit(74, "druid")}% Critical Strike Chance increase your DPS
                by {critToMeleeDpsImprovement(agilityToCrit(74, "druid"), 1.2)}%. Duration is
                10 seconds but you use <Spell id={33983}>Mangle</Spell> every 12 seconds in standard rotation meaning
                that it has maximal 83% uptime.
              </li>
            </ul>
          </li>
          <li>
            <Item id={32257}>Idol of the White Stag</Item> (<Supremus />, <BlackTemple />)
            <ul>
              <li>
                Attack Power bonus is 103 with <Talent id={24894}>Heart of the Wild</Talent>. Bonus is barely more AP
                than <Item id={33509}>Idol of Terror</Item> making it a way worse but uptime on this is 20 second so
                you can keep it up 100% of time in standard rotation. 103 Attack Power amounts to 7.36 DPS increase
                from Auto-Attack only and same more from other Abilities.
              </li>
            </ul>
          </li>
          <li>
            <Item id={28372} quality="rare">Idol of Feral Shadows</Item> (Zereketh the Unbound(1), The
            Arcatraz(HC/Normal))
            <ul>
              <li>
                Improves <Spell id={27008}>Rip</Spell> Damage by 210 overall (with 5 CP). This damage is further
                improved by <Spell id={33983}>Mangle</Spell> to 273 Damage. That is 22.75 DPS boost.
              </li>
            </ul>
          </li>
          <li>
            <Item id={28064} quality="uncommon">Idol of the Wild</Item> (<Quest id={10132}>Colossal Menace</Quest>)
          </li>
          <li>
            <Item id={25940} quality="rare">Idol of the Claw</Item> (Pandemonius(1), Mana-Tombs(Normal))
            <ul>
              <li>
                This is quite week as amount of HP restored is
                miniscule. <Talent id={33873}>Nurturing Instinct</Talent> improved amount of healing received.
              </li>
            </ul>
          </li>
          <li>
            <Item id={27990} quality="rare">Idol of Savagery</Item> (<Item id={24579} quality="common">Mark of Honor
            Hold</Item>/<Item id={24581} quality="common">Mark of Thrallmar</Item>)
            <ul>
              <li>
                This idol is of not use for us as
                both <Spell id={27000}>Claw</Spell>, <Spell id={27003}>Rake</Spell> should not be used. (Bonus
                to <Spell id={27003}>Rake</Spell> is applied on initial damage.)
              </li>
            </ul>
          </li>
          <li>
            <Item id={22397}>Idol of Ferocity</Item> (Lord Roccor, BRD) this is just weak version
            of <Item id={27990} quality="rare">Idol of Savagery</Item></li>
        </ol>

        <Heading3>Enchants</Heading3>
        <ul>
          <li>
            <strong>Head</strong>: <Item id={29192} quality="uncommon">Glyph of Ferocity</Item> if you need Hit
            otherwise <Item id={30846} quality="uncommon">Glyph of the Outcast</Item> (<Item id={8345} quality="rare">Wolfshead
            Helm</Item> with <Item id={29192} quality="uncommon">Glyph of Ferocity</Item> is good item to compensate for
            missing <Balance /> <Druid /> as it is dirt cheap and you can easily swap it with one that
            has <Item id={30846} quality="uncommon">Glyph of the Outcast</Item>.)
          </li>
          <li>
            <strong>Shoulder</strong>: <Item id={28910} quality="rare">Greater Inscription of the
            Blade</Item> (preferably) or <Item id={28888} quality="rare">Greater Inscription of the Blade</Item>
          </li>
          <li><strong>Back</strong>: <Spell id={34004}>Enchant Cloak - Greater Agility</Spell></li>
          <li><strong>Chest</strong>: <Spell id={46502}>Enchant Chest - Exceptional Stats</Spell></li>
          <li>
            <strong>Wrists</strong>: (assuming <Spell id={20217}>Blessing of
            Kings</Spell> and <Talent id={33856}>Survival of the Fittest</Talent>)
            <ol>
              <li>
                <Spell id={27905}>Enchant Bracer - Stats</Spell>: increase your Attack Power by 29.91 improving DPS by
                2.137. Critical Strike chance improvement of Agility also increase DPS
                by {critToMeleeDpsImprovement(agilityToCrit(4.532, "druid"), 1.2)}% so you need
                to do at least 982 DPS to overcome 2.1365 DPS difference
                of <Spell id={27899}>Enchant Bracer - Brawn</Spell>. <Spell id={27905}>Enchant Bracer -
                Stats</Spell> also increases Stamina and Spirit by 4.532 and Intellect by 5.4384.
              </li>
              <li>
                <Spell id={27899}>Enchant Bracer - Brawn</Spell>: increase your Attack Power by 59.82 improving DPS by
                4.273.
              </li>
            </ol>
          </li>
          <li><strong>Hands</strong>: <Spell id={25080}>Enchant Gloves - Superior Agility</Spell> if available
            if not <Spell id={33995}>Enchant Gloves - Major Strength</Spell></li>
          <li><strong>Legs</strong>: <Item id={29535}>Nethercobra Leg Armor</Item></li>
          <li><strong>Feet</strong>: <Spell id={34007}>Enchant Boots - Cat's Swiftness</Spell> (Being able to hit is
            worth more than agility)
          </li>
          <li>
            <strong>Finger</strong>:
            <ol>
              <li>
                <Spell id={27927}>Formula: Enchant Ring - Stats</Spell>: with <Spell id={20217}>Blessing of
                Kings</Spell> and <Talent id={33856}>Survival of the Fittest</Talent> amounts to 14.9556 AP which
                is 1.0683 DPS improvement
                and additional {critToMeleeDpsImprovement(agilityToCrit(4.532, "druid"), 1.2)}%
                increase in DPS due to Critical Strike Chance improvement of
                Agility. <Spell id={27927}>Formula: Enchant Ring - Stats</Spell> also increases Stamina and Spirit by
                4.532 and Intellect by 5.4384.
              </li>
              <li>
                <Spell id={27920}>Enchant Ring - Striking</Spell> increase your DPS by 2. So you have 0.9317 DPS
                (above <Spell id={27927}>Formula: Enchant Ring - Stats</Spell>)
                against {critToMeleeDpsImprovement(agilityToCrit(4.532, "druid"), 1.2)}%
                DPS increase and all other Stat bonuses of <Spell id={27927}>Formula: Enchant Ring - Stats</Spell>. It
                is enough to do 429 DPS to surpass effect
                of <Spell id={27920}>Enchant Ring - Striking</Spell> with <Spell id={27927}>Formula: Enchant Ring -
                Stats</Spell>.
                (Also <Spell id={27920}>Enchant Ring - Striking</Spell> does not improve damage
                of <Spell id={27008}>Rip</Spell> whatsoever.)
              </li>
            </ol>
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
          Anything is better than wiping whole raid due to taking Aggro from Tank. Only of there really is nothing else
          to do then use <Spell id={27004}>Cower</Spell> and keep your eyes on your threat
          meter. <Spell id={27011}>Faerie Fire (Feral)</Spell> also generates 108 additional threat. You can learn more
          in our <Link to="/stats-and-mechanics/threat">Threat Mechanics Tutorial</Link>
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
          Chicken</Item> but that is it.
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
          id={27659} quality="common">Warp Burger</Item>. You can also use Hit food if you are short on Hit
          Rating: <Item id={33872} quality="common">Spicy Hot Talbuk</Item> or Strength food if you run our of Agility
          food or fight does not matter: <Item id={27658} quality="common">Roasted Clefthoof</Item>.
        </p>

        <Heading5>Elixirs and Flasks</Heading5>
        <p>
          You can use <Item id={22854} quality="common">Flask of Relentless Assault</Item> if you dying a lot and want
          to save some many
          but elixirs are far better option. (There is also awesome <Item id={32598} quality="common">Unstable Flask of
          the Beast</Item> that can only be used in <GruulsLair />)
        </p>
        <p>
          For Battle Elixir <Item id={22831} quality="common">Elixir of Major Agility</Item> is clear winner without any
          competition in sight with <Spell id={20217}>Blessing of Kings</Spell> it provides {critRatingToCrit(20)
        + agilityToCrit(39.655, "druid")}% Critical Strike chance improvement and 47.59 Attack Power.
        </p>
        <p>
          There are two options for Guardian Elixir <Item id={32067} quality="common">Elixir of Draenic
          Wisdom</Item> and <Item id={22840} quality="common">Elixir of Major
          Mageblood</Item>. <Item id={32067} quality="common">Elixir of Draenic Wisdom</Item> with <Spell id={20217}>Blessing
          of Kings</Spell> provides very
          roughly ~{round(manaRegen(33.99, 40.788) * 0.89)} MP5 (This will vary based on ratio of your Spirit to
          Intellect) that is less regen than <Item id={22840} quality="common">Elixir of Major Mageblood</Item>. On
          other hand <Item id={32067} quality="common">Elixir of Draenic Wisdom</Item> also provides 556.2 Mana. This
          difference is offset with superior mana regen
          of <Item id={22840} quality="common">Elixir of Major Mageblood</Item> in 90 seconds making it superior choice.
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
          Strength Potion</Item> and <Item id={22837} quality="common">Heroic Potion</Item> is the least effective.
          Again you should use those inside of Powershifting macro to maximize damage.
        </p>

        <Heading2>Buffs</Heading2>

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
          <li><Spell id={25389}>Power Word: Fortitude</Spell> increases your Stamina 105</li>
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
              with exact same effect as hunter reduced to 2%. (As each aura can be active only once
              multiple <Paladin />s are useless.) This should be more
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
              <Marksmanship /> <Hunter />'s <Spell id={27066}>Trueshot Aura</Spell> increases your Attack Power by 137.
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
