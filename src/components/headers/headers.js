import React from "react";
import "./headers.scss";
import {AnchorLink} from "gatsby-plugin-anchor-links";
import anchor from "../../images/icons/anchorLink.svg";
import headingToKebabCase from "../../utils/headingToKebabCase";

export const Title = ({children, align = "center", anchorId}) => {
  const kebabCaseTitle = anchorId || headingToKebabCase(children);

  return (
    <h1 id={kebabCaseTitle} className={`contentHeading title ${align}Align`}>
      <AnchorLink
        to={`#${kebabCaseTitle}`}
        title={kebabCaseTitle}
        className="anchorIcon"
        gatsbyLinkProps={{
          "aria-label": `${children} title permalink`
        }}>
        <img aria-hidden="true" src={anchor} alt="anchorLink" height="0.625rem"/>
      </AnchorLink>
      {children}
    </h1>
  );
};

export const Heading2 = ({children, align = "left", anchorId}) => {
  const kebabCaseHeading = anchorId || headingToKebabCase(children);

  return (
    <h2 id={kebabCaseHeading} className={`contentHeading ${align}Align`}>
      <AnchorLink
        to={`#${kebabCaseHeading}`}
        title={kebabCaseHeading}
        className="anchorIcon"
        gatsbyLinkProps={{
          "aria-label": `${children} title permalink`
        }}>
        <img aria-hidden="true" src={anchor} alt="anchorLink" height="0.625rem"/>
      </AnchorLink>
      {children}
    </h2>
  );
};

export const Heading3 = ({children, align = "left", anchorId}) => {
  const kebabCaseHeading = anchorId || headingToKebabCase(children);

  return (
    <h3 id={kebabCaseHeading} className={`contentHeading ${align}Align`}>
      <AnchorLink
        to={`#${kebabCaseHeading}`}
        title={kebabCaseHeading}
        className="anchorIcon"
        gatsbyLinkProps={{
          "aria-label": `${children} title permalink`
        }}>
        <img aria-hidden="true" src={anchor} alt="anchorLink" height="0.625rem"/>
      </AnchorLink>
      {children}
    </h3>
  );
};

export const Heading4 = ({children, align = "left", anchorId}) => {
  const kebabCaseHeading = anchorId || headingToKebabCase(children);

  return (
    <h4 id={kebabCaseHeading} className={`contentHeading ${align}Align`}>
      <AnchorLink
        to={`#${kebabCaseHeading}`}
        title={kebabCaseHeading}
        className="anchorIcon"
        gatsbyLinkProps={{
          "aria-label": `${children} title permalink`
        }}>
        <img aria-hidden="true" src={anchor} alt="anchorLink" height="0.625rem"/>
      </AnchorLink>
      {children}
    </h4>
  );
};
