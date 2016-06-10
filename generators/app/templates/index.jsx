'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

const Home = React.createClass({
  render() {
    return (
        <h1>Hello World</h1>
    );
  }
});

render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
    </Route>
  </Router>
), document.getElementById('app'));
