import React from "react";

function Footer() {
  const firstYear = 2021;
  const currentYear = new Date().getFullYear();
  const copyrightInterval = firstYear === currentYear ? firstYear : `${firstYear} - ${currentYear}`;

  return (
    <>
      <div>&copy; Copyright {copyrightInterval} TBC-tutorials</div>
      <div>
        <span>If you want yours tutorial to be published, found a mistake or just want to reach to us pleas contact: </span>
        <a href="mailto:tbc-tutorials@gmail.com" target="_blank" rel="noreferrer">tbc-tutorials@gmail.com</a>
      </div>

    </>
  );
}

export default Footer;
