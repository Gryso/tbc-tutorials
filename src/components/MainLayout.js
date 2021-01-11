import React from "react";
import "./mainLayout.scss"
import MainMenu from "./MainMenu";

function MainLayout({children, name}) {
  return (
    <div style={{margin: `0 auto`, maxWidth: 650, padding: `0 1rem`}} className="layout">
      <header>
        <MainMenu/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <div>&copy; Copyright 2021 - {new Date().getFullYear()} tbc-tutorials</div>
        <div>
          <span>If you want yours tutorial to be published or if You found a mistake pleas contact: </span>
          <a href="mailto:tbc-tutorials@gmail.com" target="_blank">tbc-tutorials@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;


