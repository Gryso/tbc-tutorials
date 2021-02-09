import React from "react";
import MainLayout from "../../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../../components/layouts/sideMenuLayout/SideMenuLayout";
import {Heading2, Heading3, Title} from "../../../components/headers/headers";
import BisSideMenu from "../../../components/menus/sideMenus/PveBisSideMenu";
import EquipmentSet from "../../../components/equipment/equipSet/EquipmentSet";
import Item from "../../../components/gameElements/item/Item";
import EquipmentList from "../../../components/equipment/equipmentList/EquipmentList";
import StatsList from "../../../components/statsLIst/StatsList";

const FeralTank = () => {
  return (
    <MainLayout pageTitle="General macros">
      <SideMenuLayout sideMenu={BisSideMenu}>
        <Title>Feral Tank BIS</Title>

      </SideMenuLayout>
    </MainLayout>
  );
};

export default FeralTank;
