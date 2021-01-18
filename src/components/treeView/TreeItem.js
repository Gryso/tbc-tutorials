/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions  */
import * as React from 'react';
import { Link } from "gatsby"
// import clsx from 'clsx';
// import PropTypes from 'prop-types';
// import Typography from '@material-ui/core/Typography';
// import Collapse from '@material-ui/core/Collapse';
// import { fade, withStyles, useTheme } from '@material-ui/core/styles';
// import { useForkRef } from '@material-ui/core/utils';
// import TreeViewContext from '../TreeView/TreeViewContext';
import icon from "../../images/icons/questIcons/daily.png";
import "./treeItem.scss";

const isPrintableCharacter = (str) => {
  return str && str.length === 1 && str.match(/\S/);
};

const TreeItem = React.forwardRef(function TreeItem(props, ref) {
  const {
    children,
    link,
    label,

    classes,
    className,
    collapseIcon,
    endIcon,
    expandIcon,
    icon: iconProp,
    nodeId,
    onClick,
    onLabelClick,
    onIconClick,
    onFocus,
    onKeyDown,
    onMouseDown,
    // TransitionComponent = Collapse,
    TransitionProps,
    ...other
  } = props;

  return (
    <li
      className="sideMenuItem"
      role="treeitem"
      // aria-expanded={expandable ? expanded : null}
      // ref={handleRef}
      // tabIndex={tabbable ? 0 : -1}
      // {...other}
    >
      <div
        className="neviemCo"
        // onClick={handleClick}
        // onMouseDown={handleMouseDown}
        // ref={contentRef}
      >
        {children ? <img
          className="sideMenuItemIcon"
          src={icon}
          alt="test"
          style={{
            width: "1em",
            height: "1em",
          }}/> : null}
        <span className="sideMenuItemLabel">
          {link ? <Link to={link}>{label}</Link> : label}
        </span>
      </div>
      {children && (
        <ul>
          {children}
        </ul>
        // <div
        //   // unmountOnExit
        //   // className={classes.group}
        //   // in={expanded}
        //   // component="ul"
        //   role="group"
        //   {...TransitionProps}
        // >
        //   {children}
        // </div>
      )}
    </li>
  );
});

export default TreeItem;
