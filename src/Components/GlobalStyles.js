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
        //background-color:rgba(20, 20, 20, 1);
        color:black;
        padding-top:70px;
        height:100%;
        font-family: 'Nanum Gothic', sans-serif;
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

    .Login {
        padding: 60px 0;
    }
    
    .Login form {
        margin: 0 auto;
        max-width: 360px;
    }
`;

export default globalStyles;