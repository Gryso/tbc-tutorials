import React from "react";
import TreeView from "../../treeView/TreeView";
import TreeItem from "../../treeView/TreeItem";

function StatsAndMechanicsSideMenu() {
  return (
    <nav role="navigation" aria-label="Stats and Mechanics side menu">
      <h3>Stats and Mechanics</h3>
      <TreeView localStorageKey="StatsAndMechanicsSideMenu">
        <TreeItem label="Race Stats" link="/stats-and-mechanics/race-stats" />
        <TreeItem label="Impact of enemy level on characters statistics"
                  link="/stats-and-mechanics/enemy-level-and-characters-statistics" />
        <TreeItem label="Formulas" link="/stats-and-mechanics/formulas" />
        <TreeItem label="Threat" link="/stats-and-mechanics/threat" />
        <TreeItem label="Attack Tables" link="/stats-and-mechanics/attack-tables" />
        <TreeItem label="Parry Haste" link="/stats-and-mechanics/parry-haste" />
      </TreeView>
    </nav>
  );
}

export default StatsAndMechanicsSideMenu;
