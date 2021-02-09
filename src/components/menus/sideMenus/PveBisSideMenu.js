import React from "react";
import TreeView from "../../treeView/TreeView";
import TreeItem from "../../treeView/TreeItem";

function PveBisSideMenu() {
  return (
    <nav role="navigation" aria-label="PvE BIS side menu">
      <h3>PvE BIS</h3>
      <TreeView localStorageKey="PveBisSideMenu">
        <TreeItem label="Druid">
          <TreeItem label="Balance" link="/pve-bis/druid/balance" />
          <TreeItem label="Feral Tank" link="/pve-bis/druid/feralTank" />
          <TreeItem label="Feral DPS" link="/pve-bis/druid/feralDps" />
          <TreeItem label="Restoration" link="/pve-bis/druid/restoration" />
        </TreeItem>
        <TreeItem label="Hunter">
          <TreeItem label="Beast Mastery" link="/pve-bis/hunter/beastmastery" />
          <TreeItem label="Marksmanship" link="/pve-bis/hunter/marksmanship" />
          <TreeItem label="Survival" link="/pve-bis/hunter/survival" />
        </TreeItem>
        <TreeItem label="Mage">
          <TreeItem label="Arcane" link="/pve-bis/mage/arcane" />
          <TreeItem label="Fire" link="/pve-bis/mage/fire" />
          <TreeItem label="Frost" link="/pve-bis/mage/frost" />
        </TreeItem>
        <TreeItem label="Paladin">
          <TreeItem label="Holy" link="/pve-bis/paladin/holy" />
          <TreeItem label="Protection" link="/pve-bis/paladin/protection" />
          <TreeItem label="Retribution" link="/pve-bis/paladin/retribution" />
        </TreeItem>
        <TreeItem label="Priest">
          <TreeItem label="Discipline" link="/pve-bis/priest/discipline" />
          <TreeItem label="Holy" link="/pve-bis/priest/holy" />
          <TreeItem label="Shadow" link="/pve-bis/priest/shadow" />
        </TreeItem>
        <TreeItem label="Rogue">
          <TreeItem label="Assassination" link="/pve-bis/rogue/assassination" />
          <TreeItem label="Combat" link="/pve-bis/rogue/combat" />
          <TreeItem label="Subtlety" link="/pve-bis/rogue/subtlety" />
        </TreeItem>
        <TreeItem label="Shaman">
          <TreeItem label="Elemental" link="/pve-bis/shaman/elemental" />
          <TreeItem label="Enhancement" link="/pve-bis/shaman/enhancement" />
          <TreeItem label="Restoration" link="/pve-bis/shaman/restoration" />
        </TreeItem>
        <TreeItem label="Warlock">
          <TreeItem label="Affliction" link="/pve-bis/warlock/affliction" />
          <TreeItem label="Demonology" link="/pve-bis/warlock/demonology" />
          <TreeItem label="Destruction" link="/pve-bis/warlock/destruction" />
        </TreeItem>
        <TreeItem label="Warrior">
          <TreeItem label="Arms" link="/pve-bis/warrior/arms" />
          <TreeItem label="Fury" link="/pve-bis/warrior/fury" />
          <TreeItem label="Protection" link="/pve-bis/warrior/protection" />
        </TreeItem>
      </TreeView>
    </nav>
  );
}

export default PveBisSideMenu;
