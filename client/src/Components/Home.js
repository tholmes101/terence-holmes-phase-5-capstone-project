import React from 'react'
import { Link } from "react-router-dom";
import Loader from "./Loader";

function Home() {

  
  return (
    <center>
      <div>
      <h1>Holmes Corp. Employee App</h1>
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

export default Home;