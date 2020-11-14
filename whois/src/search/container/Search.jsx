import React from 'react';
import {Row, Col, Typography} from 'antd';
import Settings from '../components/Settings';

function Search(props) {
  return (
    <>
      <Row justify={"end"} style={{padding: 20}}>
        <Col><Settings /></Col>
      </Row>
      <Row justify={"center"} style={{marginTop: 100}}>
        <Col>
          <Typography.Title>찾아야한다</Typography.Title>
          </Col>
      </Row>
      <Row  justify={"center"} style={{marginTop: 50}}>
        <Col span={12}>검색</Col>
      </Row>
    </>
  );
}

export default Search;