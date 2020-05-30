import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import history from "./lib/history";

import NavBar from './components/navbar/NavBar';
import HomePage from './components/home/HomePage';
import LinkPage from './LinkPage';

export default class App extends React.Component {
  render() {    
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <NavBar />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exactly path='/link' component={LinkPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}