import React from "react";
import MainLayout from "../components/layouts/mainLayout/MainLayout";

const IndexPage = (props) => {
  console.log('%c props:', 'color: rgb(49, 193, 27)', props);
  return (
    <MainLayout>
      index
    </MainLayout>
  );
};

export default IndexPage;
