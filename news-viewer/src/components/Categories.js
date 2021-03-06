import React from 'react';
import styled from 'styled-components';

const categories = [
  {
    key : 'all',
    name: '전체보기'
  },
  {
    key : 'business',
    name: '비지니스'
  },
  {
    key : 'entertainment',
    name: '엔터테인먼트'
  },
  {
    key : 'health',
    name: '건강'
  },
  {
    key : 'science',
    name: '과학'
  },
  {
    key : 'sports',
    name: '스포츠'
  },
  {
    key : 'technology',
    name: '기술'
  }
];

const Container = styled.div`
  display: flex;
  width: 768px;
  margin: 0 auto;
  padding: 1rem;
  @media screen and (max-width: 768px){
    width: 100%;
    overflow-x : auto;
  }
`;
const Item = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  
  &:hover {
  color: #495057;
  }
  
  & + & {
  margin-left: 1rem;
  }
`

const Categories = () => {
  return (
    <Container>
      {categories.map(item => (<Item key={item.key}>{item.name}</Item>))}
    </Container>
  )
};

export default Categories;