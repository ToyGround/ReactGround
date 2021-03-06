import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  & + & {
    margin-top:1.5rem;
  }
`;
const Thumbnail = styled.div`
  margin-right: 1rem;
  img {
    display: block;
    width: 160px;
    height: 100px;
    object-fit: cover;
  }
`;
const Contents = styled.div`
  h2 {
    margin : 0;
    a { 
      color: black;
    }
  }
  p {
    margin: 0.5rem 0 0;
    line-height: 1.5;
    white-space: normal;
  }
`;

const NewsItem = ({article}) => {
  const {title, description, url, urlToImage} = article;

  return (
    <Container>
      {urlToImage && (
        <Thumbnail>
          <a href={url} target="_blank" rel="noreferrer"><img src={urlToImage} alt="thumbnail"/></a>
        </Thumbnail>
      )}
      <Contents>
        <h2><a href={url} target="_blank" rel="noreferrer">{title}</a></h2>
        <p>{description}</p>
      </Contents>
    </Container>
  );
};

export default NewsItem;