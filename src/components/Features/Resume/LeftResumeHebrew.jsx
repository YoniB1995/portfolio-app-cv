import React , { Component , useState,useContext } from 'react';
import styled from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Stages from './Stages'
import StagesHebrew from './StagesHebrew'
import {  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { LanguageProvider} from '../Context/LanguageContext'


const LeftSide = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
flex-basis: 50%;
 
`
const Header = styled.h1`

`
export default function LeftResumeHebrew() {
    const HeaderMovement = <><br /><br /><br /><br /><br /></>;
    const colorBlue = "#00e1ff"
    const changeLanguage = useContext(LanguageProvider)
    return (
        
        <LeftSide>
            {HeaderMovement}
            
            <Header> קורות חיים <FontAwesomeIcon icon={faGraduationCap} color={colorBlue}></FontAwesomeIcon></Header>
            <CssBaseline />
                
                <Container maxWidth="sm">
                    
                    
                </Container>
                <Container maxWidth="sm">
                   {changeLanguage?<Stages/>: <StagesHebrew/> } 
                    
                </Container>
               
                 
        </LeftSide>
        
    )
}
