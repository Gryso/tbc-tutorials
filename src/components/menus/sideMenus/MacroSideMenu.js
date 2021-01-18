import React from "react";
import TreeView from "../../treeView/TreeView";
import TreeItem from "../../treeView/TreeItem";

function MacroSideMenu() {
  return (
    <TreeView LSKey="MacroSideMenu">
      <TreeItem label="General" link="/macros"/>
      <TreeItem label="Druid" link="/macros/druid"/>
      <TreeItem label="Hunter" link="/macros/hunter"/>
      <TreeItem label="Mage" link="/macros/mage"/>
      <TreeItem label="Paladin" link="/macros/paladin"/>
      <TreeItem label="Priest" link="/macros/priest"/>
      <TreeItem label="Rogue" link="/macros/rogue"/>
      <TreeItem label="Shaman" link="/macros/shaman"/>
      <TreeItem label="Warlock" link="/macros/warlock"/>
      <TreeItem label="Warrior" link="/macros/warrior"/>

      <TreeItem label="test">
        <TreeItem label="Warlock" link="/macros/warlock"/>
        <TreeItem label="Warrior" link="/macros/warrior"/>
        <TreeItem label="deeper test">
          <TreeItem label="Paladin" link="/macros/paladin"/>
          <TreeItem label="Priest" link="/macros/priest"/>
        </TreeItem>
        <TreeItem label="Hunter" link="/macros/hunter"/>
      </TreeItem>
    </TreeView>
  );
}

export default MacroSideMenu;
