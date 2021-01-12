import React from "react";
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const SimpleMacro = (props) => {

  return (
    <>
      <h4>{props.name}</h4>
      <div>{props.description}</div>
      {/*<CodeBlock*/}
      {/*  text={props.text}*/}
      {/*  language={"lua"}*/}
      {/*  theme={dracula}*/}
      {/*  showLineNumbers={false}*/}
      {/*  wrapLongLines={true}*/}
      {/*  wrapLines={true}*/}
      {/*  customStyle={{*/}
      {/*    lineHeight: "1.125em",*/}
      {/*    paddingRight: "40px",*/}
      {/*    // minHeight: "3em"*/}
      {/*  }}*/}
      {/*/>*/}
      <pre style={{
        whiteSpace: "pre-wrap"
      }}>{props.text}</pre>

      <CopyToClipboard text={props.text} onCopy={() => console.log("copy")}>
        <span>Copy</span>
      </CopyToClipboard>
    </>
  );
};

export default SimpleMacro;
