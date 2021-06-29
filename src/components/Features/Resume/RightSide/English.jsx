import React from 'react'
import styled from 'styled-components'
import SkillNBar from '../RightSide/SkillNBar'
import Knowledge from '../RightSide/Knowledge'
import {header,skills,codingSkills,knowledgeList} from './TypoRightSide'


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
