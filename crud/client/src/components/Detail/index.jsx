import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Comments from '../Comments';

Detail.propTypes = {
  detailData  : PropTypes.object,
  commentsData: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

const Container = styled.div`
  
`;

function Detail({detailData, commentsData}) {
  const {id, title, author} = detailData;

  return (
    <Container>
      <h2>상세페이지</h2>
      <p>No : {id}</p>
      <p>Title : {title}</p>
      <p>Author :{author}</p>
      {!!commentsData.length && <Comments commentsData={commentsData}/>}
    </Container>
  );
}

export default Detail;