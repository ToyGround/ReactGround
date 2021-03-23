import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import config from '../config'

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: static;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  color: white;
  background: black;
`;

function HeaderContainer(props) {
  return (
    <Container>
      <Header logo={config.LOGO} />
    </Container>
  );
}

export default HeaderContainer;