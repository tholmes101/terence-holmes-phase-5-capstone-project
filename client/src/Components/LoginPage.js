import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import styled from "styled-components";
import { Button } from "../styles";

// Creates a page to login or signup
function LoginPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Wrapper>
      <div>

        {showLogin ? (

          <>
            <Login setUser={setUser} />
            <p>
              <center>
                Don't have an account? &nbsp;
                <Button className="button-primary" onClick={() => setShowLogin(false)}>
                  Sign Up
                </Button>
              </center>
            </p>
          </>
        ) : (
          <>
            <SignUp setUser={setUser} />
              <p>
                <center>
                  Already have an account? &nbsp;
                  <Button className="button-primary" onClick={() => setShowLogin(true)}>
                    Log In
                  </Button>
                </center>
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