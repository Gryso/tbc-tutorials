import React from "react";
// import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";
import {CopyToClipboard} from "react-copy-to-clipboard";
import "./simpleMacro.scss";
import Button from "../button/Button";
import {Heading3} from "../headers/headers";

const SimpleMacro = (props) => {

  return (
    <div className="simpleMacro">
      <Heading3>{props.name}</Heading3>
      <p>{props.description}</p>
      <div className="macroCodeWrapper">
        <pre className="macroCode">
          {props.text}
        </pre>
      </div>

      <CopyToClipboard text={props.text} onCopy={() => console.log("copy")}>
        <Button>Copy</Button>
      </CopyToClipboard>
    </div>
  );
};

export default SimpleMacro;
