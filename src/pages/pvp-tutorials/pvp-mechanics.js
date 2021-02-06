import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import PvpTutorialsSideMenu from "../../components/menus/sideMenus/PvpTutorialsSideMenu";
import {Title, Heading2} from "../../components/headers/headers";


const PvpMechanics = () => {

  return (
    <MainLayout pageTitle="PVP Mechanics">
      <SideMenuLayout sideMenu={PvpTutorialsSideMenu}>
        <Title>PVP Mechanics</Title>
        <Heading2>Diminishing returns</Heading2>
      </SideMenuLayout>
    </MainLayout>
  );
};

export default PvpMechanics;
