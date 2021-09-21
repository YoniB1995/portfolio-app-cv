import React from "react";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Stages from "../Stages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-basis: 50%;
  padding-top: 10rem;
  @media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
  }
`;
const Header = styled.h1``;
export default function LeftResumePage() {
  const colorBlue = "#00e1ff";
  return (
    <LeftSide>
      <Header>
        {" "}
        Resume{" "}
        <FontAwesomeIcon
          icon={faGraduationCap}
          color={colorBlue}
        ></FontAwesomeIcon>
      </Header>
      <CssBaseline />
      <Container maxWidth="sm"></Container>
      <Container maxWidth="sm">
        <Stages></Stages>
      </Container>
    </LeftSide>
  );
}
