import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';

export default class Routes extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" render={props => <Home {...props} />} />
              <Redirect from="/*" to="/" />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
