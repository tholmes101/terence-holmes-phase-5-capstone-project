import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
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
          <Button className="button-primary">Login Or Sign Up</Button>
        </Link>
        <Link to="/about">
          <Button className="button-primary">Learn About This App</Button>
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