import React from "react";
import TreeView from "../../treeView/TreeView";
import TreeItem from "../../treeView/TreeItem";

function PveTutorialsSideMenu() {
  return (
    <nav role="navigation" aria-label="PvE tutorials side menu">
      <h3>PvE Tutorials</h3>
      <TreeView localStorageKey="PveTutorialsSideMenu">
        <TreeItem label="Physical DPS mechanics" link="/pve-tutorials/physical" />
        <TreeItem label="Spell DPS mechanics" link="/pve-tutorials/spell" />
        <TreeItem label="Tank mechanics" link="/pve-tutorials/tank" />
        <TreeItem label="Healing mechanics" link="/pve-tutorials/healing" />
        <TreeItem label="Raid Composition" link="/pve-tutorials/raid-composition" />
        <TreeItem label="Druid">
          <TreeItem label="Balance" link="/pve-tutorials/druid/balance" />
          <TreeItem label="Feral" link="/pve-tutorials/druid/feral" />
          <TreeItem label="Restoration" link="/pve-tutorials/druid/restoration" />
        </TreeItem>
        <TreeItem label="Hunter">
          <TreeItem label="Beast Mastery" link="/pve-tutorials/hunter/beastmastery" />
          <TreeItem label="Marksmanship" link="/pve-tutorials/hunter/marksmanship" />
          <TreeItem label="Survival" link="/pve-tutorials/hunter/survival" />
        </TreeItem>
        <TreeItem label="Mage">
          <TreeItem label="Arcane" link="/pve-tutorials/mage/arcane" />
          <TreeItem label="Fire" link="/pve-tutorials/mage/fire" />
          <TreeItem label="Frost" link="/pve-tutorials/mage/frost" />
        </TreeItem>
        <TreeItem label="Paladin">
          <TreeItem label="Holy" link="/pve-tutorials/paladin/holy" />
          <TreeItem label="Protection" link="/pve-tutorials/paladin/protection" />
          <TreeItem label="Retribution" link="/pve-tutorials/paladin/retribution" />
        </TreeItem>
        <TreeItem label="Priest">
          <TreeItem label="Discipline" link="/pve-tutorials/priest/discipline" />
          <TreeItem label="Holy" link="/pve-tutorials/priest/holy" />
          <TreeItem label="Shadow" link="/pve-tutorials/priest/shadow" />
        </TreeItem>
        <TreeItem label="Rogue">
          <TreeItem label="Assassination" link="/pve-tutorials/rogue/assassination" />
          <TreeItem label="Combat" link="/pve-tutorials/rogue/combat" />
          <TreeItem label="Subtlety" link="/pve-tutorials/rogue/subtlety" />
        </TreeItem>
        <TreeItem label="Shaman">
          <TreeItem label="Elemental" link="/pve-tutorials/shaman/elemental" />
          <TreeItem label="Enhancement" link="/pve-tutorials/shaman/enhancement" />
          <TreeItem label="Restoration" link="/pve-tutorials/shaman/restoration" />
        </TreeItem>
        <TreeItem label="Warlock">
          <TreeItem label="Affliction" link="/pve-tutorials/warlock/affliction" />
          <TreeItem label="Demonology" link="/pve-tutorials/warlock/demonology" />
          <TreeItem label="Destruction" link="/pve-tutorials/warlock/destruction" />
        </TreeItem>
        <TreeItem label="Warrior">
          <TreeItem label="Arms" link="/pve-tutorials/warrior/arms" />
          <TreeItem label="Fury" link="/pve-tutorials/warrior/fury" />
          <TreeItem label="Protection" link="/pve-tutorials/warrior/protection" />
        </TreeItem>
      </TreeView>
    </nav>
  );
}

export default PveTutorialsSideMenu;
