import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from 'styled-components';
import axios from 'axios';

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

const Login = () => {

  // create state
  const [state, setState]=useState({
    name:'',
    password:''
  })

  //destructure values from the state 
  const {name, password}=state;

  const handleChange = name => event => {
    //console.log('name', name, 'event', event.target.value);
    setState({...state, [name]: event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.table({name, password});
  };

  return (
    <div class="container">
      <br />
      <H1>LOGIN</H1>
      <form onSubmit = {handleSubmit}>
        <div className="form-group">
          <label for="uname">Username</label>
          <input 
            onChange={handleChange('name')}
            value={name}
            type="text"
            className="form-control"
            placeholder="Enter Username"
            required
          />
        </div>
        <div class="form-group">
          <label for="psw">Password</label>
          <input
            onChange={handleChange('password')}
            value={password}
            type="password"
            className="form-control"
            placeholder="Enter Password"
            required
          />
        </div>

        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div>

        <div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
        </div>
        
      </form>
    </div>
  )
}

export default Login;
