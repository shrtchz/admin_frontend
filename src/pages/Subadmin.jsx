import React, { useState } from "react";
import "../styles/login.css";
import logo from "../assets/images/logo.png";

const Subadmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    // console.log('Username:', username);
    // console.log('Password:', password);

    if (username === "admin" && password === "admin001") {
      console.log("Username:", username);
      console.log("Password:", password);
    } else {
      setErrorMessage("Invalid login details");
    }
  };
  //   const width="20px"

  return (
    <div className="login-container">
      <div className="header d-flex flex-row">
        <img src={logo} alt="logo" style={{ width: "80px" }} />

        <h1> Sub-admin's Login</h1>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Subadmin;
