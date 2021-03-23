import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html,body {
    height: 100%
  }
  #root {
    min-height: 100%;
  }
`;

export default GlobalStyle;