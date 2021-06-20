import React from 'react'
import styled from 'styled-components'
import SkillNBar from '../RightSide/SkillNBar'
import Knowledge from '../RightSide/Knowledge'



const RightSide = styled.div`
display: flex;
flex-basis: 50%;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Header = styled.h3` 
font-size:20px;
font-weight:800;
`

export default function RightResumePage() {
    const header=["Design Skills","Coding Skills"];
    const skills =["Web Design","Logo Design","Web Design"]
    const codingSkills =["JavaScript","HTML / CSS","React","C#   ","MongoDB","NodeJS"]
const knowledgeList = ["Leadership"," People Development","Improvisation","Pressure Handling","Engaging People","Interpersonal & Other Skills"]

    
    return (
        <RightSide>
            <br /><br /><br/>
            <Header>Design Skills</Header>
            <SkillNBar header={header} skills={skills}/>
            <Header>Coding Skills</Header>
            <SkillNBar header={header} skills={codingSkills}/>
            <Knowledge knowledgeList={knowledgeList}/>
        </RightSide>
    )
}
