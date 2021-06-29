import React , {useContext} from 'react'
import { LanguageConsumer } from '../../Context/LanguageContext'
import ProjectsEnglish from './ProjectsEnglish'
import ProjectsHebrew from './ProjectsHebrew'



export default function Projects() {
    const changeLanguage = useContext(LanguageConsumer).isTrue
    return (
        <>
        {changeLanguage?<ProjectsHebrew/>: <ProjectsEnglish/>}
        </>
    )
}
