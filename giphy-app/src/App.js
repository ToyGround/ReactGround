import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './lib/GlobalStyle';
import HeaderContainer from './containers/HeaderContainer';

const Container = styled.main`
  padding: 1rem;
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <HeaderContainer/>
      <Container>GIPHY APP</Container>
    </>
  );
}

export default App;
