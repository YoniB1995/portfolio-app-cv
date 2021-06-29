import React , {useState,useContext} from 'react'
import styled from 'styled-components'
import {ProgressBar} from 'react-bootstrap'
import RightResumePage from './RightResumePage'
import LeftResumePage from './LeftSide/LeftResumePage'
import LeftResumeHebrew from './LeftSide/LeftResumeHebrew'
import Certificate from './Certificate'
import CertificateHebrew from './CertificateHebrew'
import { LanguageConsumer } from '../../Context/LanguageContext';

const ResumePage = styled.div`
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 
`
const Container = styled.div`
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
     flex-direction: column;
  }

  
`

const Footer = styled.div`
bottom: 0;
height: 30px;
@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    height:10px;
    bottom:0;
}
`
export default function Resume() {
      const now = 80;
 <ProgressBar now={80} label={`${now}%`} />
    const changeLanguage =useContext(LanguageConsumer).isTrue

    return (
        <ResumePage className="slide-in-fwd-center">
            <Container>
                {changeLanguage? <LeftResumeHebrew/> :<LeftResumePage/> }
                <RightResumePage/>
            </Container>
            <Footer>{changeLanguage? <CertificateHebrew/> : <Certificate/> }</Footer>
           
        </ResumePage>
    )
}
