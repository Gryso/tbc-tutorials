import React from "react";
import "./itemUpgrades.scss";
import Icon from "../../gameElements/icon/Icon";

const ItemUpgrades = ({enchant, gems}) => {

  if (!enchant && !gems) {
    return null;
  }

  return (
    <table className="itemUpgradesTable" aria-describedby="???????">
      {enchant ? <tr>
        <th scope="row"><Icon type="enchanting"/></th>
        <td>
          {enchant}
        </td>
      </tr> : null}
      {gems ? <tr>
        <th scope="row"><Icon type="jewelcrafting"/></th>
        <td>
          {gems.map((gem, index) => <>{gem}{gems.length - 1 === index ? null : ", "}</>)}
        </td>
      </tr> : null}
    </table>
  );
};

export default ItemUpgrades;
