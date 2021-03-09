import React from "react";
import "./contentListLayout.scss";
import {AnchorLink} from "gatsby-plugin-anchor-links";
import headingToKebabCase from "../../../utils/headingToKebabCase";
import {Heading2, Heading3, Heading4} from "../../headers/headers";
import SimpleMacro from "../../macro/SimpleMacro";

function getComponentName(type) {
  return type.displayName || type.name || null;
}

function generateContentList(children) {
  let contentList = [];
  children.forEach((child) => {
    if (child.type) {
      let componentName = getComponentName(child.type);

      if (componentName === SimpleMacro.name) {
        componentName = Heading4.name;
      }

      if (componentName === Heading2.name) {
        contentList.push({
          content: child.props.children,
          anchorId: child.props.anchorId,
          name: componentName,
          children: []
        });
      }

      if (componentName === Heading3.name || componentName === Heading4.name) {
        let parent = contentList;

        while (parent[parent.length - 1] && parent[parent.length - 1].name < componentName) {
          parent = parent[parent.length - 1].children;
        }

        (parent.children || parent).push({
          content: child.props.children || child.props.name, // because of macro,
          anchorId: child.props.anchorId,
          name: componentName,
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
            {item.children.length > 0 ? renderContentList(item.children) : null}
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

  const contentList = generateContentList(children);

  return (
    <>
      <article className="content">
        {children}
      </article>
      {contentList.length > 0 ?
        <div className="listOfContent" aria-hidden="true">
          {renderContentList(contentList)}
        </div> : null}
    </>
  );
}

export default ContentListLayout;
