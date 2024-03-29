import React, { useState } from "react";
import { Error, FormField } from "../styles";
import { Button, Label, Input } from "../styles";

// Login Feature - allows users to log back into an existing account
function Login({setUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
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
          <Label htmlFor="username">Username</Label>
          <Input
            className="u-full-width"
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            className="u-full-width"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button variant="fill" color="primary" type="submit">
            {isLoading ? "Loading..." : "Login"}
          </Button>
          <FormField>
            {errors.map((errors) => (
              <Error key={errors}>{errors}</Error>
            ))}
          </FormField>
        </div>
      </div>
    </form>
  );
}

export default Login;