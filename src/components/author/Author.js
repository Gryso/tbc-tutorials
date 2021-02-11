import React from "react";
import "./author.scss";

function Author({children, link}) {
  if (link) {
    return (
      <address className="author">By
      <a rel="author" href={link}>{children}</a>
    </address>
    );
  }

  return (
    <address className="author">By {children}</address>
  );
}

export default Author;
