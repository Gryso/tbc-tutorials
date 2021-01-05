import React from "react";
import "./item.scss"

const Item = ({children, quality = "epic"}) => {

  return (
    <span
      className={quality}
    >[{children}]</span>
  );
};

export default Item;

