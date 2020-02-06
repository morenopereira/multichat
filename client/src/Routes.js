import React from 'react';
import { object } from 'prop-types';
import { BrowserRouter, Route, Switch, Router, Redirect } from 'react-router-dom';

import Home from './pages/Home';

const Routes = ({ history }) => {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} exact />

          <Route path="*">
            <Redirect
              to={{
                pathname: '/app/ops',
                state: {
                  referrer: window && window.location.href,
                  message: '404',
                },
              }}
            />
          </Route>
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

Routes.propTypes = {
  history: object.isRequired,
};

export default Routes;
