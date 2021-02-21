import React from "react";
import "./itemUpgrades.scss";
import Icon from "../../gameElements/icon/Icon";

const ItemUpgrades = ({enchant, gems}) => {

  if (!enchant && !gems) {
    return null;
  }

  return (
    <table className="itemUpgradesTable" aria-describedby="???????">
      <tbody>
        {enchant ? <tr>
          <th scope="row" aria-label="enchants"><Icon type="enchanting" /></th>
          <td>
            {enchant}
          </td>
        </tr> : null}
        {gems ? <tr>
          <th scope="row" aria-label="gems"><Icon type="jewelcrafting" /></th>
          <td>
            {gems.map((gem, index) =>
              <React.Fragment key={index}>
                {gem}{gems.length - 1 === index ? null : ", "}
              </React.Fragment>)}
          </td>
        </tr> : null}
      </tbody>
    </table>
  );
};

export default ItemUpgrades;
