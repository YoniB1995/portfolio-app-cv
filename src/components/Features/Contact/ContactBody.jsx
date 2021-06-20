import React from 'react'
import styled from 'styled-components'
import HoverRating from './HoverRating'


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

export default function ContactBody() {
    return (
        <Container>
          <Form action="">
              <label htmlFor="">First Name:
                  <input type="text" placeholder="first name" name="" id="" />
              </label>
              <label htmlFor="">Last Name:
                  <input type="text" placeholder="last name" name="" id="" />
              </label>
              <label htmlFor="">Email:
                <input type="email" placeholder="email" name="" id="" />
              </label>
              <label htmlFor="Textarea">Type your opinion about the Protfolio project:
              </label>
              <Textarea placeholder="Type here..." name="Type" id="" cols="30" rows="10"></Textarea>
              <p>Rate your experience from the App!</p>
              <HoverRating/>
             <Button onClick={(()=>{alert("yonatansamfisher@gmail.com אשמח לביקורות בונות")})}>Send!</Button>
          </Form>
        </Container>
    )
}
