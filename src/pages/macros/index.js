import React from "react";
import MainLayout from "../../components/MainLayout";
import SimpleMacro from "../../components/SimpleMacro";

const code = `const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`;

const Macros = (props) => {

  return (
    <MainLayout>
      Macros
      <SimpleMacro
        name="OpenMacroMenu"
        description={"This is just simple button to open macro menu. If you are too lazy to write /macro"}
        text={`/macro`}
      />
      <SimpleMacro
        name="SellJunk"
        description={"This will sell all grey items to vendor you are currently talking to."}
        text={`/script for bag = 0, 4 do for slot = 1, GetContainerNumSlots(bag) do local name = GetContainerItemLink(bag,slot) if name and string.find(name,\"ff9d9d9d\") then DEFAULT_CHAT_FRAME:AddMessage(\"Selling \"..name) UseContainerItem(bag,slot) end end end`}
      />
      <SimpleMacro
        name="Focus"
        description={"Simple focus. Focuses target if target exist of mouseover player if it does not"}
        text={`/focus [target=target, exists]; mouseover`}
      />
      <SimpleMacro
        name="TankFocus"
        description={"Same as focus macro with addition of X target icon added to focus target."}
        text={`/focus [target=target, exists]; mouseover
/script SetRaidTargetIcon("focus", 7)`}
      />

    </MainLayout>
  );
};

export default Macros;
