import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import Details from "./Details";
import Skills from "./Skills";
import {
  imgGif,
  meArrHeb,
  meDetailsHeb,
  skillTypeHeb,
  skillsDescHeb,
} from "./AboutData";

export default function AboutMeHebrew() {
  return (
    <BoxBlack className="slide-in-fwd-center">
      <HeaderOne>
        מידע אישי <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>
      </HeaderOne>
      <MeBox>
        <div>
          <p>
            נולדתי וגדלתי בחדרה , בגרות מלאה במגמות גאוגרפיה ותושב''ע ( תורה
            שבעל פה ) . התגייסתי לצבא בשנת 2014 לחטיבה הקרבית כפיר ולאחר מכן
            שירתתי כמפקד וכקצין קרבי בתפקידי הפיקוד בחטיבה. בתפקיד האחרון שלי
            הייתי מפקד פלוגת טירונים בגדוד ברדלס וניהלתי למעלה מ120 לוחמים
            ולוחמות ו20 מפקדים. לאחרונה התחלתי ללמוד פיתוח תוכנה פולסטאק מתוך
            תשוקה ואהבה למקצוע.
          </p>
        </div>
        <div>
          <Details info={meArrHeb} details={meDetailsHeb} />
        </div>
      </MeBox>

      <HeaderTwo>תחומי התמחות</HeaderTwo>
      <FlexSmallBox>
        <Skills
          skillType={skillTypeHeb}
          imgGif={imgGif}
          skillsDesc={skillsDescHeb}
        />
      </FlexSmallBox>
    </BoxBlack>
  );
}

const HeaderOne = styled.h3`
  color: #09f1de94;
  position: relative;
  left: 0%;
  font-size: 50px;
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
  left: 30%;
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
  text-align: right;
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
