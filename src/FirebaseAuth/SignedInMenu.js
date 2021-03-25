import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';

export default function SignedInMenu({signOut}) {

    return (
        <Menu.Item position='right'>
            <Dropdown pointing='top left' text='Hello User'>
                <Dropdown.Menu>
                    <Dropdown.Item text='My Profile' icon='user' />
                    <Dropdown.Item onClick={signOut} text='Sign out' icon='power' />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
}