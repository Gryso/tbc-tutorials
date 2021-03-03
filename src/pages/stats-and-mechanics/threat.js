import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import {Heading2, Heading5, Title} from "../../components/headers/headers";
import StatsAndMechanicsSideMenu from "../../components/menus/sideMenus/StatsAndMechanicsSideMenu";
import {
  Druid,
  Hunter,
  Mage,
  Paladin,
  Priest,
  Rogue,
  Shaman,
  Warlock,
  Warrior
} from "../../components/gameElements/class/classes";
import Spell from "../../components/gameElements/spell/Spell";
import {Totem, Voidwalker} from "../../components/gameElements/minion/minions";
import Talent from "../../components/gameElements/talent/Talent";
import {
  BattleStance,
  BearForm,
  BerserkerStance,
  CatForm,
  DefensiveStance
} from "../../components/gameElements/stances/stances";
import Item from "../../components/gameElements/item/Item";
import {Link} from "gatsby";

const ParryHaste = () => {
  return (
    <MainLayout pageTitle="Threat Mechanics">
      <SideMenuLayout sideMenu={StatsAndMechanicsSideMenu}>
        <Title>Threat Mechanics</Title>
        <p>
          Threat is measurement which only purpose is to determine who will NPC attack in PvE encounter.
        </p>
        <Heading2>Basic Threat Mechanics</Heading2>
        <p>
          Every point of damage generates 1 Threat on target enemy, evey point of HP healed (Excluding overhealing)
          generates 0.5 Threat. For all positive effect (healing, buffs, mana regen etc.) Threat is evenly split
          between all enemies. Every negative effect that can affect multiple enemies and has additional Threat bonus
          (Outside of Threat from damage delt) splits bonus Threat evenly between all enemies.
        </p>
        <Heading2>Threat Multipliers</Heading2>
        <p>
          Threat is calculated as multiple of different Threat Multipliers. This can be base Multiplier of certain
          class, form or stance or Multiplier from buffs, talents and items. They stack in multiplicative fashion with
          two exceptions: <Talent id={20470}>Improved Righteous Fury</Talent> as written in talent description
          is multiplied only with 0.6x bonus of <Spell id={25780}>Righteous Fury</Spell> (instead of full 1.6x) making
          talented <Spell id={25780}>Righteous Fury</Spell> Multiplier 1.9x
          and <Talent id={16949}>Feral Instinct</Talent> is additive with <BearForm /> giving 1.45x Multiplier to
          talented <BearForm />.
        </p>
        <table className="simplePageTable">
          <caption>Base Threat Multipliers (Untalented)</caption>
          <thead>
            <tr>
              <th>Source</th>
              <th>Multiplier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Damage</td>
              <td>1.0x</td>
            </tr>
            <tr>
              <td>Healing</td>
              <td>0.5x</td>
            </tr>
            <tr>
              <td><BearForm /></td>
              <td>1.3x</td>
            </tr>
            <tr>
              <td><CatForm /></td>
              <td>0.71x</td>
            </tr>
            <tr>
              <td><Spell id={25780}>Righteous Fury</Spell></td>
              <td>1.6x</td>
            </tr>
            <tr>
              <td><Paladin /> Healing</td>
              <td>0.5x (Separate from base healing)</td>
            </tr>
            <tr>
              <td><Spell id={1038}>Blessing of Salvation</Spell></td>
              <td>0.7x</td>
            </tr>
            <tr>
              <td><Rogue /></td>
              <td>0.71x</td>
            </tr>
            <tr>
              <td><DefensiveStance /></td>
              <td>1.3x</td>
            </tr>
            <tr>
              <td><BerserkerStance /></td>
              <td>0.8x</td>
            </tr>
            <tr>
              <td><BattleStance /></td>
              <td>0.8x</td>
            </tr>
            <tr>
              <td><Spell id={25908}>Tranquil Air Totem</Spell></td>
              <td>0.8x</td>
            </tr>
          </tbody>
        </table>

        <table className="simplePageTable">
          <caption>Notable Spells and Items</caption>
          <thead>
            <tr>
              <th>Spell / Item</th>
              <th>Threat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Druid />'s <Spell id={6795}>Growl</Spell></td>
              <td>100% of current target</td>
            </tr>
            <tr>
              <td><Druid />'s <Spell id={33987}>Mangle (Bear)</Spell></td>
              <td>1.3x</td>
            </tr>
            <tr>
              <td><Hunter />'s <Spell id={34477}>Misdirection</Spell></td>
              <td>Redirects Threat of 3 attacks to friendly target</td>
            </tr>
            <tr>
              <td><Hunter />'s <Spell id={27020}>Distracting Shot</Spell></td>
              <td>+700</td>
            </tr>
            <tr>
              <td><Paladin />'s <Spell id={31789}>Righteous Defense</Spell></td>
              <td>100% of current target</td>
            </tr>
            <tr>
              <td><Priest />'s <Spell id={25331}>Holy Nova</Spell></td>
              <td>0</td>
            </tr>
            <tr>
              <td><Shaman />'s <Spell id={25464}>Frost Shock</Spell></td>
              <td>??x (Unknown)</td>
            </tr>
            <tr>
              <td><Warlock />'s <Spell id={30459}>Searing Pain</Spell></td>
              <td>2x</td>
            </tr>
            <tr>
              <td><Warrior />'s <Spell id={355}>Taunt</Spell></td>
              <td>100% of current target</td>
            </tr>
            <tr>
              <td><Warrior />'s <Spell id={30022}>Devastate</Spell></td>
              <td>106 + (14 * Sunder Count) + (If not at 5) <Spell id={25225}>Sunder Armor</Spell></td>
            </tr>
            <tr>
              <td><Warrior />'s <Spell id={25264}>Thunder Clap</Spell></td>
              <td>1.75x</td>
            </tr>

            <tr>
              <td><Item id={25897} quality="rare">Bracing Earthstorm Diamond</Item></td>
              <td>0.98x</td>
            </tr>
            <tr>
              <td><Item id={30621}>Prism of Inner Calm</Item></td>
              <td>-150 Physical Critical Strike / -1000 Spell Critical Strike</td>
            </tr>
            <tr>
              <td><Spell id={25072}>Enchant Gloves - Threat</Spell></td>
              <td>1.02x</td>
            </tr>
            <tr>
              <td><Spell id={25084}>Enchant Cloak - Subtlety</Spell></td>
              <td>0.98x</td>
            </tr>
          </tbody>
        </table>

        <Heading5>Examples:</Heading5>
        <ol>
          <li>
            <Warrior /> in <BerserkerStance /> with <Spell id={1038}>Blessing of Salvation</Spell> using <Spell
            id={25231}>Cleave</Spell>. (<Spell id={25231}>Cleave</Spell> has
            130 bonus Threat) If you hit 2 enemies for 1000 damage each your Threat on one enemy will be: 1000
            (damage dealt) + 130/2 (<Spell id={25231}>Cleave</Spell> bonus Threat split between all affected
            enemies) * 0.8 (<BerserkerStance /> Multiplier) * 0.7 (<Spell id={1038}>Blessing of
            Salvation</Spell> Multiplier)
            <div className="calculation">
              1000 + 130/2 * 0.8 * 0.7 = <strong>596.4 Threat</strong>
            </div>
          </li>
          <li>
            <Paladin /> with not talented <Spell id={25780}>Righteous Fury</Spell> using <Spell id={27136}>Holy
            Light</Spell> to
            heal tank for 1500. Tank is missing 1000 hp and is Fighting 3 enemies. Threat on one enemy will be: 1000
            (Healing done excluding overhealing) * 0.5 (Base Healing Multiplier) * 0.5 (Special <Paladin /> Healing
            Multiplier) * 1.6 (<Spell id={25780}>Righteous Fury</Spell> Multiplier) / 3 (Evenly split between 3 enemies)
            <div className="calculation">
              1000 * 0.5 * 0.5 * 1.6 / 3 = <strong>133.3 Threat</strong>
            </div>
          </li>
          <li>
            <Warlock /> with <Spell id={25908}>Tranquil Air Totem</Spell> using <Spell id={30459}>Searing
            Pain</Spell> on
            enemy dealing 1000 damage with 25% partial resist. Threat on attacked target will be: 750 (damage delt -250
            due to resistance) * 2.0 (<Spell id={30459}>Searing Pain</Spell> Multiplier) * 0.8
            (<Spell id={25908}>Tranquil Air Totem</Spell> Multiplier)
            <div className="calculation">
              750 * 2.0 * 0.8 = <strong>1200 Threat</strong>
            </div>
          </li>
          <li>
            <Druid /> in <CatForm /> melee attack enemy for 500 damage. Threat on attacked target will be: 500 *
            0.71 (<CatForm /> Multiplier)
            <div className="calculation">
              500 * 0.71 = <strong>355 Threat</strong>
            </div>
          </li>
          <li>
            <Warrior /> in <DefensiveStance /> uses <Spell id={25203}>Demoralizing Shout</Spell> on 4 enemies. Threat on
            one enemy will be: 56 (Base <Spell id={25203}>Demoralizing Shout</Spell> Threat) *
            1.3 (<DefensiveStance /> Multiplier) / 4 (Evenly split between 4 enemies)
            <div className="calculation">
              56 * 1.3 / 4 = <strong>18.2 Threat</strong>
            </div>
          </li>
        </ol>

        <Heading2>Threat Reduction</Heading2>
        <p>
          What to do when your Threat is too high (Above Tank's Threat for melee, 20% above Tank's Threat for ranged)?
        </p>
        <ol>
          <li>
            If your Threat already growth over tanks enough to switch focus to you, use any of Threat reducing abilities
            or items as soon as possible. You can also use spells like <Spell id={1020}>Divine Shield</Spell> or <Spell
            id={45438}>Ice Block</Spell> to protect yourself or if possible use spells like <Spell id={27088}>Frost
            Nova</Spell> or <Spell id={33786}>Cyclone</Spell> to slow or prevent target from reaching you. After you did
            this or if you have none of those tools at your disposal <strong>RUN TO THE TANK, SO HE CAN TAUN THE ENEMY
            FROM YOU.</strong> He might have hard time getting to you and if you decide to run away you will make it
            even worse making more chaos.
          </li>
          <li>You can stop attacking or switch to lower rank spells.</li>
          <li>
            You can reposition or use buffs and spells that need to be cast while you are waiting for Tank to generate
            enough Threat. (<Shaman /> can cast his <Totem />, <Druid /> can use <Spell id={29166}>Innervate</Spell> or
            resurrect someone with <Spell id={26994}>Rebirth</Spell>, <Mage /> can refresh <Spell
            id={12826}>Polymorph</Spell> etc.)
          </li>
          <li>
            You can use some of Threat Reducing abilities or Items
            <table className="simplePageTable">
              <caption>Active Threat Reduction</caption>
              <thead>
                <tr>
                  <th>Spell</th>
                  <th>Threat Reduction</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Druid />'s <Spell id={27004}>Cower</Spell></td>
                  <td>-1170 (Target)</td>
                </tr>
                <tr>
                  <td><Hunter />'s <Spell id={27015}>Disengage</Spell></td>
                  <td>-545 (Target)</td>
                </tr>
                <tr>
                  <td><Hunter />'s <Spell id={5384}>Feign Death</Spell></td>
                  <td>-100% (All)</td>
                </tr>
                <tr>
                  <td><Mage />'s <Spell id={66}>Invisibility</Spell></td>
                  <td>-10%/sec (All); 100% (All) on Activation</td>
                </tr>
                <tr>
                  <td><Priest />'s <Spell id={25429}>Fade</Spell></td>
                  <td>-1500 (All) (Threat is reduced only temporary)</td>
                </tr>
                <tr>
                  <td><Rogue />'s <Spell id={27448}>Feint</Spell></td>
                  <td>-1050 (Target)</td>
                </tr>
                <tr>
                  <td><Rogue />'s <Spell id={26889}>Vanish</Spell></td>
                  <td>-100% (All)</td>
                </tr>
                <tr>
                  <td><Warlock />'s <Spell id={29858}>Soulshatter</Spell></td>
                  <td>-50% (All)</td>
                </tr>

                <tr>
                  <td><Item id={22871} quality="common">Shrouding Potion</Item></td>
                  <td>-1500 (All)</td>
                </tr>
                <tr>
                  <td><Item id={29181}>Timelapse Shard</Item></td>
                  <td>-901 (All)</td>
                </tr>
                <tr>
                  <td><Item id={25827} quality="rare">Muck-Covered Drape</Item></td>
                  <td>-473 (All)</td>
                </tr>
                <tr>
                  <td><Item id={27900} quality="rare">Jewel of Charismatic Mystique</Item></td>
                  <td>-1075 (All)</td>
                </tr>
                <tr>
                  <td><Item id={25786} quality="uncommon">Hypnotist's Watch</Item></td>
                  <td>-720 (All)</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            Ask for <Spell id={1038}>Blessing of Salvation</Spell> or <Spell id={25908}>Tranquil Air Totem</Spell> in
            your raid.
          </li>
          <li>
            You can talk to your tank about improving his Threat generation you can refer him
            to <Link to="/stats-and-mechanics/threat">This</Link> tutorial or to
            our <Link to="/pve-tutorials/tank">Tank Mechanics Tutorial</Link>
          </li>
          <li>
            Check Your talents if you cannot move few points to Talents that reduce Threat generation or get same items
            or enchants that passively reduce Threat
            like <Item id={25897} quality="rare">Bracing Earthstorm Diamond</Item>, <Item id={30621}>Prism of Inner
            Calm</Item> or <Spell id={25084}>Enchant Cloak - Subtlety</Spell>
          </li>
        </ol>

        <Heading2>Conditions under which the NPC will attack a player</Heading2>
        <ol>
          <li>Player pulled (engaged) the enemy</li>
          <li>
            Players exceeded Threat of current target:
            <ul>
              <li>by <strong>10%</strong> wile withing melee range of the enemy (This is about your position not your
                attack type. <Warlock /> in melee range falls under this condition)
              </li>
              <li>by <strong>30%</strong> wile outside melee range of the enemy (This is about your position not your
                attack type. <Rogue /> outside of melee range falls under this condition)
              </li>
            </ul>
          </li>
          <li>Player used Taunt</li>
          <li>
            Current target used Threat reducing ability
            like <Spell id={25429}>Fade</Spell> or <Spell id={27004}>Cower</Spell> and player is next in Threat table.
            This ignores condition number 2.
          </li>
          <li>
            Current target moves so far that he exceeds leash range or leave combat dying or using spells
            like <Spell id={5384}>Feign Death</Spell> or <Spell id={1856}>Vanish</Spell>
          </li>
          <li>
            Current target is under the influence of spell or ability that prevent
            damage like <Spell id={1020}>Divine Shield</Spell> or <Spell id={45438}>Ice Block</Spell> (This effect
            is temporary and NPC will attack previous target when spell wears off)
          </li>
          <li>
            Current target is under the influence of negative effect that could break if attacked this includes spells
            like <Spell id={12826}>Polymorph</Spell> and <Spell id={2094}>Blind</Spell>
            (This effect is temporary and NPC will attack previous target when spell wears off)
          </li>
          <li>
            NPC is under influence of spell that prevent it from reaching any other target with higher Threat.
            For example <Spell id={26989}>Entangling Roots</Spell> or <Spell id={27088}>Frost Nova</Spell>.
          </li>
        </ol>
        <Heading2>Taunt</Heading2>
        <p>
          Taunts are loosely grouped abilities named after <Warrior />'s spell <Spell id={355}>Taunt</Spell> used by
          Tank
          classes to keep enemies Focus (or Aggro) on them. There are three effects Taunt can have:
        </p>
        <ol>
          <li>Enemy is forced to focus attack the Tank for duration of Debuff applied by Taunt.</li>
          <li>Tank's Threat level is raised to match Threat of current target</li>
          <li>Tank will be the one Focused when Debuff wears off</li>
        </ol>
        <p>There are three groups of spells commonly referred to as Taunts:</p>
        <ul>
          <li>
            Real Taunts (All 3 effects are applied):
            <ul>
              <li><Warrior />: <Spell id={355}>Taunt</Spell></li>
              <li><Druid />: <Spell id={6795}>Growl</Spell></li>
              <li><Paladin />: <Spell id={31789}>Righteous Defense</Spell></li>
            </ul>
          </li>
          <li>
            Abilities that Forces Enemy To Focus Tank (Only first effect is applied):
            <ul>
              <li><Warrior />: <Spell id={25266}>Mocking Blow</Spell>, <Spell id={1161}>Challenging Shout</Spell></li>
              <li><Druid />: <Spell id={5209}>Challenging Roar</Spell></li>
            </ul>
          </li>
          <li>
            Fake Taunts (None of the effects above is applied, they only cause high amount of Threat):
            <ul>
              <li><Warlock />'s <Voidwalker />: <Spell id={27270}>Torment</Spell></li>
              <li><Hunter />s pet: <Spell id={27047}>Growl</Spell></li>
            </ul>
          </li>
        </ul>

      </SideMenuLayout>
    </MainLayout>
  );
};

export default ParryHaste;
