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
`


export default function FirstPageHebrew() {
    return (
        <BoxBlack className="slide-in-fwd-center">
            <h1>Yoni Bitew</h1>
        <h3>Full-Stack Web Developer</h3> 
            
            <span><StarIcon><FontAwesomeIcon icon={faCertificate}></FontAwesomeIcon></StarIcon>
            <StarIcon><FontAwesomeIcon icon={faCertificate}></FontAwesomeIcon></StarIcon>
            <StarIcon><FontAwesomeIcon icon={faCertificate}></FontAwesomeIcon></StarIcon>
            <StarIcon><FontAwesomeIcon icon={faCertificate}></FontAwesomeIcon></StarIcon>
            <StarIcon><FontAwesomeIcon icon={faCertificate}></FontAwesomeIcon></StarIcon>
            </span>
            
        </BoxBlack> 
    )
}
