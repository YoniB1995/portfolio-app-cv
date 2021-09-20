import React from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faPage4 } from "@fortawesome/free-brands-svg-icons";

export default function DivCard(props) {
  const styleBtnOne = { margin: "5px" };
  const styleBtnTwo = { margin: "5px" };
  return (
    <Card className="card_Design" style={{ marginLeft: "15px" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>
          <b>{props.title}</b>
        </Card.Title>
        <Card.Text>{props.description}</Card.Text>

        <Button variant="primary" style={styleBtnOne}>
          <a href={props.githubLinks} target="_blank">
            <FontAwesomeIcon icon={faGithub} color="black" />
          </a>
        </Button>
        <Button variant="primary" style={styleBtnTwo}>
          <a href={props.websiteLink} target="_blank">
            <FontAwesomeIcon icon={faPage4} color="black" />
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
}
