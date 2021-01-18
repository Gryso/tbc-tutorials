import React from "react";
import "./contentListLayout.scss";
import {AnchorLink} from "gatsby-plugin-anchor-links";
import headingToKebabCase from "../../../utils/headingToKebabCase";

function generateContentList(children) {
  let contentList = [];

  children.forEach((child) => {
    if (child.type) {

      if (child.type.name === "Heading2") {
        contentList.push({
          text: child.props.children,
          children: []
        });
      }

      if (child.type.name === "Heading3") {
        contentList[contentList.length - 1].children.push({
          text: child.props.children,
          children: []
        });
      }

      if (child.type.name === "Heading4") {
        contentList[contentList.length - 1].children[contentList.length - 1].children.push({
          text: child.props.children,
          children: []
        });
      }
    }
  });

  return contentList;
}

function renderContentList(contentList) {
  return (
    <ul>
      {contentList.map((item, index) => {
        return (
          <li key={index}>
            <AnchorLink
              to={`#${headingToKebabCase(item.text)}`}
              title={item.text}/>
            {item.children.length > 0 && renderContentList(item.children)}
          </li>
        );
      })}
    </ul>
  );
}

function ContentListLayout({children}) {

  return (
    <>
      <div className="content" >
        {children}
      </div>
      <div className="listOfContent" aria-hidden="true">
        <div className="listOfContentTitle">
          <AnchorLink
            to={`#${headingToKebabCase(children[0].props.children)}`}
            title={children[0].props.children}/>
        </div>
        {renderContentList(generateContentList(children))}
      </div>
    </>
  );
}

export default ContentListLayout;
