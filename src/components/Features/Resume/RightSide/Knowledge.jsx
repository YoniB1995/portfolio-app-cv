import React from 'react'
import styled from 'styled-components'


const SmallSkills = styled.div` 
background-color: #099292;
color: white;
border: 1px solid black;
border-radius: 10px;
margin: 8px;
padding: 5px;
@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    margin:0px;
    padding:2px;
    
}
`
const HeadTwo = styled.h2` 
margin: 5px;
@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    margin:2px;
}
`

export default function Knowledge(props) {
     const {knowledgeList} = props

    return (
        <>
            <HeadTwo>{knowledgeList[5]}</HeadTwo>
            <span><SmallSkills>{knowledgeList[0]} </SmallSkills>
            <SmallSkills>{knowledgeList[1]} </SmallSkills>
            <SmallSkills>{knowledgeList[2]} </SmallSkills>
            <SmallSkills>{knowledgeList[3]} </SmallSkills>
            <SmallSkills>{knowledgeList[4]} </SmallSkills>
            
            </span>
            
        </>
    )
}
