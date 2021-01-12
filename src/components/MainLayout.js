import React from "react";
import "./mainLayout.scss";
import MainMenu from "./mainMenu/MainMenu";
import Footer from "./footer/Footer";

function MainLayout({children, name}) {
  return (
    <div className="layout">
      <header>
        <MainMenu/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default MainLayout;


