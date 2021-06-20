import React from 'react'
import styled from 'styled-components'

const ParaColor = styled.span`
color:#09f1de94;
font-weight: 700;
padding: 7.5px;
`

export default function Details(props) {
    const meArr = props.info
    const meDetails = props.details
    
    return (
        <div>
            
            {meArr.map((i,index)=><p>{i}  <ParaColor>{meDetails[index]}</ParaColor></p> ) }
            
        </div>
    )
}
