import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import PveTutorialsMenu from "../../components/menus/sideMenus/PveTutorialsSideMenu";
import {Title} from "../../components/headers/headers";


const PveTutorials = () => {

  return (
    <MainLayout pageTitle="PVE tutorials">
      <SideMenuLayout sideMenu={PveTutorialsMenu}>
        <Title>PVE tutorials</Title>
      </SideMenuLayout>
    </MainLayout>
  );
};

export default PveTutorials;
