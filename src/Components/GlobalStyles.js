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
        font-family:"Lucida Console", "Courier New", monospace;
        font-size:14px;
        background-color:rgba(20, 20, 20, 1);
        color:white;
        padding-top:50px;
        height:100%;
    }
    button {
        background-color: white;
        color: black;
    }
    form {
        width: 100%;
    } 
`;

export default globalStyles;