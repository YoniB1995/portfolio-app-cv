import React , {useState} from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen  } from '@fortawesome/free-brands-svg-icons';
import AboutMe from '../Features/AboutMe/AboutMe'
import IconsMenu from '../Features/IconsMenu'
import { UserProvider } from '../Features/Context/Context'
import {LanguageProvider} from '../Features/Context/LanguageContext'
import Resume from '../Features/Resume/Resume'
import FirstPage from '../Features/FirstPage/FirstPage'
import DevDetails from '../Features/DevDetails/DevDetails'
import Contact from '../Features/Contact/Contact'
import Projects from '../Features/Projects/Projects'
import {Button} from '@material-ui/core'
import DevDetailsHebrew from '../Features/DevDetails/DevDetailsHebrew'

const Body = styled.div`
flex-basis: 80%;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
@media only screen and (min-width: 414px) and (max-width: 767px),
  (min-width: 412px) and (max-width: 767px),
  (min-width: 390px) and (max-width: 767px),
  (min-width: 428px) and (max-width: 767px),
  (min-width: 384px) and (max-width: 767px),
  (min-width: 360px) and (max-width: 767px) {

height: 100vh;
width: 100vw;
position:relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
  }

`
const BlackBox = styled.div`
background-color: 	#202020	;
border-radius:25px;
position: absolute;
width: 50%;
height:fit-content;
left: 25%;
display:flex;
flex-direction: row-reverse;
justify-content: center;
align-items: center;
color:white;
overflow: auto;
top:5%;
::-webkit-scrollbar{
  width: 15px;
}
::-webkit-scrollbar-track{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 25px;
  border-top-left-radius:25px;
}

::-webkit-scrollbar-thumb{
  border-radius: 25px;
  border-top-left-radius:25px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
@media only screen and (min-width: 414px) and (max-width: 767px),
  (min-width: 412px) and (max-width: 767px),
  (min-width: 390px) and (max-width: 767px),
  (min-width: 428px) and (max-width: 767px),
  (min-width: 384px) and (max-width: 767px),
  (min-width: 360px) and (max-width: 767px) {
    display:flex;
    position:relative;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
right:0%;
left:0%;
top:25%;
bottom:0%;
border-radius:0;
  }
@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    height:100%;
    top:0%;
    button{
      font-size:11px;
    }
}
`

const GreyBox = styled.div`
background-color: #5758589f;
border: 1px solid black;
position: absolute;
color: white;
left: 25%;
top:5%;
border-radius: 25px;
width: 13%;
height: 90%;
display:flex;
text-align:center;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    background:grey;
    left: 15%;
    height:100%;
    top:0%;
    button{
      font-size:11px;
    }
}

@media only screen and (min-width: 414px) and (max-width: 767px),
  (min-width: 412px) and (max-width: 767px),
  (min-width: 390px) and (max-width: 767px),
  (min-width: 428px) and (max-width: 767px),
  (min-width: 384px) and (max-width: 767px),
  (min-width: 360px) and (max-width: 767px) {
    background-color:rgb(109,175,220);
    color: white;
display:flex;
text-align:center;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
position:absolute;
top:90%;
left:0;
bottom:0;
border-radius:0;
color:black;

img{
  border-radius:50%;
  width:50%;
}

button{
  width:50%;

}
  }

  
  
`
const UserCardDetails = styled.div`
transform: translateX(15%);
width: 100%;
display:flex;
text-align: center;
flex-direction: column;
justify-content: center;
align-items: center;
color:white;
flex-basis: 65%;

@media only screen and (min-width: 414px) and (max-width: 767px),
  (min-width: 412px) and (max-width: 767px),
  (min-width: 390px) and (max-width: 767px),
  (min-width: 428px) and (max-width: 767px),
  (min-width: 384px) and (max-width: 767px),
  (min-width: 360px) and (max-width: 767px) {
      transform: translateX(0%);

  }
  @media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    flex-direction: row;
    flex-basis:90%;
    transform: translateX(5%);
}

`
const ProfileImg = styled.img`
border-radius: 75px;
border: 1px solid black;
box-shadow: black 2px 2px 2px;
@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    border-radius:50%;
    height:150px;
    width:150px;
}
`

const Copyright = styled.span`
font-size: 12px;
font-family: 'Courier New', Courier, monospace;
position: absolute;
bottom: 5%;
 @media only screen and (min-width: 414px) and (max-width: 767px),
  (min-width: 412px) and (max-width: 767px),
  (min-width: 390px) and (max-width: 767px),
  (min-width: 428px) and (max-width: 767px),
  (min-width: 384px) and (max-width: 767px),
  (min-width: 360px) and (max-width: 767px) {
    bottom:1%;
  }
`

export default function BoxReview() {
  const [isTrue,setIsTrue] = useState({displayMain:true,displayAboutMe:false,displayResume:false,displayContact:false,displayProjects:false,hebrew:false})
  const [hebrew,setHebrew] = useState({isTrue:false});
  const newTrue = {
    displayMain:isTrue,
    displayAboutMe:isTrue,
    displayResume:isTrue,
    displayContact:isTrue,
    displayProjects:isTrue,
    changeUser : (value) => {setIsTrue(value)},
  }

  
    function changeToHebrew(){
        setHebrew({isTrue:true})
    }

    function changeToEnglish(){
        setHebrew({isTrue:false})
    }

    const style={margin:"5px"}

  return (
    <><UserProvider value={newTrue} >
      <LanguageProvider value={hebrew}>
    <Body>
      <BlackBox>
      <UserCardDetails > 
      {newTrue.displayMain.displayMain===true&& <FirstPage/>  } 
      {newTrue.displayAboutMe.displayAboutMe === true&& <AboutMe/>} 
      {newTrue.displayResume.displayResume === true && <Resume/>}
      {newTrue.displayContact.displayContact === true && <Contact/>}
      {newTrue.displayProjects.displayProjects === true && <Projects/>}

</UserCardDetails>
  </BlackBox>   
    </Body>
    <IconsMenu/>
    <GreyBox>
   <ProfileImg src="images/fixedProfile.jpg" width="180px" height="150px"></ProfileImg>
   {hebrew.isTrue? <DevDetailsHebrew/> :<DevDetails/>}
   <div>{hebrew.isTrue? <Button variant="contained" color="primary" onClick={changeToHebrew} style={style}>עברית</Button> : <Button variant="contained" color="primary" onClick={changeToHebrew} style={style}>Hebrew</Button> }
        {hebrew.isTrue?<Button variant="contained" color="primary" onClick={changeToEnglish}> אנגלית</Button> : <Button variant="contained" color="primary" onClick={changeToEnglish}> English</Button>}</div> 
   <Copyright><FontAwesomeIcon icon={faCodepen} /> {hebrew.isTrue? "כל הזכויות שמורות יוני.ב" : "All Rights reserved Yoni_B" }</Copyright>
  </GreyBox>
  </LanguageProvider>
    </UserProvider>
    </>
  );
}
