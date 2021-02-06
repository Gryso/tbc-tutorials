import React from "react";
import TreeView from "../../treeView/TreeView";
import TreeItem from "../../treeView/TreeItem";

function PvpTutorialsSideMenu() {
  return (
    <TreeView localStorageKey="PvpTutorialsSideMenu">
      <TreeItem label="PVP mechanics" link="/pvp-tutorials/pvp-mechanics"/>
      <TreeItem label="Warsong Gulch" link="/pvp-tutorials/wsg"/>
      <TreeItem label="Arathi Basin" link="/pvp-tutorials/ab"/>
      <TreeItem label="Alterac Valley" link="/pvp-tutorials/av"/>
      <TreeItem label="Eye of the Storm" link="/pvp-tutorials/eos"/>
      <TreeItem label="Druid">
        <TreeItem label="Balance" link="/pvp-tutorials/druid/balance"/>
        <TreeItem label="Feral" link="/pvp-tutorials/druid/feral"/>
        <TreeItem label="Restoration" link="/pvp-tutorials/druid/restoration"/>
      </TreeItem>
      <TreeItem label="Hunter">
        <TreeItem label="Beast Mastery" link="/pvp-tutorials/hunter/beastmastery"/>
        <TreeItem label="Marksmanship" link="/pvp-tutorials/hunter/marksmanship"/>
        <TreeItem label="Survival" link="/pvp-tutorials/hunter/survival"/>
      </TreeItem>
      <TreeItem label="Mage">
        <TreeItem label="Arcane" link="/pvp-tutorials/mage/arcane"/>
        <TreeItem label="Fire" link="/pvp-tutorials/mage/fire"/>
        <TreeItem label="Frost" link="/pvp-tutorials/mage/frost"/>
      </TreeItem>
      <TreeItem label="Paladin">
        <TreeItem label="Holy" link="/pvp-tutorials/paladin/holy"/>
        <TreeItem label="Protection" link="/pvp-tutorials/paladin/protection"/>
        <TreeItem label="Retribution" link="/pvp-tutorials/paladin/retribution"/>
      </TreeItem>
      <TreeItem label="Priest">
        <TreeItem label="Discipline" link="/pvp-tutorials/priest/discipline"/>
        <TreeItem label="Holy" link="/pvp-tutorials/priest/holy"/>
        <TreeItem label="Shadow" link="/pvp-tutorials/priest/shadow"/>
      </TreeItem>
      <TreeItem label="Rogue">
        <TreeItem label="Assassination" link="/pvp-tutorials/rogue/assassination"/>
        <TreeItem label="Combat" link="/pvp-tutorials/rogue/combat"/>
        <TreeItem label="Subtlety" link="/pvp-tutorials/rogue/subtlety"/>
      </TreeItem>
      <TreeItem label="Shaman">
        <TreeItem label="Elemental" link="/pvp-tutorials/shaman/elemental"/>
        <TreeItem label="Enhancement" link="/pvp-tutorials/shaman/enhancement"/>
        <TreeItem label="Restoration" link="/pvp-tutorials/shaman/restoration"/>
      </TreeItem>
      <TreeItem label="Warlock">
        <TreeItem label="Affliction" link="/pvp-tutorials/warlock/affliction"/>
        <TreeItem label="Demonology" link="/pvp-tutorials/warlock/demonology"/>
        <TreeItem label="Destruction" link="/pvp-tutorials/warlock/destruction"/>
      </TreeItem>
      <TreeItem label="Warrior">
        <TreeItem label="Arms" link="/pvp-tutorials/warrior/arms"/>
        <TreeItem label="Fury" link="/pvp-tutorials/warrior/fury"/>
        <TreeItem label="Protection" link="/pvp-tutorials/warrior/protection"/>
      </TreeItem>
    </TreeView>
  );
}

export default PvpTutorialsSideMenu;
