import React from "react";
import {Link} from "gatsby";
import rightArrow from "../../images/icons/rightArrow.svg";
import downArrow from "../../images/icons/downArros.svg";
import "./treeItem.scss";
import TreeViewContext from "./TreeViewContext";


function TreeItem({children, link, label}) {
  const handleClick = (treeViewContext) => {
    if (link) {
      return;
    }
    treeViewContext.setState({
      ...treeViewContext.state,
      [label]: !treeViewContext.state[label]
    });
  }

  return (
    <TreeViewContext.Consumer>
      {(treeViewContext) => (
        <li className="sideMenuItem">
          <div
            className="sideMenuHeader"
            role="button"
            tabIndex="0"
            onClick={() => {
              handleClick(treeViewContext)
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleClick(treeViewContext)
              }
            }}
          >
            {children ? <img
              className="sideMenuItemIcon"
              src={treeViewContext.state[label] ? downArrow : rightArrow}
              alt={treeViewContext.state[label] ? "unpack" : "pack"}
              style={{
                width: "1em",
                height: "1em",
              }} /> : null}
            <span className={`sideMenuItemLabel${children ? " hasChildren" : ""}`}>
              {link ? <Link to={link}>{label}</Link> : label}
            </span>
          </div>
          {children && treeViewContext.state[label] && (
            <ul>
              {children}
            </ul>
          )}
        </li>
      )}
    </TreeViewContext.Consumer>
  );
}

export default TreeItem;
