import React from "react";

function Footer() {
  const firstYear = 2021
  const currentYear = new Date().getFullYear();
  const copyrightInterval = firstYear === currentYear ? firstYear : `${firstYear} - ${currentYear}`

  return (
    <>
      <div>&copy; Copyright {copyrightInterval} tbc-tutorials</div>
      <div>
        <span>If you want yours tutorial to be published or if You found a mistake pleas contact: </span>
        <a href="mailto:tbc-tutorials@gmail.com" target="_blank">tbc-tutorials@gmail.com</a>
      </div>

    </>
  );
}

export default Footer;


