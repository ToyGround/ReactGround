import {useCallback, useState} from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

function App() {
  const [category, setCategory] = useState('all');
  const onClick = useCallback(category => setCategory(category), []);
  return (
    <>
      <h1>News Viewer</h1>
      <Categories category={category} onClick={onClick}/>
      <NewsList category={category}/>
    </>
  );
}

export default App;
