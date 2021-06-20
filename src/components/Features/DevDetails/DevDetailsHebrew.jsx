import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn , faFacebook , faGithub  } from '@fortawesome/free-brands-svg-icons';

const FontLinks = styled.span`
margin: 5px;
:hover{
    opacity: 0.5;
    border-radius: 75px;
    color: black;
    cursor: pointer;   
}

 @media only screen and (min-width: 414px) and (max-width: 767px),
  (min-width: 412px) and (max-width: 767px),
  (min-width: 390px) and (max-width: 767px),
  (min-width: 428px) and (max-width: 767px),
  (min-width: 384px) and (max-width: 767px),
  (min-width: 360px) and (max-width: 767px) {
      font-size: 40px;
      
  }
`

const ButtonCV = styled.div`
border: white 2px solid;
margin: 30px;
padding: 5px;
border-radius: 25px;
color: white;

:hover{
    opacity: 0.5;
    background: white;
    color: black;
    cursor: pointer;
    transition:1s ease-in-out ;
}

 @media only screen and (min-width: 414px) and (max-width: 767px),
  (min-width: 412px) and (max-width: 767px),
  (min-width: 390px) and (max-width: 767px),
  (min-width: 428px) and (max-width: 767px),
  (min-width: 384px) and (max-width: 767px),
  (min-width: 360px) and (max-width: 767px) {
      width:50%;
      position:relative;
      left:18%;
  }
`

const DevDetailsFont = styled.div`
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
             @media only screen and (min-width: 414px) and (max-width: 767px),
  (min-width: 412px) and (max-width: 767px),
  (min-width: 390px) and (max-width: 767px),
  (min-width: 428px) and (max-width: 767px),
  (min-width: 384px) and (max-width: 767px),
  (min-width: 360px) and (max-width: 767px) {
      display:flex;
      flex-direction:column; 
}      
@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    font-size:12px;
}
`
const Header =styled.h1`
font-size:30px;
`

export default function DevDetails() {
    const LinkedIn =
    <a href="https://www.linkedin.com/in/yoni-bitew-955b971bb/" target="_blanked">
        <FontAwesomeIcon icon={faLinkedinIn} color="white"/></a>
    const FaceBook =
    <a href="https://www.facebook.com/profile.php?id=100006574396023">
        <FontAwesomeIcon icon={faFacebook} color="white" /></a>
        
    const Github =
    <a href="https://github.com/YoniB1995">
        <FontAwesomeIcon icon={faGithub} color="white" /></a>

    return (
        <DevDetailsFont>      
     <Header>יוני ביטאו</Header>
     <p>מפתח אפליקציות פול-סטאק</p>
     <FontLinks>{LinkedIn}</FontLinks>
     <FontLinks>{FaceBook} </FontLinks>
     <FontLinks>{Github}</FontLinks>
     <ButtonCV>להורדת קו''ח לחץ כאן</ButtonCV>
        </DevDetailsFont>
    )
}
