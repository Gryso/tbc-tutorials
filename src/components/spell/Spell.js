import React from "react";
import "./spell.scss";

const Spell = ({children, id}) => {

  if (id) {
    return (
      <a className="spellLink spell" href={`https://tbc.cavernoftime.com/spell=${id}`}>
        {`[${children}]`}
      </a>
    );
  }

  return (
    <span className="spell">{`[${children}]`}</span>
  );
};

export default Spell;

