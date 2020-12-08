import React, {useEffect, useState} from 'react';
import {Descriptions, Col, PageHeader, Row, Typography} from 'antd';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from '../state';

/**
 *
 * @param {obejct} param
 * @param {import('react-router').match} param.match
 * */
function User({match}) {
  const [loading, setLoading] = useState(true)
  const history = useHistory();
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user);
  const name = match.params.name;

  useEffect(()=>{
    dispatch(actions.fetchUser(name))
    setLoading(false)
  }, [name, dispatch])

  return (
    <Row justify={'center'}>
      <Col xs={24} md={20} lg={14}>
        <PageHeader onBack={history.goBack} title="사용자 정보">
          {user && (
            <Descriptions layout="vertical" bordered column={1}>
               <Descriptions.Item label="이름">
                 <Typography.Text>{user.name}</Typography.Text>
               </Descriptions.Item>
               <Descriptions.Item label="소속">{user.department}</Descriptions.Item>
               <Descriptions.Item label="태그">{user.tag}</Descriptions.Item>
               <Descriptions.Item label="수정 내역">수정 내역</Descriptions.Item>
            </Descriptions>
          )}
          {!user && loading && (
            <Typography.Text>존재하지 않는 사용자 입니다.</Typography.Text>
          )}
        </PageHeader>
      </Col>
    </Row>
  );
}

export default User;