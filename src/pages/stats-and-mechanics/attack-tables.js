import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import {Heading2, Title} from "../../components/headers/headers";
import StatsAndMechanicsSideMenu from "../../components/menus/sideMenus/StatsAndMechanicsSideMenu";
import AttackTable from "../../components/attackTable/AttackTable";

const AttackTables = () => {
  return (
    <MainLayout pageTitle="AttackTables">
      <SideMenuLayout sideMenu={StatsAndMechanicsSideMenu}>
        <Title>Attack Tables</Title>
        <Heading2>Player Attacking Boss (frontal)</Heading2>
        <AttackTable />
        <Heading2>Player Attacking Boss (rear)</Heading2>
        <Heading2>Player Attacking Boss (spell)</Heading2>
        <Heading2>Boss Attacking player</Heading2>
        <Heading2>Player Healing</Heading2>
      </SideMenuLayout>
    </MainLayout>
  );
};

export default AttackTables;
