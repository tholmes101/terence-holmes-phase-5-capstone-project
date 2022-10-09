import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import styled from "styled-components";


function LoginPage({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Wrapper>
    <div>
      <h1>Holmes Corp. Employee App </h1>
      {showLogin ? (
        <>
          <Login onLogin={onLogin} />
          
          <p>
            Don't have an account? &nbsp;
            <button className="button-primary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUp onLogin={onLogin} />
          <p>
            Already have an account? &nbsp;
            <button className="button-primary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

export default LoginPage;