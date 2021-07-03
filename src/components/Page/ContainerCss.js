import styled from 'styled-components'

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
const WelcomePage = styled.div` 
flex-direction:column;
display:flex;
justify-content: center;
align-items: center;
`

const MainPageHeaderLight = styled.span`
    font-weight: 400;
    opacity: 0.75;
`;
const ImgCards= styled.div` 
display:flex;
flex-direction:row;
justify-content: center;
align-items: center;
flex-wrap:wrap;
width:100%;

`
const DogLoaderGif = styled.div` 
display:flex;
justify-content:center;
flex-direction:column;
align-items: center;
height:100vh;
width:100vw;
`

const LetsStart = styled.img`
height:50px;
width:30px;
:hover{ 
cursor: pointer;
opacity:0.5;
}
`

const IconImages = styled.span` 
margin:10px;
color:white;
font-size: 50px;
:hover {
    cursor:pointer;
    opacity:0.5;
}
`

export {MainPage , NewDivBody , WelcomePage , MainPageHeaderLight , DogLoaderGif , ImgCards , LetsStart , IconImages }