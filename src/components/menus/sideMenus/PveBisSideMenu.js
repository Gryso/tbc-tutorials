import React from "react";
import TreeView from "../../treeView/TreeView";
import TreeItem from "../../treeView/TreeItem";

function PveBisSideMenu() {
  return (
    <nav role="navigation" aria-label="PvE BIS side menu">
      <h3>PvE BIS</h3>
      <TreeView localStorageKey="PveBisSideMenu">
        <TreeItem label="Race Stats" link="/pve-bis/raceStats" />
        <TreeItem label="Druid">
          <TreeItem label="Balance" link="/pve-bis/balance" />
          <TreeItem label="Feral" link="/pve-bis/feral" />
          <TreeItem label="Restoration" link="/pve-bis/restoration" />
        </TreeItem>
        <TreeItem label="Hunter">
          <TreeItem label="Beast Mastery" link="/pve-bis/beastmastery" />
          <TreeItem label="Marksmanship" link="/pve-bis/marksmanship" />
          <TreeItem label="Survival" link="/pve-bis/survival" />
        </TreeItem>
        <TreeItem label="Mage">
          <TreeItem label="Arcane" link="/pve-bis/arcane" />
          <TreeItem label="Fire" link="/pve-bis/fire" />
          <TreeItem label="Frost" link="/pve-bis/frost" />
        </TreeItem>
        <TreeItem label="Paladin">
          <TreeItem label="Holy" link="/pve-bis/holy" />
          <TreeItem label="Protection" link="/pve-bis/protection" />
          <TreeItem label="Retribution" link="/pve-bis/retribution" />
        </TreeItem>
        <TreeItem label="Priest">
          <TreeItem label="Discipline" link="/pve-bis/discipline" />
          <TreeItem label="Holy" link="/pve-bis/holy" />
          <TreeItem label="Shadow" link="/pve-bis/shadow" />
        </TreeItem>
        <TreeItem label="Rogue">
          <TreeItem label="Assassination" link="/pve-bis/assassination" />
          <TreeItem label="Combat" link="/pve-bis/combat" />
          <TreeItem label="Subtlety" link="/pve-bis/subtlety" />
        </TreeItem>
        <TreeItem label="Shaman">
          <TreeItem label="Elemental" link="/pve-bis/elemental" />
          <TreeItem label="Enhancement" link="/pve-bis/enhancement" />
          <TreeItem label="Restoration" link="/pve-bis/restoration" />
        </TreeItem>
        <TreeItem label="Warlock">
          <TreeItem label="Affliction" link="/pve-bis/affliction" />
          <TreeItem label="Demonology" link="/pve-bis/demonology" />
          <TreeItem label="Destruction" link="/pve-bis/destruction" />
        </TreeItem>
        <TreeItem label="Warrior">
          <TreeItem label="Arms" link="/pve-bis/arms" />
          <TreeItem label="Fury" link="/pve-bis/fury" />
          <TreeItem label="Protection" link="/pve-bis/protection" />
        </TreeItem>
      </TreeView>
    </nav>
  );
}

export default PveBisSideMenu;
