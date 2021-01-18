import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SimpleMacro from "../../components/macro/SimpleMacro";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import MacroSideMenu from "../../components/menus/sideMenus/MacroSideMenu";
import {Heading2, Heading3, Heading4, Title} from "../../components/headers/headers";


const Macros = () => {

  return (
    <MainLayout pageTitle="General macros">
      <SideMenuLayout sideMenu={MacroSideMenu}>
        <Title>General macros</Title>
        <Heading2>TestHeading2-1</Heading2>
        <Heading2>TestHeading2-2</Heading2>
        <Heading2>TestHeading2-3</Heading2>
        <Heading3>TestHeading3-1</Heading3>
        <Heading3>TestHeading3-2</Heading3>
        <Heading3>TestHeading3-3</Heading3>
        <Heading4>TestHeading4</Heading4>
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
          description={"Simple focus. Focuses target if target exist of mouseover player if it does not"}
          text={`/focus [target=target, exists]; mouseover`}
        />
        <div
          style={{
            width: "100%",
            height: "700px"
          }}
        >*
        </div>
        <Heading3>Test</Heading3>
        <SimpleMacro
          name="TankFocus"
          description={"Same as focus macro with addition of X target icon added to focus target."}
          text={`/focus [target=target, exists]; mouseover
/script SetRaidTargetIcon("focus", 7)`}
        />
      </SideMenuLayout>

    </MainLayout>
  );
};

export default Macros;
