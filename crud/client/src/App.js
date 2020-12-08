import React from 'react';
import RootRouter from './routes';
import GlobalStyles from './styles/GlobalStyles';

function App(props) {
  return (
    <>
      <GlobalStyles />
      <RootRouter />
    </>
  );
}

export default App;