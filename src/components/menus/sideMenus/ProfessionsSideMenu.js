import React from "react";
import TreeView from "../../treeView/TreeView";
import TreeItem from "../../treeView/TreeItem";

function ProfessionsSideMenu() {
  return (
    <TreeView localStorageKey="ProfessionsSideMenu">
      <TreeItem label="Primary">
        <TreeItem label="Alchemy" link="/professions/primary/alchemy" />
        <TreeItem label="Blacksmithing" link="/professions/primary/blacksmithing" />
        <TreeItem label="Enchanting" link="/professions/primary/enchanting" />
        <TreeItem label="Engineering" link="/professions/primary/engineering" />
        <TreeItem label="Herbalism" link="/professions/primary/herbalism" />
        <TreeItem label="Jewelcrafting" link="/professions/primary/jewelcrafting" />
        <TreeItem label="Leatherworking" link="/professions/primary/leatherworking" />
        <TreeItem label="Mining" link="/professions/primary/mining" />
        <TreeItem label="Skinning" link="/professions/primary/skinning" />
        <TreeItem label="Tailoring" link="/professions/primary/tailoring" />
      </TreeItem>

      <TreeItem label="Secondary">
        <TreeItem label="Cooking" link="/professions/secondary/cooking" />
        <TreeItem label="First Aid" link="/professions/secondary/firstaid" />
        <TreeItem label="Fishing" link="/professions/secondary/fishing" />
      </TreeItem>
    </TreeView>
  );
}

export default ProfessionsSideMenu;
