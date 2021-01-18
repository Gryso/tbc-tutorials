import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SimpleMacro from "../../components/macro/SimpleMacro";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import MacroSideMenu from "../../components/menus/sideMenus/MacroSideMenu";
import {Title} from "../../components/headers/headers";

const Rogue = () => {

  return (
    <MainLayout>
      <SideMenuLayout sideMenu={MacroSideMenu}>
        <Title>Rogue</Title>
        <SimpleMacro
          name="OpenMacroMenu"
          description={"This is just simple button to open macro menu. If you are too lazy to write /macro"}
          text={`/macro`}
        />
      </SideMenuLayout>
    </MainLayout>
  );
};

export default Rogue;
