import React, { useState, useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";
import Homepage from "./Homepage";
import { UserProvider } from "../Context/Context";
import MediaCard from "../Features/MainPageCards/MediaCard";
import Footer from "../Features/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import {
  MainPage,
  NewDivBody,
  WelcomePage,
  MainPageHeaderLight,
  ImgCards,
  LetsStart,
  IconImages,
} from "./ContainerCss";

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
