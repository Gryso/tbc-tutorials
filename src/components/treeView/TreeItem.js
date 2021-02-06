import * as React from 'react';
import {Link} from "gatsby";
import rightArrow from "../../images/icons/rightArrow.svg";
import downArrow from "../../images/icons/downArros.svg";
import "./treeItem.scss";
import TreeViewContext from "./TreeViewContext";


function TreeItem({children, link, label}) {
  return (
    <TreeViewContext.Consumer>
      {(treeViewContext) => (
        <li className="sideMenuItem">
          <div
            className="sideMenuHeader"
            role="button"
            onClick={() => {
              if (link) {
                return;
              }
              treeViewContext.setState({
                ...treeViewContext.state,
                [label]: !treeViewContext.state[label]
              });
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
            <span className="sideMenuItemLabel">
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
