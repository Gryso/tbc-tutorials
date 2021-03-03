import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import {Title} from "../../components/headers/headers";
import StatsAndMechanicsSideMenu from "../../components/menus/sideMenus/StatsAndMechanicsSideMenu";


const StatsAndMechanics = () => {

  return (
    <MainLayout pageTitle="Stats And Mechanics">
      <SideMenuLayout sideMenu={StatsAndMechanicsSideMenu}>
        <Title>Stats And Mechanics</Title>
      </SideMenuLayout>
    </MainLayout>
  );
};

export default StatsAndMechanics;
