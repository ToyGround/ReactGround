import React from 'react';
import styled from 'styled-components';

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
const Logo = styled.div`
  img {
    width: 310px;
  }
`;
const Utils = styled.div`
  
`;

function HeaderContainer(props) {
  return (
    <Container>
      <Logo><img
        src="https://developers.giphy.com/branch/master/static/header-logo-8974b8ae658f704a5b48a2d039b8ad93.gif"
        alt=""/></Logo>
      <Utils children="검색폼 영역"/>
    </Container>
  );
}

export default HeaderContainer;