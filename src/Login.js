import {login, useAuth, logout} from "./auth"
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from 'styled-components';
import axios from 'axios';
import { useJwt } from "react-jwt";
const token = "Your JWT";


const Wrapper = styled.div`
    background: #E0FFFF;
`;


const H1 = styled.h1`
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:black;
    text-align:right;
    font-size: 40px;
    font-family: Helvetica, Arial, sans-serif;
`;

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  /*
  const onSubmitClick = (e)=>{
    e.preventDefault()
    console.log("You pressed login")
    let opts = {
      'username': username,
      'password': password
    }
    console.log("You typed :",opts)
    fetch('/api/login', {
      method: 'post',
      body: JSON.stringify(opts)
    }).then(r => r.json())
      .then(token => {
        if (token.access_token){
          login(token)
          console.log("Token :", token)     
          console.log("You got a token")
        }
        else {
          console.log("Please type in correct username/password")
        }
      })
  }
*/
  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const [logged] = useAuth();

  return (
    <Wrapper>
    <H1>Login</H1>
    {!logged? <form action="#">
      <div>
        <input type="text" 
          placeholder="Enter Username" 
          onChange={handleUsernameChange}
          value={username} 
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={handlePasswordChange}
          value={password}
        />
      </div>
      {/*<button onClick={onSubmitClick} type="submit">
        Login Now
  </button>*/}
    </form>
    : <button onClick={() => logout()}>Logout</button>}
  </Wrapper>
  )
}
export default Login;
