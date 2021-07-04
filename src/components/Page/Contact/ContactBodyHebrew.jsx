import React,{useState,useRef ,useEffect} from 'react'
import styled from 'styled-components'
import HoverRating from './HoverRating'
import { TextField } from "@material-ui/core";
import emailjs from "emailjs-com";


const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Form = styled.form` 
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
border: 1px solid whitesmoke;
border-radius:25px;
box-shadow:5px 5px black;
width: 200px;

`

const Textarea = styled.textarea`
resize: none;
height: 30px;
width: 200px;
`
const Button = styled.button`
background: #19b6d1;
border: 1px solid white;
color: white;
border-radius: 10px;

:hover{
    opacity: 0.5;
}
`



export default function ContactBodyHebrew() {
    const [info, setInfo] = useState({});
    const Focus = useRef(null);
    function setInformation(e) {
      setInfo({ ...info, [e.target.name]: e.target.value });
    }
    useEffect(() => {
      Focus.current.focus();
    }, []);

    function getEmail(e){
        e.preventDefault();
        emailjs
    .sendForm(
      "service_bxe7xdx",
      "template_bdn3v4o",
      e.target,
      "user_rptTBZDbXl9AI5Z96I5Rm"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset()
    }
    return (
        <Container>
          <Form onSubmit={getEmail}>
              <label>
          <TextField
            inputRef={Focus}
            onChange={setInformation}
            name="firstName"
            type="text"
            label="השם הפרטי שלך..."
            id="outlined-textarea"
            multiline
            variant="outlined"
          />
        </label>
        <label>
          <TextField
            name="lastName"
            onChange={setInformation}
            type="text"
            label="שם המשפחה שלך..."
            id="outlined-textarea"
            multiline
            variant="outlined"
          />
        </label>
        <label>
          <TextField
            name="email"
            onChange={setInformation}
            type="text"
            label="אימייל@email.com"
            id="outlined-textarea"
            multiline
            variant="outlined"
          />
        </label>

        <label>
          <TextField
            name="Message"
            onChange={setInformation}
            id="outlined-multiline-static"
            cols="30"
            label="ההודעה שלך נכנסת כאן..."
            multiline
            rows={3}
            variant="outlined"
          />
        </label>
              <p>Rate your experience from the App!</p>
              <HoverRating/>
             <button type="submit">Send!</button>
          </Form>
        </Container>
    )
}

