import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import ReputationsSideMenu from "../../components/menus/sideMenus/ReputationsSideMenu";
import {Title} from "../../components/headers/headers";


const Reputations = () => {

  return (
    <MainLayout pageTitle="Reputations">
      <SideMenuLayout sideMenu={ReputationsSideMenu}>
        <Title>Most efficient way to farm reputation during leveling</Title>
      </SideMenuLayout>
    </MainLayout>
  );
};

export default Reputations;
