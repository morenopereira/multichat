import { createStore, applyMiddleware, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { user } from '../redux/user';
import { room } from '../redux/rooms';

export const reducers = combineReducers({
  user,
  room,
});

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));

export default store;
