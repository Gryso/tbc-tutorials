import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import PveTutorialsMenu from "../../components/menus/sideMenus/PveTutorialsSideMenu";
import {Title} from "../../components/headers/headers";


const RaidComposition = () => {

  return (
    <MainLayout pageTitle="Raid Composition">
      <SideMenuLayout sideMenu={PveTutorialsMenu}>
        <Title>Raid Composition</Title>

      </SideMenuLayout>

    </MainLayout>
  );
};

export default RaidComposition;
