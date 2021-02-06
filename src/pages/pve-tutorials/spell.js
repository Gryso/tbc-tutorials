import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import PveTutorialsMenu from "../../components/menus/sideMenus/PveTutorialsSideMenu";
import {Title} from "../../components/headers/headers";


const Spell = () => {

  return (
    <MainLayout pageTitle="Spell DPS mechanics">
      <SideMenuLayout sideMenu={PveTutorialsMenu}>
        <Title>Spell DPS mechanics</Title>

      </SideMenuLayout>

    </MainLayout>
  );
};

export default Spell;
