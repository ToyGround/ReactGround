import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  html,body,#root  {
    height: 100%;
  }
  a,a:link {
   color: #fff;
   text-decoration: none;
   cursor: auto;
  }
`;

export default GlobalStyles;