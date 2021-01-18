import * as React from 'react';
import "./treeView.scss"
// import clsx from 'clsx';
// import PropTypes from 'prop-types';
// import TreeViewContext from './TreeViewContext';

function arrayDiff(arr1, arr2) {
  if (arr1.length !== arr2.length) return true;

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) return true;
  }

  return false;
}

const findNextFirstChar = (firstChars, startIndex, char) => {
  for (let i = startIndex; i < firstChars.length; i += 1) {
    if (char === firstChars[i]) {
      return i;
    }
  }
  return -1;
};

const defaultExpandedDefault = [];
const defaultSelectedDefault = [];

const TreeView = React.forwardRef(function TreeView(props, ref) {
  const {
    children,
    classes,
    className,
    defaultCollapseIcon,
    defaultEndIcon,
    defaultExpanded = defaultExpandedDefault,
    defaultExpandIcon,
    defaultParentIcon,
    defaultSelected = defaultSelectedDefault,
    disableSelection = false,
    multiSelect = false,
    expanded: expandedProp,
    onNodeSelect,
    onNodeToggle,
    selected: selectedProp,
    ...other
  } = props;


  return (
    <ul
      role="tree"
      aria-multiselectable={multiSelect}
      className="sideMenu"
      ref={ref}
      {...other}
    >
      {children}
    </ul>
  );

});

export default TreeView;
