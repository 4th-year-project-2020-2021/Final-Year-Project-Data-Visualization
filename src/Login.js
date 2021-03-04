import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from 'styled-components';
import axios from 'axios';
import { useJwt } from "react-jwt";
const token = "Your JWT";

const Wrapper = styled.div`
    background: #708090;
`;


const H1 = styled.h1`
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:blue;
    text-align:right;
    font-size: 40px;
    font-family: Helvetica, Arial, sans-serif;
`;

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitClick = (e)=>{
    e.preventDefault()
    console.log("You pressed login")
    let opts = {
      'username': username,
      'password': password
    }
    console.log(opts)
    fetch('/api/login', {
      method: 'post',
      body: JSON.stringify(opts)
    }).then(r => r.json())
      .then(token => {
        if (token.access_token){
          console.log(token)          
        }
        else {
          console.log("Please type in correct username/password")
        }
      })
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  //const [logged] = useAuth();

  return (
    <div>
      <H1>Login</H1>
      <form action="#">
        <div>
          <input type="text" 
            placeholder="Username" 
            onChange={handleUsernameChange}
            value={username} 
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        <button onClick={onSubmitClick} type="submit">
          Login Now
        </button>
      </form>
    </div>
  )
}
export default Login;
