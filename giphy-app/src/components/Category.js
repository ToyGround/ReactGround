import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {categoryAsync} from '../modules/category';

Category.propTypes = {
  menu: PropTypes.bool
};

function Category({menu}) {
  const dispatch = useDispatch();
  const {data, loading} = useSelector(({category}) => category);

  const Menu = data && data.map(item => (<div key={item.name}>{item.name}</div>));

  useEffect(() => {
    dispatch(categoryAsync());
  }, [dispatch]);
  return (
    <>
      {loading && <div>로딩중..</div>}
      {menu && Menu}
    </>
  );
}

export default Category;