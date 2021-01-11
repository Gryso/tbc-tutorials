import * as React from "react";
import MainLayout from "../../components/MainLayout";
import Item from "../../components/item/Item";

const bis = (props) => {
  return (
    <MainLayout>
      BIS
      <br/>
      <br/>
      <Item quality="poor">My poor item</Item>
      <br/>
      <Item quality="common">My common item</Item>
      <br/>
      <Item quality="uncommon">My uncommon item</Item>
      <br/>
      <Item quality="rare">My rare item</Item>
      <br/>
      <Item quality="epic">My epic item</Item>
      <br/>
      <Item quality="legendary">My legendary item</Item>
      <br/>
      <Item quality="artifact">My artifact item</Item>
      <br/>
      <Item id={14555} >Alcor's Sunrazor</Item>
    </MainLayout>
  );
};

export default bis;
