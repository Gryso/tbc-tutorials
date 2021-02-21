import React from "react";
import "./equipmentList.scss";
import * as equipmentSlots from "../../gameElements/equipmentSlot/equipmentSlot";
import Icon from "../../gameElements/icon/Icon";

const EquipmentList = ({listOfEquipmentSlots}) => {

  return (
    <table className="equipListTable" aria-describedby="???????">
      <tbody>
        {listOfEquipmentSlots.map((equipmentSlot, index) => {
          return (
            <tr key={index}>
              <th scope="row">{equipmentSlots[equipmentSlot.type]()}</th>
              <td>
                {equipmentSlot.items.map((item, index) =>
                  <React.Fragment key={index}>
                    {item}{equipmentSlot.items.length - 1 === index ? null : ", "}
                  </React.Fragment>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EquipmentList;
