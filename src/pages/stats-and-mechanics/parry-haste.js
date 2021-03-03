import React from "react";
import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../components/layouts/sideMenuLayout/SideMenuLayout";
import {Heading5, Title} from "../../components/headers/headers";
import StatsAndMechanicsSideMenu from "../../components/menus/sideMenus/StatsAndMechanicsSideMenu";
import parryExplanation from "../../images/parryExplanation.png";

const ParryHaste = () => {
  return (
    <MainLayout pageTitle="Parry Haste">
      <SideMenuLayout sideMenu={StatsAndMechanicsSideMenu}>
        <Title>Parry Haste</Title>
        <p>
          Apart from avoiding attack parry have additional effect reducing time before your next hit. Amount of time
          reduced is based on remaining time of swing timer. This increase is about 24% per Parry on average.
          Based on this, one percent increase in Parry chance results in 0.24% overall attack speed increase. (This is
          rough estimate based on only on white attacks)
        </p>
        <Heading5>Parry Haste mechanics:</Heading5>
        <ul>
          <li>
            <strong>If time before next hit is less than 20% of full timer</strong>: nothing happens you hit at the end
            of your swing timer as you would without parrying an attack. (0% speed increase)
          </li>
          <li>
            <strong>If time before next hit is between 60% and 20% of full timer</strong>: time before your next attack
            is reduces to 20%
            of your swing time. (0% - 40% speed increase (20% average))
          </li>
          <li>
            <strong>If time before next hit is more than 60% of full timer</strong>: time before your next attack is
            reduces by 40%
            of your swing time. (40% speed increase)
          </li>
        </ul>
        <img className="pageImage" src={parryExplanation} alt="Parry mechanics Explanation" />

        <table className="simplePageTable">
          <caption>Bosses not capable of Parry Haste:</caption>
          <thead>
            <tr>
              <th>Instance</th>
              <th>Bosses that cannot parry haste</th>
            </tr>
          </thead>
        </table>
      </SideMenuLayout>
    </MainLayout>
  );
};

export default ParryHaste;
