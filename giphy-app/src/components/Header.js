import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Logo = styled.div``;
const Image = styled.img`
  width: 310px;
`;
const Utils = styled.div``;

Header.propTypes = {
  logo: PropTypes.string
};

function Header({logo}) {
  return (
    <>
      <Logo>
        <Image src={logo}/>
      </Logo>
      <Utils children="검색폼 영역"/>
    </>
  );
}

export default Header;