import React from "react";
import {Link} from "gatsby";
import "./mainMenu.scss";
import Logo from "../../logo/Logo";

function MainMenu() {
  return (
    <div  className="mainMenu">
      <Logo />
      <nav role="navigation" aria-label="Main">
        <Link to="/pve-tutorials/">PvE Tutorials</Link>
        <Link to="/stats-and-mechanics/">Stats and Mechanics</Link>
        <Link to="/pve-bis/">PvE BIS</Link>
        <Link to="/pvp-tutorials/">PvP Tutorials</Link>
        <Link to="/macros/">Macros</Link>
        <Link to="/reputations/">Reputations</Link>
        <Link to="/testing/">Test</Link>
      </nav>
    </div>
  );
}

export default MainMenu;
