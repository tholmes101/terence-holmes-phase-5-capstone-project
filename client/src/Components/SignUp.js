import React, { useState } from "react";
import { Error, FormField } from "../styles";

// Sign Up feature - allows new users to sign up
function SignUp({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation
      }),
    }).then((response) => {
      setIsLoading(false);
      if (response.ok) {
        response.json().then((user) => setUser(user));
      } else {
        response.json().then((error) => setErrors(error.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="twelve columns">
          <label htmlFor="username">Username</label>
          <input
            className="u-full-width"
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            className="u-full-width"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
          />
          <label htmlFor="password">Password Confirmation</label>
          <input
            className="u-full-width"
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            autoComplete="current-password"
          />

          <button className="button-primary" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
          <FormField>
            {errors.map((error) => (
              <Error key={error}>{error}</Error>
            ))}
          </FormField>
        </div>
      </div>

    </form>
  );
}

export default SignUp;