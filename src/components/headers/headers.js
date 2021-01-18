import React from "react";
import "./headers.scss";
import {AnchorLink} from "gatsby-plugin-anchor-links";
import anchor from "../../images/icons/anchorLink.svg";
import headingToKebabCase from "../../utils/headingToKebabCase";

export const Title = ({children}) => {
  const kebabCaseTitle = headingToKebabCase(children);

  return (
    <h1 id={kebabCaseTitle} className="contentHeading">
      <AnchorLink
        to={`#${kebabCaseTitle}`}
        title={children}
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

export const Heading2 = ({children}) => {
  const kebabCaseHeading = headingToKebabCase(children);

  return (
    <h2 id={kebabCaseHeading} className="contentHeading">
      <AnchorLink
        to={`#${kebabCaseHeading}`}
        title={children}
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

export const Heading3 = ({children}) => {
  const kebabCaseHeading = headingToKebabCase(children);

  return (
    <h3 id={kebabCaseHeading} className="contentHeading">
      <AnchorLink
        to={`#${kebabCaseHeading}`}
        title={children}
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

export const Heading4 = ({children}) => {
  const kebabCaseHeading = headingToKebabCase(children);

  return (
    <h4 id={kebabCaseHeading} className="contentHeading">
      <AnchorLink
        to={`#${kebabCaseHeading}`}
        title={children}
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
