import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SimpleMacro from "../../components/macro/SimpleMacro";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import MacroSideMenu from "../../components/menus/sideMenus/MacroSideMenu";
import {Title} from "../../components/headers/headers";


const Macros = () => {

  return (
    <MainLayout pageTitle="General macros">
      <SideMenuLayout sideMenu={MacroSideMenu}>
        <Title>General macros</Title>
        <SimpleMacro
          name="OpenMacroMenu"
          description={"This is just simple button to open macro menu. If you are too lazy to write /macro"}
          text={`/macro`}
        />
        <SimpleMacro
          name="SellJunk"
          description={"This will sell all grey items to vendor you are currently talking to."}
          text={`/script for bag = 0, 4 do for slot = 1, GetContainerNumSlots(bag) do local name = GetContainerItemLink(bag,slot) if name and string.find(name,"ff9d9d9d") then DEFAULT_CHAT_FRAME:AddMessage("Selling "..name) UseContainerItem(bag,slot) end end end`}
        />
        <SimpleMacro
          name="Focus"
          description={"Simple focus. Focuses target if target exist or mouseover player if it does not"}
          text={`/focus [target=target, exists]; mouseover`}
        />
        <SimpleMacro
          name="TankFocus"
          description={"Same as focus macro with addition of X target icon added to focus target. This is helpful to tank for marking."}
          text={`/focus [target=target, exists]; mouseover
/script SetRaidTargetIcon("focus", 7)`}
        />
      </SideMenuLayout>

    </MainLayout>
  );
};

export default Macros;
