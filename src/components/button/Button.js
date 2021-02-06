import * as React from 'react';
import "./button.scss";

function Button({children}) {

  return (
    <button className="tbcStyledButton">
      <div className="green">
        {children}
        <div className="light" />
      </div>
    </button>
  );
}

export default Button;
