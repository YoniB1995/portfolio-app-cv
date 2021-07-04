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

export default function ContactBodyHebrew() {
    return (
        <Container>
          <Form action="">
              <label htmlFor="">:שם פרטי
                  <input type="text" placeholder="first name" name="" id="" />
              </label>
              <label htmlFor="">:שם משפחה
                  <input type="text" placeholder="last name" name="" id="" />
              </label>
              <label htmlFor="">:אימייל
                <input type="email" placeholder="email" name="" id="" />
              </label>
              <label htmlFor="Textarea">אשמח אם תרשמו את דעתכם על פרוייקט הפרוטפיליו שלי:
              </label>
              <Textarea placeholder="Type here..." name="Type" id="" cols="30" rows="10"></Textarea>
              <p>דרגו את חווית המשתמש מהאפליקצייה והנראות שלה!</p>
              <HoverRating/>
              <Button onClick={(()=>{alert("yonatansamfisher@gmail.com אשמח לביקורות בונות")})}>שלח!</Button>
          </Form>
        </Container>
    )
}
