import React from "react";
import "./mainLayout.scss";
import MainMenu from "../../menus/mainMenu/MainMenu";
import Footer from "../../footer/Footer";
import SEO from "../../seo";

function MainLayout({children, pageTitle}) {
  return (
    <div className="layout">
      <SEO title={pageTitle ? `${pageTitle} | TBC-tutorials` : "TBC-tutorials"}/>
      <header>
        <MainMenu/>
      </header>
      {children}
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default MainLayout;
