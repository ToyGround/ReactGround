import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

Comments.propTypes = {
  commentsData : PropTypes.array
};

const Container = styled.div``

function Comments({commentsData}) {
  return (
    <Container>
      <h3>댓글</h3>
      {commentsData.map(item => (
        <p key={item.id}><span>{item.id}번 댓글 : </span>{item.body}</p>
      ))}
    </Container>
  );
}

export default Comments;