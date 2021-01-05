import React from "react";
import { Link } from "gatsby"
import "./mainLayout.scss"

function MainLayout({children, name}) {
  return (
    <div style={{margin: `0 auto`, maxWidth: 650, padding: `0 1rem`}} className={"layout"}>
      <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to="/macros/">Macros</Link>
        <Link to="/bis/">BIS</Link>
        <Link to="/attunements/">Attunements</Link>
        <Link to="/reputations/">Reputations</Link>
        <Link to="/guides/">Class guides</Link>
        <Link to="/professions/">Professions</Link>
      </li>
      {children}
    </div>
  );
}

export default MainLayout;


