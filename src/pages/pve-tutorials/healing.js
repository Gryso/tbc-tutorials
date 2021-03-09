import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import PveTutorialsMenu from "../../components/menus/sideMenus/PveTutorialsSideMenu";
import {Heading2, Heading3, Heading4, Heading5, Title} from "../../components/headers/headers";
import Talent from "../../components/gameElements/talent/Talent";
import {
  intellectFor1Crit,
  intellectToCrit,
  ratingFor1Percent,
  spellCritRatingToCrit,
  spellHasteRatingForReduction
} from "../../data/statsFormulas";
import {Druid, Paladin, Priest, Shaman, Warlock} from "../../components/gameElements/class/classes";
import Formula from "../../components/formula/Formula";
import {
  ImpactOfDifferentSpiritAndIntellectDistributionDataTable,
  PointsSplitBetweenSpiritAndIntellectDataTable,
  SpellHasteDataTable
} from "../../components/dataTables/spellDataTables";
import Spell from "../../components/gameElements/spell/Spell";
import {Link} from "gatsby";


const Healing = () => {

  return (
    <MainLayout pageTitle="Physical DPS mechanics">
      <SideMenuLayout sideMenu={PveTutorialsMenu}>
        <Title>Healing mechanics</Title>
        <Heading2>Spell Healing Bonus</Heading2>
        <p>
          Spell (Damage and) Healing is an attribute that increase effectiveness of spells. Amount of spell damage bonus
          applied to spell varies per spell type and spell cast time. This is called spell damage coefficient and can be
          calculated using following rules. (There are many exceptions and talents affecting spell damage coefficient
          outside this rules)
        </p>

        <Heading2>Spell Critical Strike</Heading2>
        <p>
          Spell Critical Strike is successful hit of spell which effect is increase to 150%. (This is 50% bonus
          damage for calculation in talents and items that "Increase Critical Strike damage bonus
          by X" <Talent id={16166}>Elemental Mastery</Talent> would increase your Spell Critical Strike damage to
          200% overall)
        </p>
        There are 2 ways to increase your chance of Spell Critical Strike:
        <ol>
          <li>
            <strong>Spell Critical Strike Rating</strong>: Increase critic chance by {spellCritRatingToCrit(1)}%
            per point. ({ratingFor1Percent("spellCrit")} Critical Strike Rating for 1% chance)
          </li>
          <li><strong>Intellect</strong>:
            <ul>
              <li>
                <Druid />: needs {intellectFor1Crit("druid")} intellect for 1% of Spell Critically Strike
                ({intellectToCrit(1, "druid")}% chance per point)
              </li>
              <li>
                <Paladin />: needs {intellectFor1Crit("paladin")} intellect for 1% of Spell Critically Strike
                ({intellectToCrit(1, "paladin")}% chance per point)
              </li>
              <li>
                <Priest />: needs {intellectFor1Crit("priest")} intellect for 1% of Spell Critically Strike
                ({intellectToCrit(1, "priest")}% chance per point)
              </li>
              <li>
                <Shaman />: needs {intellectFor1Crit("shaman")} intellect for 1% of Spell Critically Strike
                ({intellectToCrit(1, "shaman")}% chance per point)
              </li>
            </ul>
          </li>
        </ol>

        <Heading2>Casting speed of Spells</Heading2>
        <Heading3>Global Cooldown</Heading3>
        <p>
          Global cooldown is 1.5 second (for casters) long universal cooldown that starts when players use any spell,
          ability, change equip and use same items. Preventing using any of mentioned in short successions. There are
          exceptions to this rule and same spells do not trigger Global Cooldown or are not affected by it. (For
          example <Spell id={12472}>Icy Veins</Spell> or <Spell id={17116}>Nature's Swiftness</Spell>) Global Cooldown
          of spells can be reduced down to 1.0 second with Haste rating.
        </p>

        <Heading3>Spell Haste Rating</Heading3>
        <p>
          You can decrease your cast time and global cooldown using Spell Haste Rating. Player
          needs about {ratingFor1Percent("spellHaste")} Spell Haste Rating for 1% of Casting Speed
          reduction. Spell Haste rating also reduces Global Cooldown caused by magic spells (not physical abilities)
          down to maximum of 1 second this is often referred as soft cap for Spell Haste
          Rating ({spellHasteRatingForReduction(2 / 3)}). Way cast time reduction is calculates is quite
          complicated, haste is applied after talents and increase casting speed (cast per seconds) not reduce casting
          time. You have to divide cast time of your spell by speed calculated from Spell Haste Rating to get reduced
          cast time of your spell. Despite the fact that values of the speed bonus per one Spell haste rating
          decrease in a logarithmic fashion,
          the <strong>effect of Spell haste rating on DPS increase LINERALY</strong> and is not affected by diminishing
          return. This means one point of Spell Haste Rating is always worth the same damage output wise. There is no
          hard cap for Spell Haste Rating as you would need infinite amount to reduce casting time to 0.
        </p>
        Formula for Casting Speed Improvement from Spell Haste Rating:
        <Formula>
          CastingSpeedFromSpellHasteRating = 1 + (spellHasteRating / 1570)
        </Formula>
        <SpellHasteDataTable />
        <Heading5>Other sources of casting speed</Heading5>
        <p>
          Spell Haste rating stacks additively with itself but different sources of Casting Speed increase
          (<Spell id={12472}>Icy Veins</Spell> and <Spell id={2825}>Bloodlust</Spell>) stacks multiplicatively.
          Formula for Casting Speed Improvement from multiple sources is:
        </p>
        <Formula>
          OverAllCastingSpeedImprovement = CastingSpeedFromSpellHasteRating * (1 + (OtherSource1 / 100)) * (1 +
          (OtherSource2 / 100)) ...
        </Formula>
        Resulting cast time of spell is then calculated as:
        <Formula>
          ReducedCastTime = baseCastTime / OverAllCastingSpeedImprovement
        </Formula>

        <Heading5 anchorId="casting-speed-instant-spells">Instant Spells</Heading5>
        <p>
          Instant spells are spells that take effect immediately on use. Mana is used at the same time and only thing
          preventing player from casting another spells is Global Cooldown. Only effect of Improved Casting speed has on
          Instant Spells is reduction in Global Cooldown allowing for another Spell to be cast sooner afterwards.
        </p>
        <Heading5 anchorId="casting-speed-channeled-spells">Channeled Spells</Heading5>
        <p>
          Channeled spells are spells which effects occur over the duration of the cast time. Mana is used at the
          beginning and breaking the cast interrupts effect of spell. (No mana is returned) Effect of Improved Casting
          Speed decreases Channeling time of Channeled Spells without affecting damage or any other effect (everything
          happens faster with the same effect) Reduction can go below 1 second but subsequent spell would be blocked by
          Global Cooldown in such case. If Channeled Spells is interrupted by damage (pushback) part of remaining
          channelling time is reduced resulting in lose of damage or effect of Channeled Spell
        </p>
        <Heading5 anchorId="casting-speed-casted-spells">Casted Spells</Heading5>
        <p>
          Casted spells are spells which effects occurs at the end of the cast time. Mana is used at the end when spell
          actually takes effect and breaking the cast results in spell not taking effect without any mana lost. Improved
          Casting Speed decrease time it takes to Cast the spell, this reduction can go below 1 second but subsequent
          spell would be blocked by Global Cooldown in such case. If Casted spell is interrupted by damage (pushback)
          only
          casting time is prolonged without effect on resulting spell itself.
        </p>
        <Heading3>Interruptions</Heading3>
        <Heading5>By Damage</Heading5>
        <p>
          Also referred to as a Pushback is effect of damage on casting speed of spells. Any direct damage spell or
          ability
          will cause pushback. This does not include DoTs, Channeled spells (<Spell id={38704}>Arcane Missiles</Spell>
          is exception) and absorbed damage. Pushback sets cast time back by given amount, but cannot reduce it
          below zero. (For Channeled Spells this means their duration be reduced) Reduction of first
          Pushback is 1.0 and reduction of any consequent pushback is 0.2 seconds less than previous one down to minimum
          of 0.2 second reduction per pushback. (1.0 -> 0.98 -> 0.96 -> 0.94 -> ... -> 0.02 -> 0.02 -> ...)
        </p>
        <Heading5>By Counterspell Effects</Heading5>
        <p>
          Interruption by Counterspell Effect (<Spell id={38768}>Kick</Spell>, <Spell id={2139}>Counterspell</Spell>...)
          totally
          interrupts casting preventing spell from taking effect. Besides that it also prevent casting of any spell of
          same school for duration of interrupt. Instant spells cannot be interrupted by Counterspell Effect as they
          have
          no casting time.
        </p>

        <Heading2>Mana Regeneration</Heading2>
        <p>
          Mana (for characters that have it) is regenerated every 2 seconds (Effects that directly state interval in
          which they regenerate mana are exempt from this rule) and is represented as Mana Per 5 Seconds in character
          sheet. (calculated as mana per 2 seconds * 5/2)
        </p>

        <Heading3>Spirit Based Mana Regeneration</Heading3>
        <p>
          Rate at which Spirit Based Mana Regeneration regenerates mana is based on Intellect, Spirit and character
          level. Exact formula is:
        </p>
        <Formula>
          MP5 = 5 * (0.001 + sqrt(Int) * Spirit * BaseLevelRegeneration(0.009327 for level 70) (Round up)
        </Formula>
        <Heading4>Best Spirit and Intellect Ratio</Heading4>
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
        <Heading4>Five Second Rule</Heading4>
        <p>
          Spirit Based Mana Regeneration is interrupted for 5 seconds after player spends mana to cast a spell. (Not
          when player start casting spell) This is handled differently for Channeled Spells as mana is spend at the
          start of channeling triggering minimal amount of 5 seconds long Spirit Based Mana Regeneration interruption
          that does not end before channeling is finished. (Meaning <Warlock />'s <Spell id={27217}>Drain
          Soul</Spell> will
          interrupt Spirit Based Mana Regeneration for full 15 seconds)
        </p>

        <Heading3>MP5 bonus based Mana Regeneration</Heading3>
        <p>
          Item bonuses that directly regenerate mana ('Restores 12 mana per 5 sec' bonus) also restore mana every 2
          seconds but they are exempt from 5 second rule and continue to regenerate mana even after and during spell
          casting making them (with exceptions) more valuable than Spirit Based Mana Regeneration.
        </p>
        <Heading3>Energize effects Mana Regeneration</Heading3>
        <p>
          Energize effects like <Spell id={27142}>Blessing of Wisdom</Spell>, <Spell id={25570}>Mana Spring
          Totem</Spell> and <Spell id={33736}>Water Shield</Spell>
          are also exempt from 5 second rule and they regenerate mana in intervals written in their tooltip.
        </p>

        <Heading2>Not getting killed</Heading2>
        <p>
          Read about Threat and Aggro in our <Link to="/stats-and-mechanics/threat">Threat Mechanics Tutorial</Link>
        </p>

      </SideMenuLayout>

    </MainLayout>
  );
};

export default Healing;
