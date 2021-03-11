import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    body{
        background-color: #eaeaea;
    }

    .ui.fixed.menu {
        background-image: linear-gradient(
            135deg, 
            rgb(24, 42, 115) 0%, 
            rgb(32, 138, 174) 69%, 
            rgb(32, 167, 172) 89%
        )
    };


    /* Set a style for all buttons */
    button {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }

    /* Add a hover effect for buttons */
    button:hover {
        opacity: 0.8;
    }

    svg {
        display: inline-block;
        vertical-align: middle;
    }    
`;

export default globalStyles;