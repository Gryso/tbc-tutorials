import React from "react";
import { Link } from "gatsby"
import "./mainMenu.scss"

function MainMenu({children, name}) {
  return (
    <nav role="navigation">
      <Link to="/macros/">Macros</Link>
      <Link to="/bis/">BIS</Link>
      <Link to="/attunements/">Attunements</Link>
      {/*<Link to="/reputations/">Reputations</Link>*/}
      {/*<Link to="/guides/">Class guides</Link>*/}
      {/*<Link to="/professions/">Professions</Link>*/}
      <Link to="/testing/">Test</Link>
    </nav>
  );
}

export default MainMenu;
