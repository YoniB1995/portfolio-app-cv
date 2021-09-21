import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import Card from "../Contact/Card";
import {
  titlesEnglish,
  descriptionEnglish,
  images,
  githubLinks,
  website,
} from "./TypoProjects";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
const Header = styled.div`
  color: white;
  font-family: Georgia, "Times New Roman", Times, serif;
`;
const Body = styled.div`
  padding-top: 30rem;

  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  color: black;
`;

const CardsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
const BoxBlack = styled.div`
  display: flex;
  padding-top: 5rem;

  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media only screen and (min-width: 414px) and (max-width: 767px),
    (min-width: 412px) and (max-width: 767px),
    (min-width: 390px) and (max-width: 767px),
    (min-width: 428px) and (max-width: 767px),
    (min-width: 384px) and (max-width: 767px),
    (min-width: 360px) and (max-width: 767px) {
    display: flex;
    flex-wrap: nowrap;
  }
`;

const CardCSS = styled.div`
  width: 50%;
`;

export default function Contact() {
  const colorBlue = "#00e1ff";

  return (
    <BoxBlack className="animate__animated animate__backInDown">
      <Container>
        <Body>
          <Header>
            <h1>
              My Projects{" "}
              <FontAwesomeIcon
                icon={faProjectDiagram}
                color={colorBlue}
              ></FontAwesomeIcon>
            </h1>
          </Header>
          <CardsFlex>
            {images.map((image, i) => (
              <CardCSS>
                <Card
                  img={images[i]}
                  title={titlesEnglish[i]}
                  description={descriptionEnglish[i]}
                  githubLinks={githubLinks[i]}
                  websiteLink={website[i]}
                />
              </CardCSS>
            ))}
          </CardsFlex>
        </Body>
      </Container>
    </BoxBlack>
  );
}
