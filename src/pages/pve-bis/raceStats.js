import * as React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import BisSideMenu from "../../components/menus/sideMenus/PveBisSideMenu";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import {Title} from "../../components/headers/headers";
import RaceStatsTable from "../../components/raceStatsTable/RaceStatsTable";

const RaceStats = () => {
  return (
    <MainLayout pageTitle="Race stats">
      <SideMenuLayout sideMenu={BisSideMenu}>
        <Title id="raceStatsTitle">Race stats</Title>
        <RaceStatsTable />
      </SideMenuLayout>
    </MainLayout>
  );
};

export default RaceStats;
