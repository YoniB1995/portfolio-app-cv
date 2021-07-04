import React from 'react'
import { useContext } from 'react'
import UserContext from '../../Context/Context'
import {Button} from 'react-bootstrap'

export default function Btn() {
    const startBtn = useContext(UserContext).startBtn;
    const beginBtn = useContext(UserContext).beginBtn;
    const setDogStyle = useContext(UserContext).setDogStyle;
    const setNewStyle = useContext(UserContext).setNewStyle;

    return (
        <>
            {startBtn&& <Button variant="primary" size="lg" onClick={beginBtn}  className="animate__animated animate__backInDown">
        TO PROTFOLIO
        </Button> }
        </>
    )
}
