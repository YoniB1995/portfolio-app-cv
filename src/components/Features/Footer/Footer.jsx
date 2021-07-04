import React from 'react'
import styled from 'styled-components'
import {whatsappIcon,githubIcon,linkedinIcon, facebookIcon} from './FooterIcons'
import Links from '../Links/Links'

const FooterBody = styled.div` 
position:absolute;
bottom:0;
width:100vw;
background: linear-gradient(0deg, rgba(0,0,0,1) 46%, rgba(255,255,255,0) 90%);
display:flex;
justify-content: center;


img {
    height:30px;
    width:30px;
    margin:7px;

:hover{
    opacity:0.5;
    cursor: pointer;
}
}
`

export default function Footer() {
    
    const whatsapp = <a href="https://web.whatsapp.com/" target="_blank"><img src={whatsappIcon} alt="whatsapp_icon"/></a>;
    const github = <a href="https://github.com/YoniB1995" target="_blank"> <img src={githubIcon} alt="github_icon"/></a> ;
    const facebook = <a href="https://www.facebook.com/profile.php?id=100006574396023" target="_blank"> <img src={facebookIcon} alt="facebook_icon"/></a>;
    const linkedin = <a href="https://www.linkedin.com/in/yoni-bitew-955b971bb/" target="_blank"><img src={linkedinIcon} alt="linkedin_icon"/></a>;
    
    const links = [whatsapp , github , facebook , linkedin]
    return (
        <FooterBody>
           {links.map((index)=> <Links link={index}/>) }
           
        </FooterBody>
    )
}
