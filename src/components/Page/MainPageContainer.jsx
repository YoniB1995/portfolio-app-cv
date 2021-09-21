import React from "react";
import Homepage from "./Homepage";
import { MainPage } from "./ContainerCss";

const MainPageContainer = () => {
  return (
    <>
      <MainPage>
        <Homepage />
      </MainPage>
    </>
  );
};

export default MainPageContainer;
