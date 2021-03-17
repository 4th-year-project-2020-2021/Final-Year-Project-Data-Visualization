import { signOutUser } from 'auth/authAction';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';

export default function SignedInMenu() {
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.auth);
    const history = useHistory();

    return (
        <Menu.Item position='right'>
            <Dropdown pointing='top left' text={currentUser.email}>
                <Dropdown.Menu>
                    <Dropdown.Item text='My Profile' icon='user' />
                    <Dropdown.Item onClick={() => {
                        dispatch(signOutUser());
                        history.push('/');
                    }}
                    text='Sign out' 
                    icon='power' />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
}