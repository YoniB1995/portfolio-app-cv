import React from "react";
import styled from "styled-components";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import Details from "./Details";
import Skills from "./Skills";
import {
  communication,
  personalQualifications,
  teamManagement,
  webDesign,
  color,
  imgGif,
  meArr,
  meDetails,
  skillType,
  skillsDesc,
} from "./AboutData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutMeEnglish() {
  return (
    <BoxBlack className="slide-in-fwd-center">
      <HeaderOne>
        Personal Information{" "}
        <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>
      </HeaderOne>
      <MeBox>
        <p>
          Born and raised in Hadera. Earned a Matriculation Certificate with
          degrees in Geography and Oral LAW.
          <br />
          Joined the Army in 2014. Joined the "Kfir" Battle Brigade. Became an
          Officer Commander managing over 120 Soldiers and 20 commanders.
          <br />
          In December 2020 , started a Web Develepor Program to earn a degree as
          a Fullstack Web Developer
        </p>
        <div>
          <Details info={meArr} details={meDetails} />
        </div>
      </MeBox>

      <HeaderTwo>Qualifications</HeaderTwo>
      <FlexSmallBox>
        <Skills skillType={skillType} imgGif={imgGif} skillsDesc={skillsDesc} />
      </FlexSmallBox>
    </BoxBlack>
  );
}

const HeaderOne = styled.h3`
  color: #09f1de94;
  position: relative;
  right: 0;
  font-size: 40px;
  font-weight: 700;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  @media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
    position: static;
  }
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
    position: relative;

    font-size: 40px;
  }
`;
const HeaderTwo = styled.h3`
  color: #09f1de94;
  position: relative;
  right: 20%;
  font-size: 30px;
  font-weight: 700;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  @media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
    text-align: left;
    right: 0%;
    left: 35%;
  }
`;
const MeBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  text-align: left;
  justify-content: space-around;
  div {
    margin: 5px;
  }
  p {
    margin: 5%;
  }
  @media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    div {
      text-align: center;
    }
  }
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
    div {
      margin: 1px;
    }

    p {
      margin: 2px;
      padding: 5px;
    }
  }
`;
const FlexSmallBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  flex-direction: row;
  flex-wrap: wrap;
`;
const BoxBlack = styled.div`
  height: 90vh;
  padding-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 15px;
  @media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: auto;
  }

  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
    height: 100%;
  }
`;
