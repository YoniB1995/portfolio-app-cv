import React from 'react'
import styled from 'styled-components'

const DivBox = styled.div`
width: 45%;
padding: 5px;
margin-left:20px;
text-align:center;

@media only screen and (min-width: 414px) and (max-width: 767px),
  (min-width: 412px) and (max-width: 767px),
  (min-width: 390px) and (max-width: 767px),
  (min-width: 428px) and (max-width: 767px),
  (min-width: 384px) and (max-width: 767px),
  (min-width: 360px) and (max-width: 767px) {
      width:80%;
      text-align:center;
  }
  @media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
   font-size:15px
}
`

const Header = styled.h1` 
font-size:30px;
 @media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
   font-size:25px
}
`


export default function Skills(props) {
    
    const {skillsDesc , skillType , imgGif} = props
    return (
        <>
            {skillType.map((i,num)=><DivBox><Header>{imgGif[num]}{i}</Header><p>{skillsDesc[num]}</p></DivBox>)}
        </>
    )
}
