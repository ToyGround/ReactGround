import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Detail from '../components/Detail';

DetailRoute.propTypes = {
  
};

const getDetail = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_POSTS}/${id}`).then(res=>res.json())
  return response
}

const getComments = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_POSTS}/${id}/comments`).then(res=>res.json())
  return response
}

function DetailRoute({match}) {
  const [detailData, setDetailData] = useState({})
  const [commentsData, setCommentsData] = useState({})

  useEffect(() => {
    getDetail(match.params.id).then(data => setDetailData(data))
    getComments(match.params.id).then(data => setCommentsData(data))
  },[])

  return (
    <Detail detailData={detailData} commentsData={commentsData}/>
  );
}

export default DetailRoute;