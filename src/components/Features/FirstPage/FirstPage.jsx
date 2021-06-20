import React ,{useContext} from 'react'
import { LanguageConsumer } from '../Context/LanguageContext'
import FirstPageEnglish from './FirstPageEnglish'
import FirstPageHebrew from './FirstPageHebrew'




export default function FirstPage() {
    
    const changeLanguage =useContext(LanguageConsumer).isTrue
    
    return (
        <>
        {changeLanguage? <FirstPageEnglish/> : <FirstPageHebrew/>}
        </> 
    )
}
