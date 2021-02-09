import React from "react";
import MainLayout from "../../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../../components/layouts/sideMenuLayout/SideMenuLayout";
import {Heading2, Heading3, Title} from "../../../components/headers/headers";
import BisSideMenu from "../../../components/menus/sideMenus/PveBisSideMenu";
import EquipmentSet from "../../../components/equipment/equipSet/EquipmentSet";
import Item from "../../../components/gameElements/item/Item";
import EquipmentList from "../../../components/equipment/equipmentList/EquipmentList";
import StatsList from "../../../components/statsLIst/StatsList";

const FeralDps = () => {
  return (
    <MainLayout pageTitle="General macros">
      <SideMenuLayout sideMenu={BisSideMenu}>
        <Title>Feral BIS</Title>
        <Heading2 anchorId="t4t5-bis">T4 / T5</Heading2>
        <EquipmentSet equipment={{
          head: <Item id="8345" quality="rare">Wolfshead Helm</Item>,
          neck: <Item id="28745">Mithril Chain of Heroism</Item>,
          shoulder: <Item id="30055">Shoulderpads of the Stranger</Item>,
          back: <Item id="28672">Drape of the Dark Reavers</Item>,
          chest: <Item id="29096">Breastplate of Malorne</Item>,
          wrists: <Item id="29966">Vambraces of Ending</Item>,
          hands: <Item id="29097">Gauntlets of Malorne</Item>,
          waist: <Item id="30106">Belt of One-Hundred Deaths</Item>,
          legs: <Item id="28741">Skulker's Greaves</Item>,
          feet: <Item id="28545">Edgewalker Longboots</Item>,
          finger1: <Item id="30052">Ring of Lethality</Item>,
          finger2: <Item id="28649">Garona's Signet Ring</Item>,
          trinket1: <Item id="30627">Tsunami Talisman</Item>,
          trinket2: <Item id="28830">Dragonspine Trophy</Item>,
          mainhand: <Item id="28658">Terestian's Stranglestaff</Item>,
          relic: <Item id="29390">Everbloom Idol</Item>,
        }}
        />
        <Heading3 anchorId="t4t5-stats">Stats</Heading3>
        <StatsList listOfStats={[
          {description: "Ap", value: "3067 +-"},
          {description: "Hit", value: "143"},
          {description: "Crit", value: "38.35% +-"},
          {description: "Expertise", value: "13"}
        ]}
        />
        <Heading3 anchorId="t4t5-alternatives">Alternatives</Heading3>
        <EquipmentList listOfEquipmentSlots={[
          {
            type: "Wrists",
            items: [<Item id="29246">Nightfall Wristguards</Item>,]
          },
          {
            type: "Finger",
            items: [<Item id="30061">Ancestral Ring of Conquest</Item>]
          },
          {
            type: "Trinket",
            items: [
              <Item id="28034" quality="rare">Hourglass of the Unraveller</Item>,
              <Item id="28579">Romulo's Poison Vial</Item>
            ]
          }
        ]}
        />

        <Heading2>Hyjal Summit</Heading2>
        <EquipmentSet equipment={{
          head: <Item id="8345" quality="rare">Wolfshead Helm</Item>,
          neck: <Item id="29381">Choker of Vile Intent</Item>,
          shoulder: <Item id="30055">Shoulderpads of the Stranger</Item>,
          back: <Item id="28672">Drape of the Dark Reavers</Item>,
          chest: <Item id="29096">Breastplate of Malorne</Item>,
          wrists: <Item id="29966">Vambraces of Ending</Item>,
          hands: <Item id="29097">Gauntlets of Malorne</Item>,
          waist: <Item id="30106">Belt of One-Hundred Deaths</Item>,
          legs: <Item id="28741">Skulker's Greaves</Item>,
          feet: <Item id="28545">Edgewalker Longboots</Item>,
          finger1: <Item id="30052">Ring of Lethality</Item>,
          finger2: <Item id="29301">Band of the Eternal Champion</Item>,
          trinket1: <Item id="30627">Tsunami Talisman</Item>,
          trinket2: <Item id="28830">Dragonspine Trophy</Item>,
          mainhand: <Item id="30883">Pillar of Ferocity</Item>,
          relic: <Item id="29390">Everbloom Idol</Item>,
        }}
        />
        <Heading3 anchorId="hyjal-summit-stats">Stats</Heading3>
        <StatsList listOfStats={[
          {description: "Ap", value: "3269 +-"},
          {description: "Hit", value: "125 (Use Hit food if there is no balance druid)"},
          {description: "Crit", value: "37,23% +-"},
          {description: "Expertise", value: "13"}
        ]}
        />
        <Heading3 anchorId="hyjal-summit-alternatives">Alternatives</Heading3>
        <EquipmentList listOfEquipmentSlots={[
            {
              type: "Legs",
              items: [<Item id="30898">Shady Dealer's Pantaloons</Item>]
            },
            {
              type: "Trinket",
              items: [<Item id="32654" quality="rare">Crystalforged Trinket</Item>]
            }
          ]}
        />

        <Heading2>Black Temple</Heading2>
        <EquipmentSet equipment={{
          head: <Item id="8345" quality="rare">Wolfshead Helm</Item>,
          neck: <Item id="32591">Choker of Serrated Blades</Item>,
          shoulder: <Item id="29100">Mantle of Malorne</Item>,
          back: <Item id="28672">Drape of the Dark Reavers</Item>,
          chest: <Item id="31042">Thunderheart Chestguard</Item>,
          wrists: <Item id="32324">Insidious Bands</Item>,
          hands: <Item id="29097">Gauntlets of Malorne</Item>,
          waist: <Item id="30106">Belt of One-Hundred Deaths</Item>,
          legs: <Item id="30898">Shady Dealer's Pantaloons</Item>,
          feet: <Item id="28545">Edgewalker Longboots</Item>,
          finger1: <Item id="30052">Ring of Lethality</Item>,
          finger2: <Item id="29301">Band of the Eternal Champion</Item>,
          trinket1: <Item id="32505">Madness of the Betrayer</Item>,
          trinket2: <Item id="28830">Dragonspine Trophy</Item>,
          mainhand: <Item id="30883">Pillar of Ferocity</Item>,
          relic: <Item id="29390">Everbloom Idol</Item>,
        }}
        />
        <Heading3 anchorId="hyjal-summit-stats">Stats</Heading3>
        <StatsList listOfStats={[
          {description: "Ap", value: "3445 +-"},
          {description: "Hit", value: "122 (Use Hit food if there is no balance druid)"},
          {description: "Crit", value: "33.26% +-"},
          {description: "Expertise", value: "11"},
          {description: "Armor penetration", value: "350"}
        ]}
        />

        <Heading2 anchorId="zulaman">Zul'Aman</Heading2>
        <EquipmentSet equipment={{
          head: <Item id="8345" quality="rare">Wolfshead Helm</Item>,
          neck: <Item id="32591">Choker of Serrated Blades</Item>,
          shoulder: <Item id="29100">Mantle of Malorne</Item>,
          back: <Item id="28672">Drape of the Dark Reavers</Item>,
          chest: <Item id="31042">Thunderheart Chestguard</Item>,
          wrists: <Item id="32324">Insidious Bands</Item>,
          hands: <Item id="29097">Gauntlets of Malorne</Item>,
          waist: <Item id="30106">Belt of One-Hundred Deaths</Item>,
          legs: <Item id="30898">Shady Dealer's Pantaloons</Item>,
          feet: <Item id="33222">Nyn'jah's Tabi Boots</Item>,
          finger1: <Item id="33496">Signet of Primal Wrath</Item>,
          finger2: <Item id="29301">Band of the Eternal Champion</Item>,
          trinket1: <Item id="32505">Madness of the Betrayer</Item>,
          trinket2: <Item id="28830">Dragonspine Trophy</Item>,
          mainhand: <Item id="33465">Staff of Primal Fury</Item>,
          relic: <Item id="29390">Everbloom Idol</Item>,
        }}
        />
        <Heading3 anchorId="zulaman-stats">Stats</Heading3>
        <StatsList listOfStats={[
          {description: "Ap", value: "3388 +-"},
          {description: "Hit", value: "123 (Use Hit food if there is no balance druid)"},
          {description: "Crit", value: "35.58% +-"},
          {description: "Expertise", value: "6"},
          {description: "Armor penetration", value: "791"}
        ]}
        />

      </SideMenuLayout>
    </MainLayout>
  );
};

export default FeralDps;
