import React from "react";
import TreeView from "../../treeView/TreeView";
import TreeItem from "../../treeView/TreeItem";

function TestSideMenu() {
  return (
    <nav role="navigation" aria-label="TestSideMenu">
      <h3>Test side Menu</h3>
      <TreeView localStorageKey="TestSideMenu">
        <TreeItem label="Testing" link="/testing/" />
        <TreeItem label="Typography" link="/typography" />

        <TreeItem label="Upackable1">
          <TreeItem label="Random1" link="nothing" />
          <TreeItem label="Random2" link="nothing" />
          <TreeItem label="Random3" link="nothing" />
        </TreeItem>
        <TreeItem label="Upackable2">
          <TreeItem label="Balance" link="nothing" />
          <TreeItem label="FeralDps" link="nothing" />
          <TreeItem label="Restoration" link="nothing" />
        </TreeItem>
        <TreeItem label="Normal1" link="nothing" />
        <TreeItem label="Very long with much word to shot to you" link="nothing" />
        <TreeItem label="Very long wiiiiiiiiiith looooooong woooooooords" link="nothing" />
        <TreeItem label="Upackable3">
          <TreeItem label="Balance" link="nothing" />
          <TreeItem label="FeralDps" link="nothing" />
          <TreeItem label="Restoration" link="nothing" />
        </TreeItem>
        <TreeItem label="To force scroll">
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
          <TreeItem label="force scroll" link="nothing" />
        </TreeItem>
      </TreeView>
    </nav>
  );
}

export default TestSideMenu;
