import React from "react";
import "./equipmentList.scss";
import * as equipmentSlots from "../../gameElements/equipmentSlot/equipmentSlot"

const EquipmentList = ({listOfEquipmentSlots}) => {

  return (
    <table className="equipListTable" aria-describedby="???????">
      {listOfEquipmentSlots.map((equipmentSlot) => {
        return (
          <tr>
            <th scope="row">{equipmentSlots[equipmentSlot.type]()}</th>
            <td>
              {equipmentSlot.items.map(
                (item, index) => <>{item}{equipmentSlot.items.length - 1 === index ? null : ", "}</>
              )}
            </td>
          </tr>
        )
      })}
    </table>
  );
};

export default EquipmentList;
