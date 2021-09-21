import React, { useContext } from "react";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Stages from "../Stages";
import StagesHebrew from "../StagesHebrew";
import {} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { LanguageProvider } from "../../../Context/LanguageContext";

const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-basis: 50%;
  padding-top: 11rem;
`;
const Header = styled.h1``;
export default function LeftResumeHebrew() {
  const colorBlue = "#00e1ff";
  const changeLanguage = useContext(LanguageProvider);
  return (
    <LeftSide>
      <Header>
        {" "}
        קורות חיים{" "}
        <FontAwesomeIcon
          icon={faGraduationCap}
          color={colorBlue}
        ></FontAwesomeIcon>
      </Header>
      <CssBaseline />

      <Container maxWidth="sm"></Container>
      <Container maxWidth="sm">
        {changeLanguage ? <Stages /> : <StagesHebrew />}
      </Container>
    </LeftSide>
  );
}
