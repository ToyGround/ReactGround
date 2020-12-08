import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

Detail.propTypes = {};

const Container = styled.div`
  
`;

function Detail({detailData}) {
  const {id, title, author} = detailData;
  return (
    <Container>
      <h2>상세페이지</h2>
      <p>No : {id}</p>
      <p>Title : {title}</p>
      <p>Author :{author}</p>
    </Container>
  );
}

export default Detail;