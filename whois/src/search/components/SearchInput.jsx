import React from 'react';
import {AutoComplete, Input, Space, Typography} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {actions} from '../state';
import {actions as userActions} from '../../user/state'


function SearchInput(props) {
  const keyword = useSelector(state => state.search.keyword);
  const autoCompletes = useSelector(state => state.search.autoCompletes);
  const dispatch = useDispatch();
  const history = useHistory()
  const setKeyword = (value) => {
    if (value !== keyword) {
      dispatch(actions.setValue('keyword', value));
      dispatch(actions.fetchAutoComplete(value));
    }
  };
  const gotoUser = (value) => {
    const user = autoCompletes.find(item => item.name === value);
    if(user) {
      dispatch(userActions.setValue('user', user))
      history.push(`/user/${user.name}`)
    }
  };

  return (
    <AutoComplete
      value={keyword}
      onChange={setKeyword}
      onSelect={gotoUser}
      style={{width: '100%'}}
      options={autoCompletes.map(item => ({
        value: item.name,
        label : (
          <Space>
            <Typography.Text strong>{item.name}</Typography.Text>
            <Typography.Text type='secondary'>{item.department}</Typography.Text>
            <Typography.Text>{item.tag}</Typography.Text>
          </Space>
        )
      }))}
      autoFocus
    >
      <Input size="large" placeholder="input here" prefix={<SearchOutlined/>}/>
    </AutoComplete>
  );
}

export default SearchInput;