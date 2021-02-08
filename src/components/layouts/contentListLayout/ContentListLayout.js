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
      let componentName = getComponentName(child.type);

      if (componentName === "Heading2") {
        contentList.push({
          content: child.props.children,
          anchorId: child.props.anchorId,
          children: []
        });
      }

      if (componentName === "Heading3" || componentName === "SimpleMacro") {
        let parent = contentList[contentList.length - 1] || contentList;
        let parentChildren = parent.children || parent;

        parentChildren.push({
          content: child.props.children,
          anchorId: child.props.anchorId,
          children: []
        });
      }

      if (componentName === "Heading4") {
        let parent = contentList[contentList.length - 1].children[contentList.length - 1]
          || contentList[contentList.length - 1]
          || contentList;
        let parentChildren = parent.children || parent;

        parentChildren.push({
          content: child.props.children,
          anchorId: child.props.anchorId,
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
              to={`#${headingToKebabCase(item.anchorId || item.content)}`}
              title={item.anchorId || item.content}
            >
              {item.content}
            </AnchorLink>
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
  console.log('%c contentList:', 'color: rgb(49, 193, 27)', contentList);


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
              title={title} />
          </div>
          {renderContentList(contentList)}
        </div> : null}
    </>
  );
}

export default ContentListLayout;
