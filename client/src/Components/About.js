import React from 'react'
import styled from "styled-components";

// Gives a brief description on the app.
function About() {
    return (
      <Wrapper>
      <div>
      A user from Naval Tech Solutions has access to an app 
      to manage employees with their training courses.
      <br></br>
      <br></br>
      As a user, I can:
      <br></br>
      <br></br>
      - Sign in and log into the employees database with a username and password
      <br></br>
      - Create, read, update and delete employees
      <br></br>
      <br></br>
      The app is password protected and authenicated with bcrypt.
      <br></br>
      The app is also validated with the user's username to ensure that it is 
      present and unique -no two users can have the same username- 
      </div>
      </Wrapper>
    )
  }

  const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;
  export default About;