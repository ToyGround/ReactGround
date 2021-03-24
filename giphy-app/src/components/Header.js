import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;`;
const Logo = styled.div``;
const Image = styled.img`
  width: 310px;
`;
const Utils = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;
const Menu = styled.button``;

Header.propTypes = {
  logo  : PropTypes.string,
  onMenu: PropTypes.func
};

function Header({logo, onMenu}) {
  return (
    <Container>
      <Logo>
        <Image src={logo}/>
      </Logo>
      <Utils>
        <div>검색</div>
        <Menu onClick={onMenu} children="Menu"/>
      </Utils>
    </Container>
  );
}

export default Header;