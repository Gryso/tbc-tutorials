import React from "react";
import TreeView from "../../treeView/TreeView";
import TreeItem from "../../treeView/TreeItem";

function ReputationSideMenu() {
  return (
    <TreeView localStorageKey="ReputationSideMenu">
      <TreeItem label="Most efficient way to farm reputation during leveling" link="/index" />
      <TreeItem label="Thrallmar / Honor Hold" link="/reputations/druid" />
      <TreeItem label="Cenarion Expedition" link="/reputations/hunter" />
      <TreeItem label="Sporeggar" link="/reputations/mage" />
      <TreeItem label="The Scryers/The Aldor" link="/reputations/paladin" />
      <TreeItem label="Lower City" link="/reputations/priest" />
      <TreeItem label="The Sha'tar" link="/reputations/rogue" />
      <TreeItem label="Mag'har/Kurenai" link="/reputations/shaman" />
      <TreeItem label="The Consortium" link="/reputations/warlock" />
      <TreeItem label="Keepers of Time" link="/reputations/warrior" />
      <TreeItem label="Netherwing" link="/reputations/warrior" />
      <TreeItem label="The Violet Eye" link="/reputations/warrior" />
    </TreeView>
  );
}

export default ReputationSideMenu;
