import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Detail from '../components/Detail';

DetailRoute.propTypes = {
  
};

const getDetail = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_POSTS}/${id}`).then(res=>res.json())
  return response
}

function DetailRoute({match}) {
  const [detailData, setData] = useState({})

  useEffect(() => {
    getDetail(match.params.id).then(data => setData(data))
  },[])

  return (
    <Detail detailData={detailData}/>
  );
}

export default DetailRoute;