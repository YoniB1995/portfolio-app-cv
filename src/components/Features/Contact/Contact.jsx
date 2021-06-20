import React , {useContext} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LanguageConsumer } from '../Context/LanguageContext';
import { faEnvelope  } from 
'@fortawesome/free-solid-svg-icons';

import ContactBody from './ContactBody'
import ContactBodyHebrew from './ContactBodyHebrew'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 90vh;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: 16px;
`
const Header = styled.div`
color: white;
font-family:Georgia, 'Times New Roman', Times, serif;
`
const Body = styled.div`

`

const Footer = styled.div`
flex-basis:30%;
`




export default function Contact() {
    const color = "#1bb9c7"
    const changeLanguage = useContext(LanguageConsumer).isTrue
    return (
        <Container className="slide-in-fwd-center">
            <Header>
                {changeLanguage? <h1>צור קשר <FontAwesomeIcon icon={faEnvelope} color={color} /></h1> : <h1>Contact Me <FontAwesomeIcon icon={faEnvelope} color={color} /></h1> }
            </Header>
            
            <Body>
            
            {changeLanguage? <ContactBodyHebrew/> : <ContactBody/>}
            
            </Body>
            <Footer>
               </Footer>
        </Container>
    )
}
