import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import PvpTutorialsSideMenu from "../../components/menus/sideMenus/PvpTutorialsSideMenu";
import {Title} from "../../components/headers/headers";


const AlteracValley = () => {

  return (
    <MainLayout pageTitle="Alterac Valley">
      <SideMenuLayout sideMenu={PvpTutorialsSideMenu}>
        <Title>Alterac Valley</Title>
      </SideMenuLayout>
    </MainLayout>
  );
};

export default AlteracValley;
