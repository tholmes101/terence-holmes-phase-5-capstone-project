import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import styled from "styled-components";
import { Link } from "react-router-dom";


function LoginPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Wrapper>
    <div>
      
      {showLogin ? (
        
        <>
        <Login setUser={setUser}/>
          <p>
            Don't have an account? &nbsp;
            <button className="button-primary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
        <SignUp setUser={setUser}/>
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