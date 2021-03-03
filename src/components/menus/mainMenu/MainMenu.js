import React from "react";
import { Link } from "gatsby"
import "./mainMenu.scss"

function MainMenu() {
  return (
    <nav role="navigation" aria-label="Main" className="mainMenu">
      <Link to="/pve-tutorials/">PvE Tutorials</Link>
      <Link to="/stats-and-mechanics/">Stats and Mechanics</Link>
      <Link to="/pve-bis/">PvE BIS</Link>
      <Link to="/pvp-tutorials/">PvP Tutorials</Link>
      <Link to="/macros/">Macros</Link>
      <Link to="/attunements/">Attunements</Link>
      <Link to="/reputations/">Reputations</Link>
      <Link to="/professions/">Professions</Link>
      <Link to="/testing/">Test</Link>
    </nav>
  );
}

export default MainMenu;
