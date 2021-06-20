import React from 'react'
import styled from 'styled-components'
import {ProgressBar} from 'react-bootstrap'

const SkillBar = styled.span` 
width: 250px;
@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    width:150px;
}
`
export default function SkillNBar(props) {
    const skills = props.skills; 
    const now = [90,92,96,98,88,100];

    return (
        <>
            
            {skills.map((i,num)=>
            <SkillBar>{skills[num]}<ProgressBar now={now[num]} label={`${now[num]}%`}  /></SkillBar>)
            }
            
            
        </>
    )
}
