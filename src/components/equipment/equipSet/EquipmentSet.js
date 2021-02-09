import React from "react";
import "./equipmentSet.scss";
import Icon from "../../gameElements/icon/Icon";

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

const EquipmentSlotHeaderCell = ({type, colSpan = "1"}) => {

  return (
    <th scope="row" aria-label={type} title={type} colSpan={colSpan}>
      <div className="equipmentSlotHeaderCellWrapper">
        <Icon type={type} size={iconSize} />
      </div>
    </th>
  );
};

const EquipmentSet = ({equipment, describedby}) => {

  return (
    <table className="equipSetTable" aria-describedby={describedby}>
      {/* ARMOR */}
      <tbody className="armor">
        <tr>
          <EquipmentSlotHeaderCell type="head" />
          <td>{equipment.head}</td>
          <EquipmentSlotHeaderCell type="hands" />
          <td>{equipment.hands}</td>
        </tr>
        <tr>
          <EquipmentSlotHeaderCell type="neck" />
          <td>{equipment.neck}</td>
          <EquipmentSlotHeaderCell type="waist" />
          <td>{equipment.waist}</td>
        </tr>
        <tr>
          <EquipmentSlotHeaderCell type="shoulder" />
          <td>{equipment.shoulder}</td>
          <EquipmentSlotHeaderCell type="legs" />
          <td>{equipment.legs}</td>
        </tr>
        <tr>
          <EquipmentSlotHeaderCell type="back" />
          <td>{equipment.back}</td>
          <EquipmentSlotHeaderCell type="feet" />
          <td>{equipment.feet}</td>
        </tr>
        <tr>
          <EquipmentSlotHeaderCell type="chest" />
          <td>{equipment.chest}</td>
          <EquipmentSlotHeaderCell type="finger" />
          <td>{equipment.finger1}</td>
        </tr>
        <tr>
          <EquipmentSlotHeaderCell type="shirt" />
          <td>{equipment.shirt}</td>
          <EquipmentSlotHeaderCell type="finger" />
          <td>{equipment.finger2}</td>
        </tr>
        <tr>
          <EquipmentSlotHeaderCell type="tabard" />
          <td>{equipment.tabard}</td>
          <EquipmentSlotHeaderCell type="trinket" />
          <td>{equipment.trinket1}</td>
        </tr>
        <tr>
          <EquipmentSlotHeaderCell type="wrists" />
          <td>{equipment.wrists}</td>
          <EquipmentSlotHeaderCell type="trinket" />
          <td>{equipment.trinket2}</td>
        </tr>
      </tbody>
      {/* WEAPONS */}
      <tbody className="weapons">
        <tr>
          <EquipmentSlotHeaderCell type="mainhand" colSpan="2" />
          <td colSpan="2">{equipment.mainhand}</td>
        </tr>
        {equipment.secondaryhand ? <tr>
          <EquipmentSlotHeaderCell type="secondaryhand" colSpan="2" />
          <td colSpan="2">{equipment.secondaryhand}</td>
        </tr> : null}

        {equipment.ranged ? <tr>
          <EquipmentSlotHeaderCell type="ranged" colSpan="2" />
          <td colSpan="2">{equipment.ranged}</td>
        </tr> : null}
        {equipment.relic ? <tr>
          <EquipmentSlotHeaderCell type="relic" colSpan="2" />
          <td colSpan="2">{equipment.relic}</td>
        </tr> : null}
        {equipment.ammo ? <tr>
          <EquipmentSlotHeaderCell type="ammo" colSpan="2" />
          <td colSpan="2">{equipment.ammo}</td>
        </tr> : null}
      </tbody>
    </table>
  );
};

export default EquipmentSet;
