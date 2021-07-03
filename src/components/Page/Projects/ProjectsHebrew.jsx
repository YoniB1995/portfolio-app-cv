import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import Card from '../Contact/Card'
import {images , titles , description} from './TypoProjects'


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
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
}
`
const BoxBlack = styled.div`
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
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
            <Card img={images[0]} title={titles[0]} description={description[0]} githubLinks={githubLinks[0]} websiteLink={website[0]}/>
            <Card img={images[1]} title={titles[1]} description={description[1]} githubLinks={githubLinks[1]} websiteLink={website[1]}/>
            <Card img={images[2]} title={titles[2]} description={description[2]} githubLinks={githubLinks[2]} websiteLink={website[2]}/>
            <Card img={images[3]} title={titles[3]} description={description[3]} githubLinks={githubLinks[3]} websiteLink={website[3]} />
            </CardsFlex>
            </Body>
        </Container>
        </BoxBlack>
    )
}
