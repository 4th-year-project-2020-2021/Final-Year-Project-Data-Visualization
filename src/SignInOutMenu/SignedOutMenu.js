import { openModal } from '../modals/modalReducer';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function SignedOutMenu({setAuthenticated}) {

    const dispatch = useDispatch();

    return (
        //<Menu.Item position='right'>  -- modal not working at present

        //this is temp
        <Menu.Item position='right' as={NavLink} to='/loginForm'>  
            <Button onClick={ () => dispatch(openModal({modalType: 'LoginForm'})) } basic inverted 
                content='Login' />
            <Button 
                basic 
                inverted 
                content='Register' 
                style={{ marginLeft : '0.5em'}}
            />
        </Menu.Item>
    );
}