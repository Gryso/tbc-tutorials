import React from "react";
import "./talent.scss";

const Spell = ({children, id}) => {

  if (id) {
    return (
      <a className="talentLink talent" href={`https://tbc.cavernoftime.com/spell=${id}`}>
        {`[${children}]`}
      </a>
    );
  }

  return (
    <span className="talent">{`[${children}]`}</span>
  );
};

export default Spell;

