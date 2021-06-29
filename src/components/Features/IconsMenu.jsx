import React, { useContext } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome , faUser , faGraduationCap , faProjectDiagram ,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {UserConsumer} from '../Context/Context'


const Navbar = styled.div`
position: absolute;
border-radius: 40px;
margin: 10px;
width: 60px;
top:9%;
right: 19%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: #0a0909;
border: 1px solid black;

@media only screen and (min-width: 414px) and (max-width: 767px),
  (min-width: 412px) and (max-width: 767px),
  (min-width: 390px) and (max-width: 767px),
  (min-width: 428px) and (max-width: 767px),
  (min-width: 384px) and (max-width: 767px),
  (min-width: 360px) and (max-width: 767px) {
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
width:100%;
right:0;
left:0;
top:0;
margin:0;
padding:0;
  }

`

const NavbarGif = styled.span`
font-size: 25px;
padding: 5px;
:hover{
    opacity: 0.7;
    cursor: pointer;
    

}
:hover span{
      visibility: visible;
      transition: 0.5s ease-in-out ;
      opacity:1;
     background: black;
     color:white;
  }
  
@media only screen and (min-width: 414px) and (max-width: 767px),
  (min-width: 412px) and (max-width: 767px),
  (min-width: 390px) and (max-width: 767px),
  (min-width: 428px) and (max-width: 767px),
  (min-width: 384px) and (max-width: 767px),
  (min-width: 360px) and (max-width: 767px) {
      padding:0;
      font-size:25px;
  }

`
const DivTest = styled.div` 
position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  span{
      visibility: hidden;
  width: 100px;
  background-color: black;
  color: #7e1717;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  font-size: 15px;

  position: absolute;
  bottom:1px;
  left:15px;
  }
  @media only screen and (min-width: 414px) and (max-width: 767px),
  (min-width: 412px) and (max-width: 767px),
  (min-width: 390px) and (max-width: 767px),
  (min-width: 428px) and (max-width: 767px),
  (min-width: 384px) and (max-width: 767px),
  (min-width: 360px) and (max-width: 767px) {
      padding:0;
      left:0%;
      right:0%;
      display:flex;
      justify-content: center;
      align-items: center;
      
      span{
      visibility: hidden;
  width: 100px;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  font-size: 15px;
height:30px;
  position: absolute;
  top:20px;
  left:-10px;
  }
     
  }

`


export default function IconsMenu() {
    const colorOcean= "white";
    
    const showMain = {displayMain:true};
    const showAboutMe = {displayAboutMe:true};
    const showResume = {displayResume:true};
    const showContact = {displayContact:true};
    const showProjects = {displayProjects:true};

    const changeUser = useContext(UserConsumer).changeUser;

    const mainPage = () => {
        changeUser(showMain)
    }

    const aboutMe = () => {
        changeUser(showAboutMe)
    }

    const meResume = () => {
        changeUser(showResume)
    }

    const ContactMe = () => {
        changeUser(showContact)
    }

    const setProject = () => {
        changeUser(showProjects)
    }
    
    return (
        <Navbar className="animate__animated animate__zoomIn">
            
            <NavbarGif><FontAwesomeIcon icon={faHome} onClick={mainPage} color={colorOcean}/><DivTest class="tooltip">
            <span >Welcome</span>
            </DivTest></NavbarGif>
            <NavbarGif><FontAwesomeIcon icon={faUser} color={colorOcean} onClick={aboutMe} /><DivTest class="tooltip">
            <span >About Me</span>
            </DivTest></NavbarGif>
            <NavbarGif><FontAwesomeIcon icon={faGraduationCap} color={colorOcean} onClick={meResume} /><DivTest class="tooltip">
            <span >Resume</span>
            </DivTest></NavbarGif>
            <NavbarGif><FontAwesomeIcon icon={faProjectDiagram} color={colorOcean} onClick={setProject}/><DivTest class="tooltip">
            <span >Projects</span>
            </DivTest></NavbarGif>
            
            
            <NavbarGif><FontAwesomeIcon icon={faEnvelope} color={colorOcean} onClick={ContactMe}/><DivTest class="tooltip">
            <span >Contact Me</span>
            </DivTest></NavbarGif>
        </Navbar>
    )
}
