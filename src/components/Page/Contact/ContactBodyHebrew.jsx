import React, { useState, useRef, useEffect } from "react";
import { UserProvider } from "../../Context/Context";
import styled from "styled-components";
import HoverRating from "./HoverRating";
import { TextField, makeStyles } from "@material-ui/core";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "#FFF",
  },
}));

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid whitesmoke;
  border-radius: 25px;
  box-shadow: 5px 5px black;
  width: 200px;
`;

export default function ContactBodyHebrew() {
  const classes = useStyles();

  const [info, setInfo] = useState({});
  const Focus = useRef(null);
  function setInformation(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    Focus.current.focus();
  }, []);

  function getEmail(e) {
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
    e.target.reset();
  }
  return (
    <Container>
      <UserProvider value={{ Focus, setInformation }}>
        <Form onSubmit={getEmail}>
          <label>
            <TextField
              inputProps={{ className: classes.input }}
              inputRef={Focus}
              onChange={setInformation}
              name="firstName"
              type="text"
              label="השם הפרטי שלך..."
              InputLabelProps={{ className: classes.input }}
              id="outlined-textarea"
              multiline
              variant="outlined"
            />
          </label>
          <label>
            <TextField
              inputProps={{ className: classes.input }}
              name="lastName"
              onChange={setInformation}
              type="text"
              label="שם המשפחה שלך..."
              InputLabelProps={{ className: classes.input }}
              id="outlined-textarea"
              multiline
              variant="outlined"
            />
          </label>
          <label>
            <TextField
              name="email"
              inputProps={{ className: classes.input }}
              onChange={setInformation}
              type="text"
              label="אימייל@email.com"
              InputLabelProps={{ className: classes.input }}
              id="outlined-textarea"
              multiline
              variant="outlined"
            />
          </label>

          <label>
            <TextField
              name="Message"
              inputProps={{ className: classes.input }}
              onChange={setInformation}
              id="outlined-multiline-static"
              cols="30"
              label="ההודעה שלך נכנסת כאן..."
              InputLabelProps={{ className: classes.input }}
              multiline
              rows={3}
              variant="outlined"
            />
          </label>
          <p>Rate your experience from the App!</p>
          <HoverRating />
          <button type="submit">Send!</button>
        </Form>
      </UserProvider>
    </Container>
  );
}
