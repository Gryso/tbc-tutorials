import React from "react";
import MainLayout from "../../../components/layouts/mainLayout/MainLayout";
import SideMenuLayout from "../../../components/layouts/sideMenuLayout/SideMenuLayout";
import PveTutorialsMenu from "../../../components/menus/sideMenus/PveTutorialsSideMenu";
import {Heading2, Title} from "../../../components/headers/headers";
import Table from "../../../components/table/Table";

const Physical = () => {

  return (
    <MainLayout pageTitle="Feral Tank">
      <SideMenuLayout sideMenu={PveTutorialsMenu}>
        <Title>Feral Tank (Bear)</Title>
        <Heading2>Race</Heading2>
        <Heading2>Stats</Heading2>
        <Heading2>Bear Form</Heading2>
        <Heading2>Bear Form Threath</Heading2>
        <Heading2>GCD</Heading2>
        <Heading2>Threat</Heading2>
        <Table>
          <thead>
            <tr>
              <th>Spell</th>
              <th>Threat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mangle (Bear)</td>
              <td>1.3x Damage Done</td>
            </tr>
            <tr>
              <td>Faerie Fire</td>
              <td>108</td>
            </tr>
            <tr>
              <td>Demoralizing Roar</td>
              <td>+42</td>
            </tr>
            <tr>
              <td>Maul</td>
              <td>+322</td>
            </tr>
          </tbody>
        </Table>


        <Heading2>Critical Strike Prevention</Heading2>
        <Heading2>Crushing Blow</Heading2>

      </SideMenuLayout>
    </MainLayout>
  );
};

export default Physical;
