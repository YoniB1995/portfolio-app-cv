import styled from "styled-components";

const techIcon = (
  <a href="https://tech-career-alternative.firebaseapp.com/" type="_blank">
    <img
      src="images/INDI_COM.png"
      alt="tech career logo"
      width="180px"
      height="300px"
      className="headerImgOne"
    />{" "}
  </a>
);
const jacobIcon = (
  <a href="https://www.chapters.indigo.ca/en-ca/?fdtcm=1" type="_blank">
    <img
      src="images/טק_קריירה.png"
      alt="indi com logo"
      width="180px"
      height="150px"
      className="headerImgTwo"
      style={{ borderRadius: "50%", border: "solid 1px black" }}
    />
  </a>
);

const Header = styled.header`
  position: absolute;
  width: 100vw;
  top: 0;
  .headerImgOne {
    position: absolute;
    left: 5%;
    :hover {
      opacity: 0.5;
    }
  }
  .headerImgTwo {
    position: absolute;
    right: 5%;
    :hover {
      opacity: 0.5;
    }
  }
`;

const Body = styled.div`
  flex-basis: 80%;

  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const BlackBox = styled.div`
  background-color: #202020;
  border-radius: 25px;
  position: absolute;
  width: 50%;
  height: 100%;
  height: fit-content;
  left: 25%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: auto;
  top: 5%;
  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 25px;
    border-top-left-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 25px;
    border-top-left-radius: 25px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  @media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    right: 0%;
    left: 0%;
    top: 25%;
    bottom: 0%;
    border-radius: 0;
  }
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
    height: 100%;
    top: 0%;
    button {
      font-size: 11px;
    }
  }
`;

const GreyBox = styled.div`
  background-color: #5758589f;
  border: 1px solid black;
  position: absolute;
  color: white;
  left: 25%;
  top: 5%;
  border-radius: 25px;
  width: 13%;
  height: 90%;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
    background: grey;
    left: 15%;
    height: 100%;
    top: 0%;
    button {
      font-size: 11px;
    }
  }

  @media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
    background-color: rgb(109, 175, 220);
    color: white;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 90%;
    left: 0;
    bottom: 0;
    border-radius: 0;
    color: black;

    img {
      border-radius: 50%;
      width: 50%;
    }

    button {
      width: 50%;
    }
  }
`;
const UserCardDetails = styled.div`
  transform: translateX(15%);
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  flex-basis: 65%;

  @media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
    transform: translateX(0%);
  }
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
    flex-direction: row;
    flex-basis: 90%;
    transform: translateX(5%);
  }
`;
const ProfileImg = styled.img`
  border-radius: 75px;
  border: 1px solid black;
  box-shadow: black 2px 2px 2px;
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
    border-radius: 50%;
    height: 150px;
    width: 150px;
  }
`;

const Copyright = styled.span`
  font-size: 12px;
  font-family: "Courier New", Courier, monospace;
  position: absolute;
  bottom: 5%;
  @media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
    bottom: 1%;
  }
`;
const Navbar = styled.div`
  position: absolute;
  border-radius: 40px;
  margin: 10px;
  width: 60px;
  top: 9%;
  right: 19%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #0a0909;
  border: 1px solid black;

  @media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    right: 0;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
  }
`;

const NavbarGif = styled.span`
  font-size: 25px;
  padding: 5px;
  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
  :hover span {
    visibility: visible;
    transition: 0.5s ease-in-out;
    opacity: 1;
    background: black;
    color: white;
  }

  @media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
    padding: 0;
    font-size: 25px;
  }
`;
const DivTest = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  span {
    visibility: hidden;
    width: 100px;
    background-color: black;
    color: #7e1717;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    font-size: 15px;

    position: absolute;
    bottom: 1px;
    left: 15px;
  }
  @media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
    padding: 0;
    left: 0%;
    right: 0%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      visibility: hidden;
      width: 100px;
      background-color: white;
      color: black;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;
      font-size: 15px;
      height: 30px;
      position: absolute;
      top: 20px;
      left: -10px;
    }
  }
`;

export {
  Header,
  Body,
  BlackBox,
  GreyBox,
  UserCardDetails,
  ProfileImg,
  Copyright,
  Navbar,
  NavbarGif,
  DivTest,
  techIcon,
  jacobIcon,
};
