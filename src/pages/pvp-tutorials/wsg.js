import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import PvpTutorialsSideMenu from "../../components/menus/sideMenus/PvpTutorialsSideMenu";
import {Title} from "../../components/headers/headers";


const WarsongGulch = () => {

  return (
    <MainLayout pageTitle="Warsong Gulch">
      <SideMenuLayout sideMenu={PvpTutorialsSideMenu}>
        <Title>Warsong Gulch</Title>
      </SideMenuLayout>
    </MainLayout>
  );
};

export default WarsongGulch;
