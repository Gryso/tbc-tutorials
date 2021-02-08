import React from "react";
import "./equipmentSet.scss";
import Icon from "../gameElements/icon/Icon";

const iconSize = "48px";

const EquipmentSlotHeaderCell = ({type}) => {

  return (
    <th scope="row" aria-label={type} title={type}>
      <div className="EquipmentSlotHeaderCellWrapper">
        <Icon type={type} size={iconSize} />
      </div>
    </th>
  );
};


const EquipmentSet = ({equipment}) => {

  return (
    <table className="equipSetTable" aria-describedby="???????">
      {/* ARMOR */}
      <tbody className="armor">
      <tr>
        <td>{equipment.head}</td>
        <EquipmentSlotHeaderCell type="head" />
        <EquipmentSlotHeaderCell type="hands" />
        <td>{equipment.hands}</td>
      </tr>
      <tr>
        <td>{equipment.neck}</td>
        <EquipmentSlotHeaderCell type="neck" />
        <EquipmentSlotHeaderCell type="waist" />
        <td>{equipment.waist}</td>
      </tr>
      <tr>
        <td>{equipment.shoulder}</td>
        <EquipmentSlotHeaderCell type="shoulder" />
        <EquipmentSlotHeaderCell type="legs" />
        <td>{equipment.legs}</td>
      </tr>
      <tr>
        <td>{equipment.back}</td>
        <EquipmentSlotHeaderCell type="back" />
        <EquipmentSlotHeaderCell type="feet" />
        <td>{equipment.feet}</td>
      </tr>
      <tr>
        <td>{equipment.chest}</td>
        <EquipmentSlotHeaderCell type="chest" />
        <EquipmentSlotHeaderCell type="finger" />
        <td>{equipment.finger1}</td>
      </tr>
      <tr>
        <td>{equipment.shirt}</td>
        <EquipmentSlotHeaderCell type="shirt" />
        <EquipmentSlotHeaderCell type="finger" />
        <td>{equipment.finger2}</td>
      </tr>
      <tr>
        <td>{equipment.tabard}</td>
        <EquipmentSlotHeaderCell type="tabard" />
        <EquipmentSlotHeaderCell type="trinket" />
        <td>{equipment.trinket1}</td>
      </tr>
      <tr>
        <td>{equipment.wrists}</td>
        <EquipmentSlotHeaderCell type="wrists" />
        <EquipmentSlotHeaderCell type="trinket" />
        <td>{equipment.trinket2}</td>
      </tr>
      </tbody>
      {/* WEAPONS */}
      <tbody className="weapons">
      <tr>
        <EquipmentSlotHeaderCell type="mainhand" />
        <td colSpan="3">{equipment.mainhand}</td>
      </tr>
      {equipment.secondaryhand ? <tr>
        <EquipmentSlotHeaderCell type="secondaryhand" />
        <td colSpan="3">{equipment.secondaryhand}</td>
      </tr> : null}

      {equipment.ranged ? <tr>
        <EquipmentSlotHeaderCell type="ranged" />
        <td colSpan="3">{equipment.ranged}</td>
      </tr> : null}
      {equipment.relic ? <tr>
        <EquipmentSlotHeaderCell type="relic" />
        <td colSpan="3">{equipment.relic}</td>
      </tr> : null}
      {equipment.ammo ? <tr>
        <EquipmentSlotHeaderCell type="ammo" />
        <td colSpan="3">{equipment.ammo}</td>
      </tr> : null}
      </tbody>
    </table>
  );
};

export default EquipmentSet;
