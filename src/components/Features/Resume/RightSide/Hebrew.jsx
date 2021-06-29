import React , {useContext} from 'react'
import styled from 'styled-components'
import SkillNBar from '../RightSide/SkillNBar'
import Knowledge from '../RightSide/Knowledge'
import { LanguageProvider} from '../../../Context/LanguageContext'
import {headerHebrew,skillsHebrew,codingSkillsHebrew,knowledgeListHebrew} from './TypoRightSide'

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
@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
    margin:0;
}

`
export default function RightResumePage() {
    
    return (
        <RightSide>
            
            <Header>שליטה בעיצוב</Header>
            <SkillNBar header={headerHebrew} skills={skillsHebrew}/>
            <Header>שליטה בשפות תוכנה</Header>
            <SkillNBar header={headerHebrew} skills={codingSkillsHebrew}/>
            <Knowledge knowledgeList={knowledgeListHebrew}/>
        </RightSide>
    )
}
