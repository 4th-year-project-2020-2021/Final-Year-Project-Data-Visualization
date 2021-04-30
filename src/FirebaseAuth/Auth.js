import React from 'react';
import firebase, { firebaseInstance, authService } from "./firebase";
import AuthForm from './AuthForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #f5f6fa;
`;

const Auth = () => {
    const onSocialClick = async (e) => {
        const { target: { name } } = e;

        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        await authService.signInWithPopup(provider);
    };

    return (
        <Wrapper>
            <div className="authContainer">
                <h3 className="h4">Hi there!</h3>
                <FontAwesomeIcon
                    icon={faCoffee}
                    color={"#04AAFF"}
                    size="3x"
                    style={{ marginBottom: 30 }}
                />
                <AuthForm />
                <div className="authBtns">
                    <button onClick={onSocialClick} name="google" className="authBtn">Continue with Google <FontAwesomeIcon icon={faGoogle} /></button>
                    <button onClick={onSocialClick} name="github" className="authBtn">Continue with Github <FontAwesomeIcon icon={faGithub} /></button>
                </div>
            </div>
        </Wrapper>
    );
}
export default Auth;