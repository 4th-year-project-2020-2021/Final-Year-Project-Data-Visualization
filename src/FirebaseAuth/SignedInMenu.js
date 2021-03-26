import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';

export default function SignedInMenu({signOut,userObj}) {

    return (
        <Menu.Item position='right' userObj={userObj}>
            <Dropdown pointing='top left' text='Hello User'>
                <Dropdown.Menu>
                    <Dropdown.Item text='My Profile' as={NavLink} to='/profile' icon='user' />
                    <Dropdown.Item onClick={signOut} text='Sign out' icon='power' />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
}