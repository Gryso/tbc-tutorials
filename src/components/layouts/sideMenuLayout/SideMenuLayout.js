import React from "react";
import "./sideMenuLayout.scss";
import ContentListLayout from "../contentListLayout/ContentListLayout";
const backgroundImage = require("../../../images/bg_obrazok.png");

function SideMenuLayout({children, sideMenu}) {
  return (
    <div className="body" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "center bottom",
      backgroundAttachment: "fixed",
      backgroundSize: "auto 800px",
      backgroundRepeat: "no-repeat"

    }}>
      {/*role="complementary*/}
      {/*role="navigation"*/}
      {/*aria-label="sub-menu"*/}
      {sideMenu()}
      <main>
        <ContentListLayout>
          {children}
        </ContentListLayout>
      </main>
    </div>
  );
}

export default SideMenuLayout;
