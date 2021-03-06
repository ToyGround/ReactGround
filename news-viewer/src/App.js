import {useState} from 'react';
import axios from 'axios';
import config from './config';

const {URL, API_KEY} = config;

function App() {
  const [data, setData] = useState(null);

  const onClick = async () => {
    try {
      const response = await axios(`${URL + API_KEY}`);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>News Viewer</h1>
      <button onClick={onClick}>불러오기</button>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly/>}
    </>
  );
}

export default App;
