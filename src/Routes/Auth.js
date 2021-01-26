import { authService, firebaseInstance } from 'Components/Fbase';
import styled from 'styled-components';
import React, {useState} from 'react';

const Form = styled.form`
    display:flex;
`;

const Error = styled.h2`
    color: tomato;
    text-align: center;
    font-weight: 500;
    font-size: 12px;
`;

const Box= styled.div`
    text-align: center;
`;

const Sn = styled.span`
    color: #04aaff;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    display: block;
    font-size: 18px;
    text-decoration: underline;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px 20px;
    border-radius: 20px;
    border: 1px solid black;
    text-align: center;
    background-color: white;
    color: black;
    box-sizing: content-box;
`;

const Btn = styled.button`
    cursor: pointer;
    width: 300px;
    padding: 7px 20px;
    text-align: center;
    color: white;
    border-radius: 20px;
    background-color: #04aaff;
    cursor: pointer;
`;

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) => {
        //console.log(event.target.name);
        const {
            target: { name, value},
        } = event;
        if(name === "email") {
            setEmail(value);
        } else if (name === "password"){
            setPassword(value);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        try{
            let data;
            if(newAccount){
                // create account
                data = await authService.createUserWithEmailAndPassword(
                    email, password
                );
            }else{
                // log in
                data = await authService.signInWithEmailAndPassword(
                    email, password
                );
            }
            console.log(data);
        }catch(error){
            setError(error.message);
        }
    };

    const toggleAccount = () => setNewAccount(prev => !prev);
    const onSocialClick = async (event) => {
        //console.log(event.target.name);
        const {
            target:{name}
        } = event;

        let provider;
        if(name === "google"){
            // Creates the provider object
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }else if(name == "github"){
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }

        const data = await authService.signInWithPopup(provider);
    };

    return (
        <Box>
            <Form onSubmit={onSubmit}>
                <Input 
                    name="email" 
                    type="text" 
                    placeholder="Email" 
                    required 
                    value={email} 
                    onChange={onChange} 
                />
                <Input 
                    name="password"
                    type="password" 
                    placeholder="Password" 
                    required 
                    value={password} 
                    onChange={onChange} 
                />
                <Input type="submit" value={newAccount ? "Create Account" : "Log In" } />
                <Error>{error}</Error>
            </Form>
            <Sn onClick={toggleAccount}>{newAccount ? "Sign In" : "Create Account"}</Sn>
            <Box>
                <Btn onClick={onSocialClick} name="google">Continue with Google</Btn>
                <Btn onClick={onSocialClick} name="github">Continue with Github</Btn>
            </Box>
        </Box>
    )
}
export default Auth;
   