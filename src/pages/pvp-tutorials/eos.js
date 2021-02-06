import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import PvpTutorialsSideMenu from "../../components/menus/sideMenus/PvpTutorialsSideMenu";
import {Title} from "../../components/headers/headers";


const EyeOfTheStorm = () => {

  return (
    <MainLayout pageTitle="Eye of the Storm">
      <SideMenuLayout sideMenu={PvpTutorialsSideMenu}>
        <Title>Eye of the Storm</Title>
      </SideMenuLayout>
    </MainLayout>
  );
};

export default EyeOfTheStorm;
