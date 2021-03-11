import React from "react";
import MainLayout from "../../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../../components/layouts/sideMenuLayout/SideMenuLayout";
import PveTutorialsMenu from "../../../components/menus/sideMenus/PveTutorialsSideMenu";
import {Heading2, Heading3, Heading4, Heading5, Title} from "../../../components/headers/headers";
import Item from "../../../components/gameElements/item/Item";
import {CatForm, SwiftFlightForm, TravelForm} from "../../../components/gameElements/stances/stances";
import Talent from "../../../components/gameElements/talent/Talent";
import Spell from "../../../components/gameElements/spell/Spell";
import Quest from "../../../components/gameElements/quest/Quest";
import {Boj} from "../../../components/gameElements/currency/currency";
import {EredarTwins, HexLordMalacrass, ShadeOfAran, Supremus} from "../../../components/gameElements/boss/bosses";
import {BlackTemple, Karazhan, SunwellPlateau, ZulAman} from "../../../components/gameElements/instance/Instances";
import Table from "../../../components/table/Table";
import round from "../../../utils/round";
import {agilityToCrit, critRatingToCrit} from "../../../data/statsFormulas";
import {FeralCombat} from "../../../components/gameElements/talentSpecialisation/TalentSpecialisations";
import {druid} from "../../../data/raceStats";
import {Nightelf, Tauren} from "../../../components/gameElements/race/races";
import {Druid} from "../../../components/gameElements/class/classes";

function calculateWeaponAttackPower(feralAp, agility, strength, king = true) {
  let statsMultiplayer = king ? 1.13 : 1.03;
  return round((feralAp + (agility * statsMultiplayer) + (strength * statsMultiplayer * 2)) * 1.1, 0);
}

function calculateWeaponCritBonus(agility, criticalStrikeRating, king = true) {
  let statsMultiplayer = king ? 1.13 : 1.03;
  return round(agilityToCrit(agility * statsMultiplayer, "druid") + critRatingToCrit(criticalStrikeRating), 2);
}

const Physical = () => {

  return (
    <MainLayout pageTitle="Feral DPS">
      <SideMenuLayout sideMenu={PveTutorialsMenu}>
        <Title>Feral DPS (Cat)</Title>
        <Heading2>ShapeShifting</Heading2>
        <Heading3 anchorId="wolfshead-helm"><Item quality="rare">Wolfshead Helm</Item></Heading3>
        <p>
          Yes You need <Item id={8345} quality="rare">Wolfshead Helm</Item>. Yes <Item id={8345} quality="rare">Wolfshead
          Helm</Item> is
          BiS for entire length of the game.
        </p>
        <Heading3>ShapeShift Macro</Heading3>
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
          <li><CatForm /> changes resource that you are using from Mana to Energy</li>
          <li><CatForm /> reduces threat you generate by 29% down to 0.71 threat point per one damage delt. (0.71x
            Threat Multiplier)
          </li>
          <li>Abilities in <CatForm /> have GCD reduced to 1.0 second from usual 1.5 seconds.</li>
          <li>Mana regeneration in <CatForm /> is reduced by 11% down to 89%</li>
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
        </ol>


        <Heading2>Race</Heading2>
        <Heading5>Racials</Heading5>
        Both races have <Spell id={20551}>Nature Resistance</Spell> and <Tauren /> has <Spell
        id={20550}>Endurance</Spell> that could provide some additional survivability and <Spell id={20585}>Wisp
        Spirit</Spell> can let you AFK a bit longer before pull as you can get there faster after wipe. Apart from that
        racials are pretty inconsequential.
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
          additional Stamina to compensate which although helpful is not enough. This gives us clear winner. If you can
          choose <strong><Nightelf /> is better choice</strong>.
        </p>


        <Heading2>Stats</Heading2>
        Combo point/ 200%+ dmg, ap, dodge, armor, helaing
        <Heading3>Stats priority</Heading3>
        <p>
          Expertise Rating (to 103) > Hit Rating (to 142) > Armor Penetration > Agility > Strength > Haste > Critical
          Rating > Attack Power
        </p>
        <Heading2>Hit Rating</Heading2>
        <Heading2>Expertise Rating</Heading2>
        <Heading2>Abilities</Heading2>
        <Heading2>Finishing moves</Heading2>
        <Heading2>Idols</Heading2>
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

        <Heading2>Weapons</Heading2>
        <p>
          Weapons on <Druid /> in <CatForm /> works differently than on other classes and all they do is provide you
          with stats. Speed and Damage of your Weapon and your Weapon Skill have no effect on your Attacks
          in <CatForm />. Your speed in <CatForm /> is normalized to 1 second, all damage is based on <CatForm /> damage
          which is calculated from your Attack Power, and your Weapon Skill in <CatForm /> is always considered to be
          350 no matter what weapon do you use.
        </p>
        <Heading4>Weapon comparison</Heading4>
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
              <td><Item id={34198}>Stanchion of Primal Instinct</Item></td>
              <td>1197</td>
              <td className="highlight">75</td>
              <td>47</td>
              <td className="highlight">{calculateWeaponAttackPower(1197, 75, 47)}</td>
              <td className="highlight">{calculateWeaponCritBonus(75, 0)}%</td>
              <td className="highlight">350 Armor Reduction</td>
            </tr>
            <tr>
              <td><Item id={35103}>Brutal Gladiator's Staff</Item></td>
              <td>1197</td>
              <td />
              <td className="highlight">50</td>
              <td>{calculateWeaponAttackPower(1197, 0, 50)}</td>
              <td>{calculateWeaponCritBonus(0, 50)}%</td>
              <td className="highlight">+26 Hit Rat</td>
            </tr>
            <tr>
              <td><Item id={34898}>Staff of the Forest Lord</Item></td>
              <td>1110</td>
              <td>52</td>
              <td className="highlight">50</td>
              <td>{calculateWeaponAttackPower(1110, 52, 50)}</td>
              <td>{calculateWeaponCritBonus(52, 0)}%</td>
              <td />
            </tr>
            <tr>
              <td><Item id={33716}>Vengeful Gladiator's Staff</Item></td>
              <td>1110</td>
              <td />
              <td>46</td>
              <td>{calculateWeaponAttackPower(1110, 0, 46)}</td>
              <td>{calculateWeaponCritBonus(0, 46)}%</td>
              <td>+22 Hit Rat</td>
            </tr>
            <tr>
              <td><Item id={33465}>Staff of Primal Fury</Item></td>
              <td>973</td>
              <td>49</td>
              <td />
              <td>{calculateWeaponAttackPower(973, 49, 0)}</td>
              <td>{calculateWeaponCritBonus(49, 0)}%</td>
              <td>315 Armor Reduction</td>
            </tr>
            <tr>
              <td><Item id={32014}>Merciless Gladiator's Maul</Item></td>
              <td>1010</td>
              <td />
              <td>42</td>
              <td>{calculateWeaponAttackPower(1010, 0, 42)}</td>
              <td>{calculateWeaponCritBonus(0, 42)}%</td>
              <td>+18 Hit Rat</td>
            </tr>
            <tr>
              <td><Item id={28658}>Terestian's Stranglestaff</Item></td>
              <td>829</td>
              <td>37</td>
              <td>38</td>
              <td>{calculateWeaponAttackPower(829, 37, 38)}</td>
              <td>{calculateWeaponCritBonus(37, 0)}%</td>
              <td>+25 Hit Rat</td>
            </tr>
            <tr>
              <td><Item id={28476}>Gladiator's Maul</Item></td>
              <td>894</td>
              <td />
              <td>32</td>
              <td>{calculateWeaponAttackPower(894, 0, 32)}</td>
              <td>{calculateWeaponCritBonus(0, 35)}%</td>
              <td>+20 Hit Rat</td>
            </tr>
            <tr>
              <td><Item id={30883}>Pillar of Ferocity</Item></td>
              <td>1059</td>
              <td />
              <td>47</td>
              <td>{calculateWeaponAttackPower(1059, 0, 47)}</td>
              <td>{calculateWeaponCritBonus(0, 0)}%</td>
              <td />
            </tr>
            <tr>
              <td><Item id={29171}>Earthwarden</Item></td>
              <td>712</td>
              <td />
              <td />
              <td>{calculateWeaponAttackPower(712, 0, 0)}</td>
              <td>{calculateWeaponCritBonus(0, 0)}%</td>
              <td>+24 Expertise Rat</td>
            </tr>
            <tr>
              <td><Item id={29359}>Feral Staff of Lashing</Item></td>
              <td>754</td>
              <td>35</td>
              <td>36</td>
              <td>{calculateWeaponAttackPower(754, 35, 36)}</td>
              <td>{calculateWeaponCritBonus(35, 0)}%</td>
              <td />
            </tr>
            <tr>
              <td><Item id={31334}>Staff of Natural Fury</Item></td>
              <td>712</td>
              <td />
              <td>35</td>
              <td>{calculateWeaponAttackPower(712, 0, 35)}</td>
              <td>{calculateWeaponCritBonus(0, 0)}%</td>
              <td>-200 Shapeshift Mana</td>
            </tr>
            <tr>
              <td><Item id={30021}>Wildfury Greatstaff</Item></td>
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
          you ran out of mana from shapeshifting or you need that one more shapeshift after <Spell
          id={20747}>Rebirth</Spell> or <Spell id={29166}>Innervate</Spell> to stay relevant in fight. Or you want to
          save same mana on <TravelForm /> spam when you want to get out of slow or roots. Or you are just that fucking
          efficient and want to save mana on <SwiftFlightForm />. There are many uses for <Item id={31334}>Staff of
          Natural Fury</Item> and You should have it at your disposal.
        </p>
        <Heading2>Mana</Heading2>
        <Heading4>Innervation</Heading4>
        <Heading4>Spirit Weapon</Heading4>
        <Heading4>Potions and Runes</Heading4>


        <Heading2>Threath</Heading2>
        Cower -1170 (rank 5)
        <Heading2>Omen of Clarity</Heading2>
        <p>
          The proc rate is roughly 6%. There is no internal cooldown on the ability, and it can happen multiple times in
          a row.
          It says 3.5 ppm or 5.8% but I don’t know if that is still accurate.
          3.5 PPM (old PPM), which would be a 5.8333% (repeating, of course) chance per melee swing that does damage or
          is absorbed.


          [quote=Rlnshadow]Which means that an OoC Ferocious Bite at 100 energy will deal 410 more damage. Pretty
          sick.[/quote] Yes. It's so bad it's sick. If you use the energy for two Mangles or Shreds instead, you will do
          at least four times the damage. If Clearcasting procs, you have 5 combo points, ~40 energy or more and is
          about to use Ferocious Bite, don't use it. The 40 energy amounts to about 170 damage, while a Mangle or Shred
          and a Ferocious Bite afterwards would deal much higher damage. It doesn't matter that the combo point is
          wasted, you will still do much less damage if you burn Clearc
        </p>
        <Heading2>Profession</Heading2>
        <Heading2>Rotation</Heading2>
        <Heading2>Talents</Heading2>

        <Heading2>Buffs</Heading2>
        <Heading3>Omen Of Clarity</Heading3>
        <Heading3>Paladin Blessing</Heading3>
        <Heading3>Shaman Totem</Heading3>

      </SideMenuLayout>
    </MainLayout>
  );
};

export default Physical;
