import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

export default function SignedInMenu({signOut}) {
    return (
        <Menu.Item position='right'>
            <Dropdown pointing='top left' text='Jina'>
                <Dropdown.Menu>
                    <Dropdown.Item text='My Profile' icon='user' />
                    <Dropdown.Item onClick={signOut} text='Sign out' icon='power' />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
}