import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import history from "./lib/history";

import NavBar from './components/navbar/NavBar';
import HomePage from './components/home/HomePage';
import TransposePage from './components/transpose/TransposePage';
import VlookupPage from './components/vlookup/VlookupPage';
import FilterPage from './components/filter/FilterPage';

export default class App extends React.Component {
  render() {    
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <NavBar />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exactly path='/transpose' component={TransposePage} />
              <Route exactly path='/vlookup' component={VlookupPage} />
              <Route exactly path='/filter' component={FilterPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}