import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <div>
      <h1>Holmes Corp. Employee App</h1>

        <Link to="/page">
          <button className="button-primary">Click Here To Login Or Sign Up</button>
        </Link>

      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

export default Home;