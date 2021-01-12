import React from "react";
import "./item.scss";

const Item = ({children, id, quality = "epic"}) => {

  if (id) {
    return (
      <a className={`itemLink ${quality}`} href={`https://tbc.cavernoftime.com/item=${id}`}>
        {`[${children}]`}
      </a>
    );
  }

  return (
    <span className={quality}>[{children}]</span>
  );
};

export default Item;

