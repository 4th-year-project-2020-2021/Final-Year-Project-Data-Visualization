import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    body{
        background-color: #eaeaea;
    }

    .ui.menu {
        background-image: linear-gradient(
            135deg, 
            rgb(24, 42, 115) 0%, 
            rgb(32, 138, 174) 69%, 
            rgb(32, 167, 172) 89%
        )
    };

    svg {
        display: inline-block;
        vertical-align: middle;
    }    
`;

export default globalStyles;