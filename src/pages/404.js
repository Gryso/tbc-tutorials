import * as React from "react";
import MainLayout from "../components/layouts/mainLayout/MainLayout";

// styles
const pageStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexGrow: 1,
  flexDirection: "column",
  padding: "1em 0"
};

const NotFoundPage = () => {
  return (
    <MainLayout>
      <main style={pageStyle}>
        <h1>Page not Found</h1>
        <p>We are sorry be we could not find page you are looking for.</p>
      </main>
    </MainLayout>
  );
};

export default NotFoundPage;
