import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';
import SignedOutMenu from '../SignInOutMenu/SignedOutMenu';
import SignedInMenu from '../SignInOutMenu/SignedInMenu';

export default function Navbar(){

    const history = useHistory();
    const [authenticated, setAuthenticated] = useState(false);

    function handleSignOut() {
        setAuthenticated(false);
        history.push('/');
    }

    return(
        <Menu inverted>
            <Container>
                <Menu.Item>
                <Link to="/">Home </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/covid19">Covid-19 </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/stats">Stats </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/mersandsars">Mers and Sars </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/comparison">Comparison </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/smallpox">Smallpox </Link>
                </Menu.Item>
                {authenticated &&
                <Menu.Item>
                    <Link to="/create">Create </Link>
                </Menu.Item>}
                {authenticated &&
                <Menu.Item>
                    <Link to="/item">Items</Link>
                </Menu.Item>}
                {authenticated &&
                <Menu.Item>
                    <Link to="/upload">Upload </Link>
                </Menu.Item>}
                {authenticated ? (
                    <SignedInMenu signOut={handleSignOut}/>
                ) :  (
                    <SignedOutMenu setAuthenticated={setAuthenticated}/>
                )}
            </Container>
        </Menu>
    )       
}