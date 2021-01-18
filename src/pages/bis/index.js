import * as React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import BISSideMenu from "../../components/menus/sideMenus/BISSideMenu";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import {Title} from "../../components/headers/headers";

const BIS = () => {
  return (
    <MainLayout pageTitle="General macros">
      <SideMenuLayout sideMenu={BISSideMenu}>
        <Title>BIS</Title>
      </SideMenuLayout>
    </MainLayout>
  );
};

export default BIS;
