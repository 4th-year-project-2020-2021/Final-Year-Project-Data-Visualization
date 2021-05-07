import React, { useState } from 'react';
import firebase, { firebaseInstance, authService } from "../FirebaseAuth/firebase";


// Referances
// https://firebase.google.com/docs/auth/web/manage-users
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
// https://firebase.google.com/docs/auth/web/google-signin
// https://firebase.google.com/docs/auth/web/password-auth
// https://firebase.google.com/docs/auth/web/facebook-login
// https://firebase.google.com/docs/auth/web/github-auth
// https://firebase.google.com/docs/auth/web/firebaseui
// https://nomadcoders.co/nwitter
// https://www.youtube.com/watch?v=wkdCpktUfGg

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const toggleAccount = () => setNewAccount((prev) => !prev);

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                //create account
                data = await authService.createUserWithEmailAndPassword(email, password);
            } else {//log in
                data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const onChange = (event) => {
        const { target: { name, value } } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    return <>
        <form onSubmit={onSubmit} className="Formcontainer font">
            <input
                name="email"
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={onChange}
                className="authInput"
            />
            <input
                name="password"
                type="password"
                placeholder="Password"
                required
                value={password}
                className="authInput"
                onChange={onChange}
            />
            <input type="submit" className="authSubmit" value={newAccount ? "Create Account" : "Sign in"} />
            {error && <span className="authError">{error}</span>}
        </form>
        <span className="authSwitch" onClick={toggleAccount}>{newAccount ? "Sign in" : "Create Account"}</span>
    </>
};
export default AuthForm;
