import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'

const StarIcon = styled.span` 
margin: 5px;
`

const BoxBlack = styled.div`
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
@media only screen and (min-width: 414px) and (max-width: 767px),
  (min-width: 412px) and (max-width: 767px),
  (min-width: 390px) and (max-width: 767px),
  (min-width: 428px) and (max-width: 767px),
  (min-width: 384px) and (max-width: 767px),
  (min-width: 360px) and (max-width: 767px) {
      display:flex;
      width: 100vw;
  }
`


export default function FirstPageEnglish() {
    
    return (
        <BoxBlack className="slide-in-fwd-center">
            <h1 className="animate_animated animate__backInUp">יוני ביטאו</h1> 
        <h3>מפתח אפליקציות פול-סטאק</h3> 
            
            <span><StarIcon><FontAwesomeIcon icon={faCertificate}></FontAwesomeIcon></StarIcon>
            <StarIcon><FontAwesomeIcon icon={faCertificate}></FontAwesomeIcon></StarIcon>
            <StarIcon><FontAwesomeIcon icon={faCertificate}></FontAwesomeIcon></StarIcon>
            <StarIcon><FontAwesomeIcon icon={faCertificate}></FontAwesomeIcon></StarIcon>
            <StarIcon><FontAwesomeIcon icon={faCertificate}></FontAwesomeIcon></StarIcon>
            </span>
            
        </BoxBlack> 
    )
}
