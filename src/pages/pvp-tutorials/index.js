import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import PvpTutorialsSideMenu from "../../components/menus/sideMenus/PvpTutorialsSideMenu";
import {Title} from "../../components/headers/headers";


const PvpTutorials = () => {

  return (
    <MainLayout pageTitle="PVP tutorials">
      <SideMenuLayout sideMenu={PvpTutorialsSideMenu}>
        <Title>PVP tutorials</Title>
      </SideMenuLayout>
    </MainLayout>
  );
};

export default PvpTutorials;
