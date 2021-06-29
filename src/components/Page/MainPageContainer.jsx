import React,{useState} from 'react'
import styled from 'styled-components'
import BoxReview from './BoxReview'
import { UserProvider } from '../Context/Context'
import {Card} from 'react-bootstrap'


const MainPage = styled.div` 
display: flex;
flex-direction: column;
 background-color: #87CEFA;
 flex-direction:column;
 
@media only screen and (min-width: 414px) and (max-width: 767px),
  (min-width: 412px) and (max-width: 767px),
  (min-width: 390px) and (max-width: 767px),
  (min-width: 428px) and (max-width: 767px),
  (min-width: 384px) and (max-width: 767px),
  (min-width: 360px) and (max-width: 767px) {
background-color: white;
flex-direction:column;
  }

   @media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
   
      display:flex;
      justify-content: center;
      flex-direction:column;
      align-items: center;
      background:white;
      
}
`

const NewDivBody = styled.div` 
height:100vh;
width:100vw;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
color:black;
background-image: url("images/background_Protfolio.jpeg");


h1{
  font-weight:900;
  font-style: oblique;
  color:white;
}
.floatImg{
  border-radius: 50%;
  position: relative;
 animation: firstImg 8s infinite alternate-reverse;
 
}

.floatImgTwo{
  border-radius: 50%;
  position:relative;
  animation: secondImg 8s infinite alternate-reverse;
 
}

.cardImg{
    height:500px;
    width:800px;
    box-shadow:3px 3px 3px black;

}

.cardImg:hover{
    opacity:0.5;
    background:grey;
    cursor:pointer;
}

@keyframes firstImg {
    0% {
        right:0
    }
    45% {
        right:80%
    }
    90% {
        right:0
    }
}
@keyframes secondImg {
    0% {
        left:0
    }
    45% {
        left:80%
    }
    90% {
        left:0
    }
}
`
const Button = styled.button` 
border-radius: 15%;
font-size: 30px;
background-color: #14eba3;
border: 1px solid black;
box-shadow:2px 5px 5px black;
:hover{
    opacity:0.5;
}
`

const MainPageHeaderLight = styled.span`
    font-weight: 400;
    opacity: 0.75;
`;

const LetsStart = styled.img`
:hover{ 
cursor: pointer;
opacity:0.5;
}
`

export default function MainPageContainer() {
    const [fade,setFade] = useState(true)
    const [box,showBox] = useState(false)
    const [newStyle,setNewStyle] = useState({display:"flex"})

    function changeFade(){
    setFade(false)
    setTimeout(() => {
    showBox(true);
    setNewStyle({display:"none"});
    }, 1000);
    }

    return (
    <>
    <UserProvider value={fade,changeFade}>
    <NewDivBody className={fade? "animate__animated animate__fadeInDown": "animate__animated animate__fadeOutDown"} style={newStyle}> <h1>Welcome To My Protfolio</h1>
    <h1><MainPageHeaderLight>I AM</MainPageHeaderLight> YONI BITEW</h1>
    <span>
    <img src="images/INDI_COM.png" alt="indi com logo"  width="180px" height="300px" className="floatImg" />  
    <img src="images/טק_קריירה.png" alt="indi com logo" width="180px" height="150px" className="floatImgTwo" />  </span>
    
    <LetsStart src={"images/mouse-scroll.png"} alt="lets start button" onClick={changeFade}/>
    
    </NewDivBody>
    <MainPage >
    {box && <BoxReview/> }
    </MainPage>
    </UserProvider>
    </>
    )
}
