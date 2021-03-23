import React from 'react';
import GlobalStyle from './lib/GlobalStyle';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <>
      <GlobalStyle/>
      <HeaderContainer/>
      <div>GIPHY APP</div>
    </>
  );
}

export default App;
