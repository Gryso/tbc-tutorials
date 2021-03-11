import React from "react";
import "./table.scss";

const Table = ({
                 children,
                 cellAlign = "left",
                 centerTable = true,
                 fillFirstCell = false,
                 leftAlignFirstColumn = false
               }) => {

  return (
    <table
      className={`simplePageTable ${cellAlign} ${centerTable ? "centerTable" : "leftTable"}${fillFirstCell ? " fillFirstCell" : ""}${leftAlignFirstColumn ? " leftAlignFirstColumn" : ""}`}>
      {children}
    </table>
  );
};

export default Table;
