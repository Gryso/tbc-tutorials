import React from "react";
import { Link } from "gatsby"
import "./mainMenu.scss"

function MainMenu() {
  return (
    <nav role="navigation" aria-label="Main" className="mainMenu">
      <Link to="/pve-tutorials/">PVE Tutorials</Link>
      <Link to="/pve-bis/">PVE BIS</Link>
      <Link to="/pvp-tutorials/">PVP Tutorials</Link>
      <Link to="/macros/">Macros</Link>
      <Link to="/attunements/">Attunements</Link>
      <Link to="/reputations/">Reputations</Link>
      <Link to="/professions/">Professions</Link>
      <Link to="/testing/">Test</Link>
    </nav>
  );
}

export default MainMenu;
