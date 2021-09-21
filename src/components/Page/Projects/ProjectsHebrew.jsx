import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import Card from "../Contact/Card";
import {
  images,
  titles,
  description,
  website,
  githubLinks,
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
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  }
`;
const BoxBlack = styled.div`
  height: 90vh;
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
              תיק העבודות שלי{" "}
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
                  title={titles[i]}
                  description={description[i]}
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
