import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import ProfessionsSideMenu from "../../components/menus/sideMenus/ProfessionsSideMenu";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import {Title} from "../../components/headers/headers";

const Professions = () => {
  return (
    <MainLayout pageTitle="Professions">
      <SideMenuLayout sideMenu={ProfessionsSideMenu}>
        <Title>Professions</Title>
      </SideMenuLayout>
    </MainLayout>
  );
};

export default Professions;
