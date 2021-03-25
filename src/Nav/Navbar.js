import React, { useEffect, useState } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import SignedOutMenu from '../FirebaseAuth/SignedOutMenu';
import SignedInMenu from '../FirebaseAuth/SignedInMenu';
import { NavLink, useHistory } from 'react-router-dom';
import firebase from "../FirebaseAuth/firebase";

export default function Navbar() {
    const [init, setInit] = useState(false);
    const history = useHistory();
    const authService = firebase.auth();
    const [ authenticated, setAuthenticated ] = useState(false); 
    
    useEffect( ()=>{
        authService.onAuthStateChanged((user)=>{
            if(user){
                setAuthenticated(true);
            }else{
                setAuthenticated(false);
            }
            setInit(true);
        });
    }, [])

    const onLogOutClick = () => {
        authService.signOut();
        history.push('/');
        //setAuthenticated(false);
    }
    
    return(
        <Menu inverted>
            <Container>
                <Menu.Item as={NavLink} to='/'>Home </Menu.Item>
                <Menu.Item as={NavLink} to='/covid19'>Covid-19</Menu.Item>
                <Menu.Item as={NavLink} to='/stats'>Stats</Menu.Item >
                <Menu.Item as={NavLink} to='/mersandsars'>Mers and Sars</Menu.Item>
                <Menu.Item as={NavLink} to='/comparison'>Comparison</Menu.Item>
                <Menu.Item as={NavLink} to='/smallpox'>Smallpox</Menu.Item>
                <Menu.Item as={NavLink} to='/create'>Create</Menu.Item>
                <Menu.Item as={NavLink} to='/item'>Items</Menu.Item>
                {authenticated ? (
                    <div
                    style={{
                      maxWidth: 200,
                      width: "100%",
                      margin: "0 auto",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                <Menu.Item as={NavLink} to='/upload'>Upload</Menu.Item> </div>) :"Initializing..."}
                {authenticated ? <SignedInMenu className="formBtn cancelBtn logOut" signOut={onLogOutClick}/> : 
                <SignedOutMenu setAuthenticated={setAuthenticated} />}
            </Container>
        </Menu>
    );
}