import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import Card from '../Contact/Card'



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
    const images = ["/images/projectCSS.png","/images/moviesProject.png","/images/travelWebProject.png","/images/userApiApp.png"];
    const titles = ["CSS Layout Workout App","Movies Website Site","Travelling Website Site","User API Project"]
    const description = [
        "CSS Project layout made to showcase the Design output that can be made with CSS.",
        "Movies Project i made using React Platform , Involving Routing and API Servers from movies website. ",
        "Travelling Project i made using grid layout.",
        "User API Project made for Tech-Career Academy."]
        
    return (
        <BoxBlack className="animate__animated animate__backInDown">
        <Container>
            <Header> 
                <h1>My Projects <FontAwesomeIcon icon={faProjectDiagram} color={colorBlue}></FontAwesomeIcon></h1>
            </Header>
            <Body>
            <CardsFlex>
            <Card img={images[0]} title={titles[0]} description={description[0]}/>
            <Card img={images[1]} title={titles[1]} description={description[1]}/>
            <Card img={images[2]} title={titles[2]} description={description[2]}/>
            <Card img={images[3]} title={titles[3]} description={description[3]}/>
            </CardsFlex>
            </Body>   
        </Container>
        </BoxBlack>
    )
}
