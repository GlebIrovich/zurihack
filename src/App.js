import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Time from './pages/Time';
import { store } from './store/store';
import Test from './Test';
import './reset.css';
import { routes } from './constants';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={routes.time}>
            <Time />
          </Route>
          <Route path={routes.main}>
            <Main />
          </Route>
        </Switch>
      </Router>
      <Test />
    </Provider>
  );
}

export default App;
