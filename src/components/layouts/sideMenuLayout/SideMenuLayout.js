import React from "react";
import "./sideMenuLayout.scss";
import ContentListLayout from "../contentListLayout/ContentListLayout";

function SideMenuLayout({children, sideMenu}) {
  return (
    <div className="body">
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
