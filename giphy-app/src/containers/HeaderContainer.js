import React, {useState} from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import config from '../config';
import Category from '../components/Category';

const Container = styled.header`
  position: static;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  color: white;
  background: black;
`;

function HeaderContainer(props) {
  const [menu, setMenu] = useState(false);
  const onMenu = () => setMenu(!menu);

  return (
    <Container>
      <Header logo={config.LOGO} onMenu={onMenu}/>
      <Category menu={menu}/>
    </Container>
  );
}

export default HeaderContainer;