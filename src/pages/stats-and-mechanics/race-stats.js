import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import {Heading2, Title} from "../../components/headers/headers";
import {Alliance, Horde} from "../../components/gameElements/faction/factions";
import {Priest} from "../../components/gameElements/class/classes";
import PriestRacialsTable from "../../components/raceStatsTables/PriestRacialsTable";
import FactionRaceStatsTable from "../../components/raceStatsTables/FactionRaceStatsTable";
import ClassRaceStatsTable from "../../components/raceStatsTables/ClassRaceStatsTable";
import {
  druid,
  hunter,
  mage,
  paladin,
  priest,
  rogue,
  shaman,
  warlock,
  warrior
} from "../../data/raceStats";
import StatsAndMechanicsSideMenu from "../../components/menus/sideMenus/StatsAndMechanicsSideMenu";
import RacialsTable from "../../components/raceStatsTables/RacialsTable";

const RaceStats = () => {
  return (
    <MainLayout pageTitle="Race stats">
      <SideMenuLayout sideMenu={StatsAndMechanicsSideMenu}>
        <Title>Race stats</Title>

        <Heading2 align="center" anchorId="alliance"><Alliance /></Heading2>
        <FactionRaceStatsTable faction="alliance" />

        <Heading2 align="center" anchorId="horde"><Horde /></Heading2>
        <FactionRaceStatsTable faction="horde" />

        <Heading2 align="center">Tank stats</Heading2>
        <ClassRaceStatsTable
          raceStats={{
            druid: druid,
            paladin: paladin,
            warrior: warrior,
          }}
          displayStats={[
            "agility",
            "armor",
            "stamina",
            "health",
            "defense",
            "dodge",
            "parry",
            "block",
          ]}
          describedby="tank-stats"
        />

        <Heading2 align="center">Spell dps stats</Heading2>
        <ClassRaceStatsTable
          raceStats={{
            druid: druid,
            mage: mage,
            priest: priest,
            shaman: shaman,
            warlock: warlock,
          }}
          displayStats={[
            "intellect",
            "mana",
            "spellCrit",
            "spirit",
            "spellRegen",
          ]}
          describedby="spell-dps-stats"
        />

        <Heading2 align="center">Healer stats</Heading2>
        <ClassRaceStatsTable
          raceStats={{
            druid: druid,
            paladin: paladin,
            priest: priest,
            shaman: shaman,
          }}
          displayStats={[
            "intellect",
            "mana",
            "spellCrit",
            "spirit",
            "spellRegen",
          ]}
          describedby="healer-stats"
        />

        <Heading2 align="center">Melee physical dps stats</Heading2>
        <ClassRaceStatsTable
          raceStats={{
            rogue: rogue,
            warrior: warrior,
          }}
          displayStats={[
            "strength",
            "meleePower",
            "agility",
            "meleeCrit",
          ]}
          describedby="melee-physical-dps-stats"
        />

        <Heading2 align="center">Hybrid physical dps stats</Heading2>
        <ClassRaceStatsTable
          raceStats={{
            druid: druid,
            paladin: paladin,
            shaman: shaman,
          }}
          displayStats={[
            "strength",
            "meleePower",
            "agility",
            "meleeCrit",
            "intellect",
            "mana",
            "spellCrit",
            "spirit",
            "spellRegen",
          ]}
          describedby="hybrid-physical-dps-stats"
        />

        <Heading2 align="center">Ranged physical dps stats</Heading2>
        <ClassRaceStatsTable
          raceStats={{
            hunter: hunter,
          }}
          displayStats={[
            "agility",
            "rangedPower",
            "rangedCrit",
            "intellect",
            "mana",
            "spirit",
            "spellRegen",
          ]}
          describedby="ranged-physical-dps-stats"
        />

        <Heading2 align="center">Racials</Heading2>
        <RacialsTable />

        <Heading2 align="center" anchorId="priest-racials"><Priest /> Racials</Heading2>
        <PriestRacialsTable />


      </SideMenuLayout>
    </MainLayout>
  );
};

export default RaceStats;
