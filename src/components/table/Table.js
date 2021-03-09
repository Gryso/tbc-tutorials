import React from "react";
import "./table.scss";

const Table = ({children, cellAlign = "left", centerTable = true, fillFirstCell = false}) => {

  return (
    <table
      className={`simplePageTable ${cellAlign} ${centerTable ? "centerTable" : "leftTable"}${fillFirstCell ? " fillFirstCell" : ""}`}>
      {children}
    </table>

  );
};

export default Table;
