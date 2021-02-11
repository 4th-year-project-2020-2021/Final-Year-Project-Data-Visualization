import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-size:15px;
        background-color:rgba(20, 20, 20, 1);
        color:white;
        padding-top:70px;
        height:100%;
    }
    
    button {
        background-color: white;
        color: black;
    }
    form {
        width: 100%;
    } 
    svg {
        display: inline-block;
        vertical-align: middle;
    }
`;

export default globalStyles;