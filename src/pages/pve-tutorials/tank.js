import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import PveTutorialsMenu from "../../components/menus/sideMenus/PveTutorialsSideMenu";
import {Title, Heading2, Heading3, Heading4} from "../../components/headers/headers";
import {Druid, Hunter, Paladin, Rogue, Shaman, Warrior} from "../../components/gameElements/class/classes";
import Spell from "../../components/gameElements/spell/Spell";
import AttackTable from "../../components/attackTable/AttackTable";
import ClassAndRacePicker from "../../components/attackTable/ClassAndRacePicker";
import Talent from "../../components/gameElements/talent/Talent";
import {FeralCombat} from "../../components/gameElements/talentSpecialisation/TalentSpecialisations";


const Tank = () => {

  return (
    <MainLayout pageTitle="Tank mechanics">
      <SideMenuLayout sideMenu={PveTutorialsMenu}>
        <Title>Tank mechanics</Title>

        <AttackTable
        />

          <Heading2>Getting hit by the boss</Heading2>
            <Heading3>Successful attacks</Heading3>
              <Heading4>Critical strike</Heading4>
                <p>
                  Critical strike is successfully hit that deals 200% damage of normal hit.
                  Boss (lvl 73) does have 5.6% chance to hit you with critical strike.
                  As 200% damage is quite devastating this is first problem that tank has to solve.
                  There are two ways to decreas change to be critically hit:
                  1. Defense
                  2. Resilience rating: One point of resilience rating decreases chance to be critically hit by 0.0254.
                  That means you need 221 resilience to be fully uncritable. Any single point in resilience rating after
                  this point is wasted as it provides no value from this point. Resilience rating is especially advantageous
                  for <FeralCombat/> <Druid/> because resilience rating decrease chance to be critically hit much faster
                  than defence rating and <Druid/> does not benefit from parry and block chance bonus of defence rating
                </p>
              <Heading4>Crushing blow</Heading4>
                <p>
                  Crushing blow is successfully hit that deals 150% damage of normal hit.
                  Boss (lvl 73) does have 15% chance to hit you with crushing blow.
                </p>
              <Heading4>Hit</Heading4>
              <p>Hit is basic successfully hit that deals 100% damage.</p>

            <Heading3>Avoided attacks</Heading3>
              <Heading4>Miss</Heading4>
                <p>Miss is unsuccessfully hit that deals no damage.</p>
              <Heading4>Dodge</Heading4>
                <p>
                  Parry is hit completely avoided by player resulting in miss.
                  You can dodge only frontal melee attacks.
                </p>
              <Heading4>Parry</Heading4>
                <p>
                  Parry is hit completely avoided by player resulting in miss.
                  You can parry only frontal melee attacks.
                  Only <Paladin />, <Warrior/>, <Rogue/>, <Hunter /> and <Shaman/> with <Talent id="16268">Spirit Weapons</Talent> talent can parry an attack.
                </p>

            <Heading3>Mitigated attacks</Heading3>
              <Heading4>Block</Heading4>
              <p>Block is hit partially avoided by player resulting in miss</p>
              <Heading4>Armor</Heading4>
              <Heading4>Resistances</Heading4>
        Miss -> Dodge -> Parry -> Block -> Crushing Blow -> Critical Strikes -> Hit



          <Heading2>Hitting</Heading2>
        <div
          style={{
            height: "1500px"
          }}
        >loooooong div</div>


      </SideMenuLayout>

    </MainLayout>
  );
};

export default Tank;
