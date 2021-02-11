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
    <MainLayout pageTitle="Feral Tank BIS">
      <SideMenuLayout sideMenu={BisSideMenu}>
        <Title>Feral Tank BIS</Title>

        <Heading2 anchorId="t4t5-bis">Pre Raid</Heading2>
        <EquipmentSet equipment={{
          head: <Item id="28206" quality="rare">Cowl of the Guiltless</Item>,
          neck: <Item id="29336" quality="rare">Mark of the Ravenguard</Item>,
          shoulder: <Item id="27797" quality="rare">Wastewalker Shoulderpads</Item>,
          back: <Item id="28256" quality="rare">Thoriumweave Cloak</Item>,
          chest: <Item id="25689" quality="rare">Heavy Clefthoof Vest</Item>,
          wrists: <Item id="29263">Forestheart Bracers</Item>,
          hands: <Item id="27531" quality="rare">Wastewalker Gloves</Item>,
          waist: <Item id="25609" quality="rare">Burning Blade Devotee's Cinch</Item>,
          legs: <Item id="30535">Forestwalker Kilt</Item>,
          feet: <Item id="30707" quality="rare">Nimble-foot Treads</Item>,
          finger1: <Item id="30834">Shapeshifter's Signet</Item>,
          finger2: <Item id="30006" quality="uncommon">Wind Trader's Band</Item>,
          trinket1: <Item id="32658" quality="rare">Badge of Tenacity</Item>,
          trinket2: <Item id="27770" quality="rare">Argussian Compass</Item>,
          mainhand: <Item id="29171">Earthwarden</Item>,
          relic: <Item id="27744" quality="rare">Idol of Ursoc</Item>,
        }} />
        <Heading3 anchorId="t4t5-alternatives">Alternatives</Heading3>
        <EquipmentList listOfEquipmentSlots={[
          {
            type: "Legs",
            items: [<Item id="25690" quality="rare">Heavy Clefthoof Leggings</Item>]
          },
          {
            type: "Feet",
            items: [<Item id="25691" quality="rare">Heavy Clefthoof Boots</Item>]
          },
          {
            type: "Relic",
            items: [
              <Item id="23198" quality="rare">Idol of Brutality</Item>,
              <Item id="28064" quality="uncommon">Idol of the Wild</Item>
            ]
          }
        ]} />

        <Heading2 anchorId="t4t5-bis">T4 / T5</Heading2>
        <EquipmentSet equipment={{
          head: <Item id="30228">Nordrassil Headdress</Item>,
          neck: <Item id="30099">Frayed Tether of the Drowned</Item>,
          shoulder: <Item id="30230">Nordrassil Feral-Mantle</Item>,
          back: <Item id="28660">Gilded Thorium Cloak</Item>,
          chest: <Item id="30222">Nordrassil Chestplate</Item>,
          wrists: <Item id="28445">General's Dragonhide Bracers</Item>,
          hands: <Item id="30223">Nordrassil Handgrips</Item>,
          waist: <Item id="30106">Belt of One-Hundred Deaths</Item>,
          legs: <Item id="30229">Nordrassil Feral-Kilt</Item>,
          feet: <Item id="30041">Boots of Natural Grace</Item>,
          finger1: <Item id="29279">Violet Signet of the Great Protector</Item>,
          finger2: <Item id="30083">Ring of Sundered Souls</Item>,
          trinket1: <Item id="31859">Darkmoon Card: Madness</Item>,
          trinket2: <Item id="31858">Darkmoon Card: Vengeance</Item>,
          mainhand: <Item id="28658">Terestian's Stranglestaff</Item>,
          relic: <Item id="27744" quality="rare">Idol of Ursoc</Item>,
        }} />

        <Heading3 anchorId="t4t5-alternatives">Alternatives</Heading3>
        <EquipmentList listOfEquipmentSlots={[
          {
            type: "Neck",
            items: [
              <Item id="29386">Necklace of the Juggernaut</Item>
            ]
          },
          {
            type: "Back",
            items: [
              <Item id="29925">Phoenix-Wing Cloak</Item>
            ]
          },
          {
            type: "Waist",
            items: [
              <Item id="30042">Belt of Natural Power</Item>
            ]
          },
          {
            type: "Feet",
            items: [
              <Item id="30674">Zierhut's Lost Treads</Item>
            ]
          },
          {
            type: "Finger",
            items: [
              <Item id="33055">Band of Vile Aggression</Item>,
              <Item id="30834">Shapeshifter's Signet</Item>
            ]
          },
          {
            type: "Trinket",
            items: [
              <Item id="30620">Spyglass of the Hidden Fleet</Item>,
              <Item id="28528">Moroes' Lucky Pocket Watch</Item>
            ]
          },
          {
            type: "Mainhand",
            items: [
              <Item id="30021">Wildfury Greatstaff</Item>,
            ]
          },
          {
            type: "Relic",
            items: [
              <Item id="23198" quality="rare">Idol of Brutality</Item>,
              <Item id="28064" quality="uncommon">Idol of the Wild</Item>
            ]
          }
        ]} />

        <Heading2>Hyjal Summit</Heading2>
        <EquipmentSet equipment={{
          head: <Item id="31039">Thunderheart Cover</Item>,
          neck: <Item id="30099">Frayed Tether of the Drowned</Item>,
          shoulder: <Item id="31971">Merciless Gladiator's Dragonhide Spaulders</Item>,
          back: <Item id="34010">Pepe's Shroud of Pacification</Item>,
          chest: <Item id="30222">Nordrassil Chestplate</Item>,
          wrists: <Item id="32810">Veteran's Dragonhide Bracers</Item>,
          hands: <Item id="31034">Thunderheart Gauntlets</Item>,
          waist: <Item id="30106">Belt of One-Hundred Deaths</Item>,
          legs: <Item id="30229">Nordrassil Feral-Kilt</Item>,
          feet: <Item id="30041">Boots of Natural Grace</Item>,
          finger1: <Item id="29279">Violet Signet of the Great Protector</Item>,
          finger2: <Item id="30083">Ring of Sundered Souls</Item>,
          trinket1: <Item id="31859">Darkmoon Card: Madness</Item>,
          trinket2: <Item id="31858">Darkmoon Card: Vengeance</Item>,
          mainhand: <Item id="30883">Pillar of Ferocity</Item>,
          relic: <Item id="27744" quality="rare">Idol of Ursoc</Item>,
        }} />
        <Heading3 anchorId="hyjal-summit-alternatives">Alternatives</Heading3>
        <EquipmentList listOfEquipmentSlots={[
          {
            type: "Shoulder",
            items: [<Item id="30230">Nordrassil Feral-Mantle</Item>]
          },
          {
            type: "Trinket",
            items: [<Item id="32654" quality="rare">Crystalforged Trinket</Item>]
          },
          {
            type: "Relic",
            items: [
              <Item id="23198" quality="rare">Idol of Brutality</Item>,
              <Item id="28064" quality="uncommon">Idol of the Wild</Item>
            ]
          }

        ]} />

        <Heading2>Black Temple</Heading2>
        <EquipmentSet equipment={{
          head: <Item id="31039">Thunderheart Cover</Item>,
          neck: <Item id="32362">Pendant of Titans</Item>,
          shoulder: <Item id="31048">Thunderheart Pauldrons</Item>,
          back: <Item id="34010">Pepe's Shroud of Pacification</Item>,
          chest: <Item id="31042">Thunderheart Chestguard</Item>,
          wrists: <Item id="32810">Veteran's Dragonhide Bracers</Item>,
          hands: <Item id="31034">Thunderheart Gauntlets</Item>,
          waist: <Item id="30106">Belt of One-Hundred Deaths</Item>,
          legs: <Item id="31044">Thunderheart Leggings</Item>,
          feet: <Item id="32593">Treads of the Den Mother</Item>,
          finger1: <Item id="29279">Violet Signet of the Great Protector</Item>,
          finger2: <Item id="32261">Band of the Abyssal Lord</Item>,
          trinket1: <Item id="32501">Shadowmoon Insignia</Item>,
          trinket2: <Item id="31858">Darkmoon Card: Vengeance</Item>,
          mainhand: <Item id="30883">Pillar of Ferocity</Item>,
          relic: <Item id="32257">Idol of the White Stag</Item>,
        }} />
        <EquipmentList listOfEquipmentSlots={[
          {
            type: "Relic",
            items: [
              <Item id="27744" quality="rare">Idol of Ursoc</Item>,
              <Item id="23198" quality="rare">Idol of Brutality</Item>,
              <Item id="28064" quality="uncommon">Idol of the Wild</Item>
            ]
          }
        ]} />

        <Heading2 anchorId="zulaman">Zul'Aman</Heading2>
        <EquipmentSet equipment={{
          head: <Item id="31039">Thunderheart Cover</Item>,
          neck: <Item id="32362">Pendant of Titans</Item>,
          shoulder: <Item id="30230">Nordrassil Feral-Mantle</Item>,
          back: <Item id="34010">Pepe's Shroud of Pacification</Item>,
          chest: <Item id="30222">Nordrassil Chestplate</Item>,
          wrists: <Item id="33881">Vindicator's Dragonhide Bracers</Item>,
          hands: <Item id="31034">Thunderheart Gauntlets</Item>,
          waist: <Item id="30106">Belt of One-Hundred Deaths</Item>,
          legs: <Item id="30229">Nordrassil Feral-Kilt</Item>,
          feet: <Item id="32593">Treads of the Den Mother</Item>,
          finger1: <Item id="33500">Signet of Eternal Life</Item>,
          finger2: <Item id="29301">Band of the Eternal Champion</Item>,
          trinket1: <Item id="32501">Shadowmoon Insignia</Item>,
          trinket2: <Item id="31858">Darkmoon Card: Vengeance</Item>,
          mainhand: <Item id="30883">Pillar of Ferocity</Item>,
          relic: <Item id="33509">Idol of Terror</Item>,
        }} />
        <EquipmentList listOfEquipmentSlots={[
          {
            type: "Relic",
            items: [
              <Item id="32257">Idol of the White Stag</Item>,
              <Item id="27744" quality="rare">Idol of Ursoc</Item>,
              <Item id="23198" quality="rare">Idol of Brutality</Item>,
              <Item id="28064" quality="uncommon">Idol of the Wild</Item>
            ]
          }
        ]} />
      </SideMenuLayout>
    </MainLayout>
  );
};

export default FeralTank;
