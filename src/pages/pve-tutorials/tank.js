import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import PveTutorialsMenu from "../../components/menus/sideMenus/PveTutorialsSideMenu";
import {Title, Heading2, Heading3} from "../../components/headers/headers";


const Tank = () => {

  return (
    <MainLayout pageTitle="Tank mechanics">
      <SideMenuLayout sideMenu={PveTutorialsMenu}>
        <Title>Tank mechanics</Title>
          <Heading2>Getting hit</Heading2>
            <Heading3>Critical strike</Heading3>
              <p>Critical strike is successfully hit that deals 200% damage of normal hit. Boss (lvl 73) does have 5.6% chance to hit you with critical strike</p>
            <Heading3>Crushing blow</Heading3>
              <p>Crushing blow is successfully hit that deals 150% damage of normal hit. Boss (lvl 73) does have 15% chance to hit you with critical strike</p>
            <Heading3>Hit</Heading3>
              <p>Hit is basic successfully hit that deals 100% damage.</p>
            <Heading3>Miss</Heading3>
              <p>Miss is unsuccessfully hit that deals no damage.</p>
            <Heading3>Dodge</Heading3>
              <p>
                Dodge is hit completely avoided by player resulting in miss.
                You can only dodge attacks from the front and cannot dodge ranged physical attacks.

              </p>
            <Heading3>Parry</Heading3>
              <p>Parry is hit completely avoided by player resulting in miss. You cannot parry ranged physical attacks</p>
            <Heading3>Block</Heading3>
              <p>Block is hit avoided by player resulting in miss</p>
            <Heading3>Armor</Heading3>
            <Heading3>Resistances</Heading3>
        Miss -> Dodge -> Parry -> Block -> Crushing Blow -> Critical Strikes -> Hit
          <Heading2>Hitting</Heading2>

      </SideMenuLayout>

    </MainLayout>
  );
};

export default Tank;
