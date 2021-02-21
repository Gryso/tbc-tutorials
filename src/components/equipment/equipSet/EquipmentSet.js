import React from "react";
import "./equipmentSet.scss";
import Icon from "../../gameElements/icon/Icon";
import Spell from "../../gameElements/spell/Spell";
import Item from "../../gameElements/item/Item";
import ItemUpgrades from "../itemUpgrades/ItemUpgrades";
import SideMenuLayout from "../../layouts/sideMenuLayout/SideMenuLayout";

// const equipmentExample = {
//   head:          <Item id="id">ItemName</Item>,
//   neck:          <Item id="id">ItemName</Item>,
//   shoulder:      <Item id="id">ItemName</Item>,
//   back:          <Item id="id">ItemName</Item>,
//   chest:         <Item id="id">ItemName</Item>,
//   shirt:         <Item id="id">ItemName</Item>,
//   tabard:        <Item id="id">ItemName</Item>,
//   wrists:        <Item id="id">ItemName</Item>,
//   hands:         <Item id="id">ItemName</Item>,
//   waist:         <Item id="id">ItemName</Item>,
//   legs:          <Item id="id">ItemName</Item>,
//   feet:          <Item id="id">ItemName</Item>,
//   finger1:       <Item id="id">ItemName</Item>,
//   finger2:       <Item id="id">ItemName</Item>,
//   trinket1:      <Item id="id">ItemName</Item>,
//   trinket2:      <Item id="id">ItemName</Item>,
//   mainhand:      <Item id="id">ItemName</Item>,
//   secondaryhand: <Item id="id">ItemName</Item>,
//   ranged:        <Item id="id">ItemName</Item>,
//   relic:         <Item id="id">ItemName</Item>,
//   ammo:          <Item id="id">ItemName</Item>,
// }

const iconSize = "32px";

const EquipmentSlotHeaderCell = ({type, colSpan = "1", rowSpan = "1"}) => {
  let itemType = type;
  if (type === "finger1" || type === "finger2") {
    itemType = "finger";
  }
  if (type === "trinket1" || type === "trinket2") {
    itemType = "trinket";
  }

  return (
    <th scope="row" aria-label={itemType} title={itemType} colSpan={colSpan} rowSpan={rowSpan}>
      <div className="equipmentSlotHeaderCellWrapper">
        <Icon type={itemType} size={iconSize} />
      </div>
    </th>
  );
};

  const listOfMandatoryItems = ["head", "neck", "shoulder", "back", "chest", "shirt", "tabard", "wrists", "hands", "waist", "legs", "feet", "finger1", "finger2", "trinket1", "trinket2", "mainhand",
  ]

const EquipmentSet = ({equipment, describedby}) => {

  return (
    <table className="equipSetTable" aria-describedby={describedby}>
      {/* ARMOR */}
      <colgroup span="1" />
      <colgroup span="1" style={{
        fontSize: "4rem",
      }}/>
      <tbody className="armor">
        {listOfMandatoryItems.map((item) => {
          return (
            <>
              <tr>
                <EquipmentSlotHeaderCell rowSpan="1" type={item} />
                <td rowSpan="1">{equipment[item]}</td>
                <td>
                  <ItemUpgrades
                    enchant={<Spell id="27960">+6 All Stats</Spell>}
                    gems={[
                      <Item id="24028" quality="rare">+8 Agility</Item>,
                      <Item id="24028" quality="rare">+8 Agility</Item>,
                      <Item id="24028" quality="rare">+8 Agility</Item>
                    ]}
                  />
                </td>
              </tr>
            </>
          )
        })}

        {/*{listOfMandatoryItems.map((item) => {*/}
        {/*  return (*/}
        {/*    <>*/}
        {/*      <tr>*/}
        {/*        <EquipmentSlotHeaderCell rowSpan="2" type={item} />*/}
        {/*        <td rowSpan="2">{equipment[item]}</td>*/}
        {/*        <td scope="row" aria-label="enchanting"><Icon type="enchanting" /></td>*/}
        {/*        <td><Spell id="27960">+6 All Stats</Spell></td>*/}
        {/*      </tr>*/}
        {/*      <tr>*/}
        {/*        <td scope="row" aria-label="gems"><Icon type="jewelcrafting" /></td>*/}
        {/*        <td>*/}
        {/*          <Item id="24028" quality="rare">+8 Agility</Item>*/}
        {/*          <Item id="24028" quality="rare">+8 Agility</Item>*/}
        {/*          <Item id="24028" quality="rare">+8 Agility</Item>*/}
        {/*        </td>*/}
        {/*      </tr>*/}
        {/*    </>*/}
        {/*  )*/}
        {/*})}*/}

        {/*<tr>*/}
        {/*  <EquipmentSlotHeaderCell rowspan="1" type="head" />*/}
        {/*  <td rowspan="1">{equipment.head}</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <EquipmentSlotHeaderCell rowspan="1" type="neck" />*/}
        {/*  <td rowspan="1">{equipment.neck}</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <EquipmentSlotHeaderCell rowspan="1" type="shoulder" />*/}
        {/*  <td rowspan="1">{equipment.shoulder}</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <EquipmentSlotHeaderCell rowspan="1" type="back" />*/}
        {/*  <td rowspan="1">{equipment.back}</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <EquipmentSlotHeaderCell rowspan="1" type="chest" />*/}
        {/*  <td rowspan="1">{equipment.chest}</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <EquipmentSlotHeaderCell rowspan="1" type="shirt" />*/}
        {/*  <td rowspan="1">{equipment.shirt}</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <EquipmentSlotHeaderCell rowspan="1" type="tabard" />*/}
        {/*  <td rowspan="1">{equipment.tabard}</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <EquipmentSlotHeaderCell rowspan="1" type="wrists" />*/}
        {/*  <td rowspan="1">{equipment.wrists}</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <EquipmentSlotHeaderCell rowspan="1" type="hands" />*/}
        {/*  <td rowspan="1">{equipment.hands}</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <EquipmentSlotHeaderCell rowspan="1" type="waist" />*/}
        {/*  <td rowspan="1">{equipment.waist}</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <EquipmentSlotHeaderCell rowspan="1" type="legs" />*/}
        {/*  <td rowspan="1">{equipment.legs}</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <EquipmentSlotHeaderCell rowspan="1" type="feet" />*/}
        {/*  <td rowspan="1">{equipment.feet}</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <EquipmentSlotHeaderCell rowspan="1" type="finger" />*/}
        {/*  <td rowspan="1">{equipment.finger1}</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <EquipmentSlotHeaderCell rowspan="1" type="finger" />*/}
        {/*  <td rowspan="1">{equipment.finger2}</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <EquipmentSlotHeaderCell rowspan="1" type="trinket" />*/}
        {/*  <td rowspan="1">{equipment.trinket1}</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <EquipmentSlotHeaderCell rowspan="1" type="trinket" />*/}
        {/*  <td rowspan="1">{equipment.trinket2}</td>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <EquipmentSlotHeaderCell rowspan="1" type="mainhand" />*/}
        {/*  <td rowspan="1">{equipment.mainhand}</td>*/}
        {/*</tr>*/}
        {equipment.secondaryhand ? <tr>
          <EquipmentSlotHeaderCell rowspan="1" type="secondaryhand" />
          <td rowspan="1">{equipment.secondaryhand}</td>
        </tr> : null}
        {equipment.ranged ? <tr>
          <EquipmentSlotHeaderCell rowspan="1" type="ranged" />
          <td rowspan="1">{equipment.ranged}</td>
        </tr> : null}
        {equipment.relic ? <tr>
          <EquipmentSlotHeaderCell rowspan="1" type="relic" />
          <td rowspan="1">{equipment.relic}</td>
        </tr> : null}
        {equipment.ammo ? <tr>
          <EquipmentSlotHeaderCell rowspan="1" type="ammo" />
          <td rowspan="1">{equipment.ammo}</td>
        </tr> : null}
      </tbody>
      {/* WEAPONS */}
      {/*<tbody className="weapons">*/}
      {/*  <tr>*/}
      {/*    <EquipmentSlotHeaderCell type="mainhand" colSpan="2" />*/}
      {/*    <td colSpan="2">{equipment.mainhand}</td>*/}
      {/*  </tr>*/}
      {/*  {equipment.secondaryhand ? <tr>*/}
      {/*    <EquipmentSlotHeaderCell type="secondaryhand" colSpan="2" />*/}
      {/*    <td colSpan="2">{equipment.secondaryhand}</td>*/}
      {/*  </tr> : null}*/}

      {/*  {equipment.ranged ? <tr>*/}
      {/*    <EquipmentSlotHeaderCell type="ranged" colSpan="2" />*/}
      {/*    <td colSpan="2">{equipment.ranged}</td>*/}
      {/*  </tr> : null}*/}
      {/*  {equipment.relic ? <tr>*/}
      {/*    <EquipmentSlotHeaderCell type="relic" colSpan="2" />*/}
      {/*    <td colSpan="2">{equipment.relic}</td>*/}
      {/*  </tr> : null}*/}
      {/*  {equipment.ammo ? <tr>*/}
      {/*    <EquipmentSlotHeaderCell type="ammo" colSpan="2" />*/}
      {/*    <td colSpan="2">{equipment.ammo}</td>*/}
      {/*  </tr> : null}*/}
      {/*</tbody>*/}
    </table>
  );
};

export default EquipmentSet;
