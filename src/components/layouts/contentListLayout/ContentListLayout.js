import React from "react";
import "./contentListLayout.scss";
import {AnchorLink} from "gatsby-plugin-anchor-links";
import headingToKebabCase from "../../../utils/headingToKebabCase";

function getComponentName(type) {
  return type.displayName || type.name || null;
}

function generateContentList(children) {
  let contentList = [];

  children.forEach((child) => {
    if (child.type) {

      if (getComponentName(child.type) === "Heading2") {
        contentList.push({
          text: child.props.children,
          children: []
        });
      }

      if (getComponentName(child.type) === "Heading3") {
        contentList[contentList.length - 1].children.push({
          text: child.props.children,
          children: []
        });
      }

      if (getComponentName(child.type) === "Heading4") {
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
  if (!children.length) {
    return (
      <div className="content">
        {children}
      </div>
    );
  }
  const title = children.find((child) => getComponentName(child.type) === "Title").props.children;
  const contentList = generateContentList(children);


  return (
    <>
      <div className="content">
        {children}
      </div>
      {contentList.length > 0 ?
        <div className="listOfContent" aria-hidden="true">
          <div className="listOfContentTitle">
            <AnchorLink
              to={`#${headingToKebabCase(title)}`}
              title={title}/>
          </div>
          {renderContentList(contentList)}
        </div> : null}
    </>
  );
}

export default ContentListLayout;
