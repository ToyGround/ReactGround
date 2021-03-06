import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import config from '../config';
import NewsItem from './NewsItem';

const {URL, API_KEY} = config;

const Container = styled.div`
  width: 768px;
  padding-bottom: 3rem;
  margin : 2rem auto 0;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  }
`;

const NewsList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios(`${URL + API_KEY}`);
        setData(response?.data?.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <Container>대기중...</Container>;
  if (!data) return null;
  return (
    <Container>
      {data.map(item => <NewsItem key={item.url} article={item} /> )}
    </Container>
  );
};

export default NewsList;