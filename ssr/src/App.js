import {Route} from 'react-router-dom';
import Menu from './components/Menu';
import RedPage from './pages/RedPage';
import BluePage from './pages/BluePage';

function App() {
  return (
    <div>
      <Menu />
      <Route path={'/red'} component={RedPage}/>
      <Route path={'/blue'} component={BluePage}/>
    </div>
  );
}

export default App;
