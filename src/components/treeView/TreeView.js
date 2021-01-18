import * as React from 'react';
import "./treeView.scss"
import useLocalStorage from "../../utils/useLocalStorage";
import TreeViewContext from "./TreeViewContext";

function TreeView({children, LSKey}) {

  const [state, setState] = useLocalStorage(LSKey, {})

  return (
    <TreeViewContext.Provider
      value={{
        state: state,
        setState: setState
      }}
    >
      <ul
        role="tree"
        className="sideMenu"
      >
        {children}
      </ul>
    </TreeViewContext.Provider>
  );
}

export default TreeView;
