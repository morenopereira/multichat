import React from 'react';
import { object } from 'prop-types';
import {
  BrowserRouter, Route, Switch, Router,
} from 'react-router-dom';

import { routes } from './constants';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Room from './pages/Room';

const Routes = ({ history }) => {
  const {
    home, rooms, room, roomId,
  } = routes;

  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route path={home} component={Home} exact />
          <Route path={rooms} component={Rooms} exact />
          <Route path={[room, roomId]} component={Room} exact />
        </Switch>
      </Router>
    </BrowserRouter>
  );
};

Routes.propTypes = {
  history: object.isRequired,
};

export default Routes;
