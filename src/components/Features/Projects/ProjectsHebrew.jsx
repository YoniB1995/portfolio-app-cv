import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
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
    const images = ["/images/projectCSS.png","/images/moviesProject.png","/images/travelWebProject.png","/images/userApiApp.png"];
    const titles = [" עיצוב אפליקציית אימונים CSS ","פרוייקט אתר סרטים","פרוייקט אתר טיולים","משיכת מידע של משתמשים מהשרתים"]
    const description = [
        "פרוייקט עיצוב שנועד להציג יכולות שיכולים להוציא בעבודה קצרה וצמצום של שורות קוד",
        "פרוייקט אתר סרטים שנוצר עם שימוש בפלטפורמת ריאקט , כולל בתוכו שימוש ב''ראוטינג'' ומשיכת מידע משרתים נוספים ",
        "פרוייקט אתר טיולים שנוצר באמצעות עיצוב מסוג ''גריד'' , בלי הרבה דינאמיות ",
        "פרוייקט של טק קריירה שנועד למשוך מידע של משתמשים משרתים"]

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
