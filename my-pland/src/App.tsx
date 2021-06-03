import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import HeaderPage from './pages/HeaderPage';

function App() {
  return (
    <div className={'bg-emerald-100 h-screen'}>
      <Router>
        <Switch>
          <Route path={'/'} exact component={MainPage}/>
          <Route path={'/components/header'} component={HeaderPage}/>
          <Redirect from="*" to="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
