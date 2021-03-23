import {useDispatch, useSelector} from 'react-redux';
import {giphyAsync} from './modules/giphy';
import {useEffect} from 'react';

function App() {
  const dispatch = useDispatch();
  const {giphy, loading} = useSelector(({giphy}) => giphy);
  const onClick = () => {
    dispatch(giphyAsync());
  };
  useEffect(() => {
    if (giphy) {
      console.log(giphy);
    }
  }, [giphy]);
  return (
    <div className="App">
      <button onClick={onClick}>랜덤이미지 호출</button>
      {loading && <div>로딩중..</div>}
      {giphy && giphy.map(item => <div key={item.id}>
          <img src={item.images.original.url} alt={item.title}/>
          <p>{item.title}</p>
      </div>)}
    </div>
  );
}

export default App;
