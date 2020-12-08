import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

Header.propTypes = {

};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  height: 50px;
  font-size: 12px;
  color: #fff;
  background: #333;
`
const Nav = styled.a`
  display: block;
  margin : 0 20px;
`

function Header(props) {
  return (
    <Container>
      <Nav href="/">홈</Nav>
      <Nav href="/create">등록</Nav>
    </Container>
  );
}

export default Header;