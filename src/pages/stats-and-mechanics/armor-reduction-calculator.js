import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import {Title} from "../../components/headers/headers";
import StatsAndMechanicsSideMenu from "../../components/menus/sideMenus/StatsAndMechanicsSideMenu";
import ArmorReductionCalculator from "../../components/armorReductionCalculator/ArmorReductionCalculator";

const AttackTables = () => {
  return (
    <MainLayout pageTitle="Armor Reduction Calculator">
      <SideMenuLayout sideMenu={StatsAndMechanicsSideMenu}>
        <Title>Armor Reduction Calculator</Title>
        <ArmorReductionCalculator />
      </SideMenuLayout>
    </MainLayout>
  );
};

export default AttackTables;
