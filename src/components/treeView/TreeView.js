import React from "react";
import "./treeView.scss";
import useLocalStorage from "../../utils/useLocalStorage";
import TreeViewContext from "./TreeViewContext";

function TreeView({children, localStorageKey}) {

  const [state, setState] = useLocalStorage(localStorageKey, {});

  return (
    <TreeViewContext.Provider
      value={{
        state: state,
        setState: setState
      }}
    >
      <ul className="sideMenu">
        {children}
      </ul>
    </TreeViewContext.Provider>
  );
}

export default TreeView;
