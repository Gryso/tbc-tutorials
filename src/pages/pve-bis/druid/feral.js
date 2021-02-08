import React from "react";
import MainLayout from "../../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../../components/layouts/sideMenuLayout/SideMenuLayout";
import {Heading2, Title} from "../../../components/headers/headers";
import BisSideMenu from "../../../components/menus/sideMenus/PveBisSideMenu";
import EquipmentSet from "../../../components/equipSet/EquipmentSet";
import Item from "../../../components/gameElements/item/Item";

const Feral = () => {
  return (
    <MainLayout pageTitle="General macros">
      <SideMenuLayout sideMenu={BisSideMenu}>
        <Title>Feral BIS</Title>
        <Heading2 align="center">T4</Heading2>
        <EquipmentSet
          equipment={{
            head: <Item id={8345}>Wolfshead Helm</Item>,
            neck: <Item id={28745}>Mithril Chain of Heroism</Item>,
            shoulder: <Item id={30055}>Shoulderpads of the Stranger</Item>,
            back: <Item id={28672}>Drape of the Dark Reavers</Item>,
            chest: <Item id={29096}>Breastplate of Malorne</Item>,
            // shirt: <Item id={14555}>Alcor's Sunrazor</Item>,
            // tabard: <Item id={14555}>Alcor's Sunrazor</Item>,
            wrists: <Item id={29966}>Vambraces of Ending</Item>,
            hands: <Item id={29097}>Gauntlets of Malorne</Item>,
            waist: <Item id={30106}>Belt of One-Hundred Deaths</Item>,
            legs: <Item id={28741}>Skulker's Greaves</Item>,
            feet: <Item id={28545}>Edgewalker Longboots</Item>,
            finger1: <Item id={30052}>Ring of Lethality</Item>,
            finger2: <Item id={28649}>Garona's Signet Ring</Item>,
            trinket1: <Item id={30627}>Tsunami Talisman</Item>,
            trinket2: <Item id={28830}>Dragonspine Trophy</Item>,
            mainhand: <Item id={28658}>Terestian's Stranglestaff</Item>,
            // secondaryhand: <Item id={14555}>Sunrazor</Item>,
            // ranged: <Item id={14555}>Sunrazor</Item>,
            relic: <Item id={29390}>Everbloom Idol</Item>,
            // ammo: <Item id={8345}>Wolfshead Helm</Item>,
          }}
        />
      </SideMenuLayout>
    </MainLayout>
  );
};

export default Feral;
