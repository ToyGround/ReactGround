import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

List.propTypes = {
  listData: PropTypes.array
};

const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 100%;
`;

function List({listData}) {
  return (
    <Container>
      {listData.map(item => <Item key={item.id} id={item.id} title={item.title} author={item.author}/>)}
    </Container>
  );
}

const ItemContainer = styled.li``;
const ItemLink = styled(Link)`
  color: black;
`;
const ItemTitle = styled.span``;
const ItemAuthor = styled.span``;

function Item({id, title, author}) {
  return (
    <ItemContainer>
      <ItemLink to={`/detail/${id}`}>
        <ItemTitle>{title}</ItemTitle>
        <ItemAuthor>{author}</ItemAuthor>
      </ItemLink>
    </ItemContainer>
  );
}

export default List;
