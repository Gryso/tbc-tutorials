import React from "react";
import "./author.scss";

function Author({children, link, server}) {
  if (link) {
    return (
      <address className="author">
        {`By `}
        <a rel="author" href={link}>{children}</a>
        {server ? ` of ${server}` : null}
      </address>
    );
  }

  return (
    <address className="author">By {children}{server ? ` of ${server}` : null}</address>
  );
}

export default Author;
