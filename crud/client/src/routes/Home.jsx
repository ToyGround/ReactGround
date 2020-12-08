import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import List from '../components/List';

HomeRoute.propTypes = {
  
};

const getList = async () => {
  const response = await fetch(process.env.REACT_APP_POSTS).then(res => res.json())
  return response
}

function HomeRoute(props) {
  const [listData, setListData] = useState([])

  useEffect(() => {
    getList().then(data => setListData(data))
  },[])

  return (
    <List listData={listData} />
  );
}

export default HomeRoute;