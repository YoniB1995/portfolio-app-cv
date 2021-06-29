import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConnectdevelop , faTeamspeak , faConfluence , faCodiepie  } from '@fortawesome/free-brands-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import Details from './Details'
import Skills from './Skills'

const HeaderOne = styled.h3`
color: #09f1de94;
position: relative;
right:0;
font-size: 40px;
font-weight: 700;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
@media only screen and (min-width: 414px) and (max-width: 767px),
  (min-width: 412px) and (max-width: 767px),
  (min-width: 390px) and (max-width: 767px),
  (min-width: 428px) and (max-width: 767px),
  (min-width: 384px) and (max-width: 767px),
  (min-width: 360px) and (max-width: 767px) {
      position: static;
  }
  @media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    position: relative;
    
    
    font-size: 40px;

}
`
const HeaderTwo = styled.h3`
color: #09f1de94;
position: relative;
right:20%;
font-size: 30px;
font-weight: 700;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
@media only screen and (min-width: 414px) and (max-width: 767px),
  (min-width: 412px) and (max-width: 767px),
  (min-width: 390px) and (max-width: 767px),
  (min-width: 428px) and (max-width: 767px),
  (min-width: 384px) and (max-width: 767px),
  (min-width: 360px) and (max-width: 767px) {
      text-align:left;
      right:0%;
      left:35%;
  }
`
const MeBox = styled.div`
display: flex;
flex-wrap: nowrap;
text-align: left;
justify-content: space-around;
div{
    margin: 5px;
   
}
p{
    
    margin: 5%;
}
@media only screen and (min-width: 414px) and (max-width: 767px),
  (min-width: 412px) and (max-width: 767px),
  (min-width: 390px) and (max-width: 767px),
  (min-width: 428px) and (max-width: 767px),
  (min-width: 384px) and (max-width: 767px),
  (min-width: 360px) and (max-width: 767px) {
      display:flex;
      justify-content: center;
      flex-direction:column;
      flex-wrap:nowrap;
      div{
          text-align:center;
      }
  }
   @media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
   div{
       margin: 1px;
   }

   p{
       margin:2px;
       padding:5px;
       
   }
}
`
const FlexSmallBox = styled.div`
display:flex;
justify-content: center;
align-items: center;
text-align:left;
flex-direction: row;
flex-wrap:wrap;
`
const BoxBlack = styled.div`
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size:15px;
@media only screen and (min-width: 414px) and (max-width: 767px),
  (min-width: 412px) and (max-width: 767px),
  (min-width: 390px) and (max-width: 767px),
  (min-width: 428px) and (max-width: 767px),
  (min-width: 384px) and (max-width: 767px),
  (min-width: 360px) and (max-width: 767px) {
      display:flex;
      justify-content: center;
      flex-direction:column;
      position: relative;
      overflow: auto;
  }

  @media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
   height:100%;
}
`

export default function AboutMeEnglish() {
    const webDesign = <p>Studied at the Tech-Career Academy,<br/>Lod, Israel.<br/> Projects based on front end designs interfacing with the consumer.</p>;
    const teamManagement = <p>Experience managing large teams<br/> 
    Served in the IDF <br/> Worked with soldiers and commanders <br/>
    Experience implementing meetings<br/>
    Involvement in long term planning
    </p>
    const personalQualifications = <p>Diligent work ethic <br/>
    Always strive for excellence<br/>
    Highly motivated
    </p>
    const communication = <p>Ability to manage large teams<br/>
    Willingness to learn and expand my knowledge<br/>
    Personable and understanding
    </p>

    const meArr = ["Age","Residence","Address","e-mail","Phone"]
    const meDetails = ["25","Israel","Hashalavit 6 Hadera","yonatansamfisher@gmail.com","0538276526"]
    const skillType =["Web Design","Team Management","Person Qualifications","Communication"]
    const skillsDesc =[webDesign,teamManagement,personalQualifications,communication]
     const color = "#09f1de94";
    const imgGif = [
        <FontAwesomeIcon icon={faConnectdevelop} color={color}></FontAwesomeIcon>,
        <FontAwesomeIcon icon={faTeamspeak} color={color}></FontAwesomeIcon>,
        <FontAwesomeIcon icon={faConfluence} color={color}></FontAwesomeIcon>,
        <FontAwesomeIcon icon={faCodiepie} color={color}></FontAwesomeIcon>]

    
    return (
        <BoxBlack className="slide-in-fwd-center">
            <HeaderOne>Personal Information <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon></HeaderOne>
            <MeBox>
                
            <p>Born and raised in Hadera. Earned a Matriculation Certificate with degrees in Geography and Oral LAW.
            <br />
            Joined the Army in 2014. Joined the "Kfir" Battle Brigade. Became an Officer Commander managing over 120 Soldiers and 20 commanders.<br/>
            In December 2020 , started  a Web Develepor Program to earn a degree as a Fullstack Web Developer 

            </p>
            <div>
                <Details info={meArr} details={meDetails}/>
            </div>
            </MeBox>

            <HeaderTwo>Qualifications</HeaderTwo>
            <FlexSmallBox>
            <Skills skillType={skillType} imgGif={imgGif} skillsDesc={skillsDesc}/>
            </FlexSmallBox>
        </BoxBlack>
    )
}
