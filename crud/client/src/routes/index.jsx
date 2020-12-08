import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import HomeRoute from './Home';
import DetailRoute from './Detail';
import CreateRoute from './Create';
import Header from '../components/Header';

function RootRouter () {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={"/"} exact component={HomeRoute}/>
        <Route path={"/detail:id"} component={DetailRoute}/>
        <Route path={"/create"} component={CreateRoute}/>
        <Redirect path={"*"} to={"/"}/>
      </Switch>
    </Router>
  )
}

export default RootRouter