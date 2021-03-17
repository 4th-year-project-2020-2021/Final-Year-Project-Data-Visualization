import { openModal } from '../modals/modalReducer';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function SignedOutMenu({setAuthenticated}) {

    const dispatch = useDispatch();

    return (  
        //this is temp
        //<Menu.Item position='right' as={NavLink} to='/loginForm'> 

        //modal doesn't work at present
        <Menu.Item position='right'>
            <Button onClick={ () => dispatch(openModal({modalType: 'LoginForm'})) } basic inverted 
                content='Login' />
            <Button onClick={ () => dispatch(openModal({modalType: 'RegisterForm'})) }
                basic 
                inverted 
                content='Register' 
                style={{ marginLeft : '0.5em'}}
            />
        </Menu.Item>
    );
}