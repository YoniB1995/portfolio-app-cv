import React,{useState,useRef ,useEffect,useContext} from 'react'
import { UserProvider } from '../../Context/Context';
import styled from 'styled-components'
import HoverRating from './HoverRating'
import { TextField } from "@material-ui/core";
import emailjs from "emailjs-com";
import Input from '../../Features/Input/Input';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Form = styled.form` 
color:white;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
border: 1px solid whitesmoke;
border-radius:25px;
box-shadow:5px 5px black;
width: 200px;
::placeholder {
    color: white;
    opacity: 1; 
  }

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

export default function ContactBody() {
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
          <UserProvider value={{Focus,setInformation}}>
          <Form onSubmit={getEmail}>
              <label >
              <TextField
        inputRef={Focus}
        onChange={setInformation}
        name="firstName"
        type="text"
        label="Your first name..."
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
            label="Your first last name..."
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
            label="Example@email.com"
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
            label="Your Messagee Goes Here..."
            color="primary"
            multiline
            rows={3}
            variant="outlined"
          />
        </label>
              <p>Rate your experience from the App!</p>
              <HoverRating/>
             <button type="submit">Send!</button>
          </Form>
          </UserProvider>
        </Container>
    )
}
