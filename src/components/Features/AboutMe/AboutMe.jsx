import React,{useContext} from 'react'
import { LanguageConsumer } from '../Context/LanguageContext'; 
import AboutMeHebrew from './AboutMeHebrew';
import AboutMeEnglish from './AboutMeEnglish';

export default function AboutMe() {
        const changeLanguage =useContext(LanguageConsumer).isTrue

    return (
        <>
        {changeLanguage ? <AboutMeHebrew/> : <AboutMeEnglish/>}
        </>
    )
}
