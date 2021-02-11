import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import BisSideMenu from "../../components/menus/sideMenus/PveBisSideMenu";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import {Heading2, Title} from "../../components/headers/headers";
import {Alliance, Horde} from "../../components/gameElements/faction/factions";
import {Priest} from "../../components/gameElements/class/classes";
import TankStatsTable from "../../components/raceStatsTables/TankStatsTable";
import SpellDpsStatsTable from "../../components/raceStatsTables/SpellDpsStatsTable";
import HealerStatsTable from "../../components/raceStatsTables/HealerStatsTable";
import MeleePhysicalDpsStatsTable from "../../components/raceStatsTables/MeleePhysicalDpsStatsTable";
import HybridPhysicalDpsStatsTable from "../../components/raceStatsTables/HybridPhysicalDpsStatsTable";
import RangedPhysicalDpsStatsTable from "../../components/raceStatsTables/RangedPhysicalDpsStatsTable";
import AllianceRaceStatsTable from "../../components/raceStatsTables/AllianceRaceStatsTable";
import HordeRaceStatsTable from "../../components/raceStatsTables/HordeRaceStatsTable";
import PriestRacialsTable from "../../components/raceStatsTables/PriestRacialsTable";

const RaceStats = () => {
  return (
    <MainLayout pageTitle="Race stats">
      <SideMenuLayout sideMenu={BisSideMenu}>
        <Title>Race stats</Title>
        <p>
          This is table of basic stats of level 70 character for every class of every race.
        </p>

        <Heading2 align="center" anchorId="alliance"><Alliance /></Heading2>
        <AllianceRaceStatsTable />

        <Heading2 align="center" anchorId="horde"><Horde /></Heading2>
        <HordeRaceStatsTable />

        <Heading2 align="center">Tank stats</Heading2>
        <TankStatsTable />

        <Heading2 align="center">Spell dps stats</Heading2>
        <SpellDpsStatsTable />

        <Heading2 align="center">Healer stats</Heading2>
        <HealerStatsTable />

        <Heading2 align="center">Melee physical dps stats</Heading2>
        <MeleePhysicalDpsStatsTable />

        <Heading2 align="center">Hybrid physical dps stats</Heading2>
        <HybridPhysicalDpsStatsTable />

        <Heading2 align="center">Ranged physical dps stats</Heading2>
        <RangedPhysicalDpsStatsTable />

        <Heading2 anchorId="priest-racials"><Priest /> Racials</Heading2>
        <PriestRacialsTable />


      </SideMenuLayout>
    </MainLayout>
  );
};

export default RaceStats;
