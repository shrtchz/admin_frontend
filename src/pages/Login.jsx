import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import "../styles/login.css";
import {useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios'

const url='https://shrtchz.pw/api/auth/login'

const Login = ({onLogin,setIsLoggedIn}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(null);


const handleSubmit = async(e)=>{
  e.preventDefault();
  console.log(username, password)
  try {
    const res=await axios.post(url, {login:username,password});
    console.log(res.data.token)
    localStorage.setItem('token',res.data.token)
    onLogin(true)
    setErrorMessage(res.data.message)
    
  } catch (error) {
    console.log(error.response.data)
    setErrorMessage(error.response.data.message); // Update error message state
    
    
  }
 
} 

  return (
    <div className="maincontainer">
  <div className="login-container">
      <div className="heada">
        <img src={logo} alt="logo" style={{ width: "50px", height:'50px'}} />
        <h1> Admin Login</h1>
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

        <button type="submit" >Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
