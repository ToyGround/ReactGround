import React, {ReactNode} from 'react';
import {Container} from './styles';

type HeaderPropsTypes = {
  title?: string,
  navComponent?: ReactNode
}

export default function Header({title, navComponent}: HeaderPropsTypes) {
  return (
    <Container>
      <div>
        <div>뒤로가기</div>
        {title && <div>title</div>}
        <div>더보기</div>
      </div>
      {navComponent && navComponent}
    </Container>
  );
}