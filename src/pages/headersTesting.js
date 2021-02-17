import React from "react";
import MainLayout from "../components/layouts/mainLayout/MainLayout";
import TestSideMenu from "../components/menus/sideMenus/TestSideMenu";
import {Heading2, Heading3, Heading4, Title} from "../components/headers/headers";
import SideMenuLayout from "../components/layouts/sideMenuLayout/SideMenuLayout";

const testing = () => {
  return (
    <MainLayout>
      <SideMenuLayout sideMenu={TestSideMenu}>
        <Title>From Title to 2</Title>
        <Heading4>Test heading 4 from title</Heading4>

        <Heading2>Test heading 2</Heading2>
        <Heading3>Test heading 3</Heading3>
        <Heading4>Test heading 4</Heading4>
        <Heading2>From 2 to 4</Heading2>
        <Heading4>Test heading 4-1</Heading4>
        <Heading4>Test heading 4-2</Heading4>
        <Heading3>Test heading 3 after 4 in 2</Heading3>
        <Heading4>Test heading another 4 after 3</Heading4>
        <Heading3>Test another 3 after 4 in 2</Heading3>
        <Heading2>Another 2</Heading2>
        <Heading3>First 3</Heading3>
        <Heading3>Second 3</Heading3>
        <Heading3>Third 3</Heading3>
        <Heading4>Thirds 4</Heading4>
        <Heading4>Another Thirds 4</Heading4>
        <Heading3>Fourth 3</Heading3>
        <Heading4>Fours 4</Heading4>
      </SideMenuLayout>
    </MainLayout>
  );
};

export default testing;
