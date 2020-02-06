import React from 'react';
import { object } from 'prop-types';
import { BrowserRouter, Route, Switch, Router, Redirect } from 'react-router-dom';

import { routes } from './constants';

import Home from './pages/Home';
import Rooms from './pages/Rooms';

const Routes = ({ history }) => {
  const { home, rooms } = routes;

  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route path={home} component={Home} exact />
          <Route path={rooms} component={Rooms} exact />

          <Route path="*">
            <Redirect
              to={{
                pathname: '/ops',
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
