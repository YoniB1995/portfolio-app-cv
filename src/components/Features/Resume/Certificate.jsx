import React  from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate , faMedal } from '@fortawesome/free-solid-svg-icons';


const SkillBox = styled.div` 

border-radius: 25px;
background: transparent;
display: flex;
justify-content: center;
align-items: center;
`

const DivBox= styled.div`
background: transparent;
margin: 15px;
border: 1px solid white;
border-radius: 15px;
width: 30%;
height: 120px;
display: flex;
flex-direction: row;
justify-content: flex-end;

`

const Cert = styled.div`

background: #535353;
display: flex;
align-items: center;
justify-content: center;

border-radius: 15px;
width: 40%;
`


export default function Certificate() {
    const medal = <FontAwesomeIcon icon={faCertificate} color="gold"></FontAwesomeIcon>

    return (
        <>
        <h2>Certification <FontAwesomeIcon icon={faMedal} color="gold"></FontAwesomeIcon></h2> 
        <SkillBox>
            
            <DivBox><p><br></br>Earned Brigadier General Honor at 2018</p><Cert>{medal}{medal}{medal}{medal}{medal}</Cert></DivBox>
            <DivBox><p><br></br>Earned as Company Commander Honor at 2019</p><Cert>{medal}{medal}{medal}{medal}{medal}</Cert></DivBox>
        </SkillBox></>
    )
}
