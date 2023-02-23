import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "./Loader";

// Displays the app's home page to login or sign up.
function Home() {

  
  return (
    <center>
      <div>
      <Logo>
        Naval Tech Solutions
        </Logo>
        <Link to="/page">
          <Loader /><br></br>
          <button className="button-primary">Click Here To Login Or Sign Up</button>
        </Link>
        <br></br>
        <Link to="/about">
          <button className="button-primary">Click Here To Learn About This App</button>
        </Link>
      </div>
    </center>
  )
}

const Logo = styled.h1`
  font-family: "Georgia", cursive;
  font-size: 5rem;
  color: black;
  margin: 0;
  line-height: 1`

export default Home;