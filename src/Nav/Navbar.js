import React, { useState } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import SignedOutMenu from '../SignInOutMenu/SignedOutMenu';
import SignedInMenu from '../SignInOutMenu/SignedInMenu';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

export default function Navbar({ setFormOpen }) {
    //authenticated state from the store
    //const { authenticated } = useSelector(state => state.auth); //it has a error

    const history = useHistory(); //temp --> this needs to be changed
    const [authenticated, setauthenticated] = useState(false); //--temp  --> this needs to be changed
    
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
                <Menu.Item as={NavLink} to='/upload'>Upload</Menu.Item>
                <Menu.Item as={NavLink} to='/loginform'>LoginForm</Menu.Item>
                <Menu.Item as={NavLink} to='/registerform'>RegisterForm</Menu.Item>
                {authenticated ? (
                    <SignedInMenu />
                ) :  (
                    <SignedOutMenu />
                )}
            </Container>
        </Menu>
    );       
}