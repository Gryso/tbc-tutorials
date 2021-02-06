import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import PveTutorialsMenu from "../../components/menus/sideMenus/PveTutorialsSideMenu";
import {Title} from "../../components/headers/headers";


const Physical = () => {

  return (
    <MainLayout pageTitle="Physical DPS mechanics">
      <SideMenuLayout sideMenu={PveTutorialsMenu}>
        <Title>Physical DPS mechanics</Title>

      </SideMenuLayout>

    </MainLayout>
  );
};

export default Physical;
