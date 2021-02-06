import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import PvpTutorialsSideMenu from "../../components/menus/sideMenus/PvpTutorialsSideMenu";
import {Title} from "../../components/headers/headers";


const ArathiBasin = () => {

  return (
    <MainLayout pageTitle="Arathi Basin">
      <SideMenuLayout sideMenu={PvpTutorialsSideMenu}>
        <Title>Arathi Basin</Title>
      </SideMenuLayout>
    </MainLayout>
  );
};

export default ArathiBasin;
