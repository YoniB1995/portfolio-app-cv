import React from 'react'
import {Button,Card} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub  } from '@fortawesome/free-brands-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons'; 




export default function DivCard(props) {
  const style={width:"100px"}
    return (
      
        <Card className="card_Design" >
  <Card.Img variant="top" src={props.img} />
  <Card.Body >
    <Card.Title><b>{props.title}</b></Card.Title>
    <Card.Text>
      {props.description}
      
    </Card.Text>
     <Button variant="primary" ><FontAwesomeIcon icon={faGithub} color="black" ></FontAwesomeIcon ></Button>
   
  </Card.Body>
</Card>

    )
}
