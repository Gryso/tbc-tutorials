import React from "react";
import TreeView from "../../treeView/TreeView";
import TreeItem from "../../treeView/TreeItem";

function BisSideMenu() {
  return (
    <TreeView localStorageKey="BisSideMenu">
      <TreeItem label="Druid">
        <TreeItem label="Balance" link="/bis/balance" />
        <TreeItem label="Feral" link="/bis/feral" />
        <TreeItem label="Restoration" link="/bis/restoration" />
      </TreeItem>
      <TreeItem label="Hunter">
        <TreeItem label="Beast Mastery" link="/bis/beastmastery" />
        <TreeItem label="Marksmanship" link="/bis/marksmanship" />
        <TreeItem label="Survival" link="/bis/survival" />
      </TreeItem>
      <TreeItem label="Mage">
        <TreeItem label="Arcane" link="/bis/arcane" />
        <TreeItem label="Fire" link="/bis/fire" />
        <TreeItem label="Frost" link="/bis/frost" />
      </TreeItem>
      <TreeItem label="Paladin">
        <TreeItem label="Holy" link="/bis/holy" />
        <TreeItem label="Protection" link="/bis/protection" />
        <TreeItem label="Retribution" link="/bis/retribution" />
      </TreeItem>
      <TreeItem label="Priest">
        <TreeItem label="Discipline" link="/bis/discipline" />
        <TreeItem label="Holy" link="/bis/holy" />
        <TreeItem label="Shadow" link="/bis/shadow" />
      </TreeItem>
      <TreeItem label="Rogue">
        <TreeItem label="Assassination" link="/bis/assassination" />
        <TreeItem label="Combat" link="/bis/combat" />
        <TreeItem label="Subtlety" link="/bis/subtlety" />
      </TreeItem>
      <TreeItem label="Shaman">
        <TreeItem label="Elemental" link="/bis/elemental" />
        <TreeItem label="Enhancement" link="/bis/enhancement" />
        <TreeItem label="Restoration" link="/bis/restoration" />
      </TreeItem>
      <TreeItem label="Warlock">
        <TreeItem label="Affliction" link="/bis/affliction" />
        <TreeItem label="Demonology" link="/bis/demonology" />
        <TreeItem label="Destruction" link="/bis/destruction" />
      </TreeItem>
      <TreeItem label="Warrior">
        <TreeItem label="Arms" link="/bis/arms" />
        <TreeItem label="Fury" link="/bis/fury" />
        <TreeItem label="Protection" link="/bis/protection" />
      </TreeItem>
    </TreeView>
  );
}

export default BisSideMenu;
