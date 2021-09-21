import styled from 'styled-components'

const MainPage = styled.div` 
display: flex;
flex-direction: column;
 background-color: #f4f4f4;
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


export {MainPage   }