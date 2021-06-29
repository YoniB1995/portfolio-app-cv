import React , {useContext} from 'react'
import { LanguageConsumer} from '../../Context/LanguageContext'
import English from './RightSide/English'
import Hebrew from './RightSide/Hebrew'


export default function RightResumePage() {
    
    const changeLanguage = useContext(LanguageConsumer).isTrue
    
    return (
        <>
            {changeLanguage ?  <Hebrew/> :  <English/> }
            
        </>
    )
}
