import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';
import auth from './Auth';

export default function SignedOutMenu({setAuthenticated}) {


    return (  

        <Menu.Item position='right' as={NavLink} to='/auth'>
            <Button onClick={()=>setAuthenticated(false)} basic inverted content='Login' />
            <Button 
                basic 
                inverted 
                content='Register' 
                style={{ marginLeft : '0.5em'}}
            />
        </Menu.Item>
    );
}