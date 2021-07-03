import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import Card from '../Contact/Card'
import {titlesEnglish, descriptionEnglish , images} from './TypoProjects'


const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

`
const Header = styled.div`
color: white;
font-family:Georgia, 'Times New Roman', Times, serif;
`
const Body = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap:wrap;
color: black;
`


const CardsFlex = styled.div` 
display: flex;
flex-wrap:wrap;
flex-direction: row;

`
const BoxBlack = styled.div`
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
@media only screen and (min-width: 414px) and (max-width: 767px),
  (min-width: 412px) and (max-width: 767px),
  (min-width: 390px) and (max-width: 767px),
  (min-width: 428px) and (max-width: 767px),
  (min-width: 384px) and (max-width: 767px),
  (min-width: 360px) and (max-width: 767px) {
      
      display:flex;
      flex-wrap:nowrap;
  }
   
`

export default function Contact() {
    const colorBlue = "#00e1ff"
    const githubLinks = ["https://github.com/YoniB1995/workout_Layout_App","https://github.com/YoniB1995/react_Movies_Project/tree/main","https://github.com/YoniB1995/traveling_Website_v2","https://github.com/YoniB1995/userAPI_Project"]
    const website = ["https://yonib1995.github.io/workout_Layout_App/","https://yonib1995.github.io/react_Movies_Project/","https://yonib1995.github.io/traveling_Website_v2/","https://yonib1995.github.io/userAPI_Project/"]
    return (
        <BoxBlack className="animate__animated animate__backInDown">
        <Container>
            <Header> 
                <h1>My Projects <FontAwesomeIcon icon={faProjectDiagram} color={colorBlue}></FontAwesomeIcon></h1>
            </Header>
            <Body>
            <CardsFlex>
                
            <Card img={images[0]} title={titlesEnglish[0]} description={descriptionEnglish[0]} githubLinks={githubLinks[0]} websiteLink={website[0]}/>
            <Card img={images[1]} title={titlesEnglish[1]} description={descriptionEnglish[1]} githubLinks={githubLinks[1]} websiteLink={website[1]} />
            <Card img={images[2]} title={titlesEnglish[2]} description={descriptionEnglish[2]} githubLinks={githubLinks[2]} websiteLink={website[2]} />
            <Card img={images[3]} title={titlesEnglish[3]} description={descriptionEnglish[3]} githubLinks={githubLinks[3]} websiteLink={website[3]} />
            </CardsFlex>
            </Body>   
        </Container>
        </BoxBlack>
    )
}
