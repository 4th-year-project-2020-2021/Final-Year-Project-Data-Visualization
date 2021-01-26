import { authService } from 'Components/Fbase';
import styled from 'styled-components';
import React from 'react';

const Out  = styled.button`
    cursor: pointer;
    border-radius: 20px;
    border: none;
    padding: 10px 0px;
    font-size: 12px;
    text-align: center;
    width: 150px;
    background: white;
    cursor: pointer;
`;

export default () => {

    const onLogOutClick = () => authService.signOut();
     
    return <><Out onClick={onLogOutClick}>Log Out</Out></>;
}