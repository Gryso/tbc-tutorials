import React from "react";
import MainLayout from "../../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../../components/layouts/sideMenuLayout/SideMenuLayout";
import {Title} from "../../../components/headers/headers";
import ProfessionsSideMenu from "../../../components/menus/sideMenus/ProfessionsSideMenu";

const Tailoring = () => {
  return (
    <MainLayout pageTitle="Professions">
      <SideMenuLayout sideMenu={ProfessionsSideMenu}>
        <Title>Professions</Title>
      </SideMenuLayout>
    </MainLayout>
  );
};

export default Tailoring;
