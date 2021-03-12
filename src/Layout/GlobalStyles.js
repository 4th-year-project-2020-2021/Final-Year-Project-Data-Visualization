import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    svg {
        display: inline-block;
        vertical-align: middle;
    }    
`;

export default globalStyles;