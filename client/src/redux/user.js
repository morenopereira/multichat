import api from '../services/api';
import { apiRoutes } from '../constants';

const CREATE_USER = 'CREATE_USER';
const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
const GET_USER = 'GET_USER';
const GET_USER_ERROR = 'GET_USER_ERROR';
const UPDATE_USER = 'UPDATE_USER';
const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';

const INITIAL_STATE = {
  data: {},
  serverError: false,
};

export const createUser = user => async dispatch => {
  try {
    const { users } = apiRoutes;

    const { data } = await api.post(users, { user });

    sessionStorage.setItem('@chatio_id', data.user._id);

    dispatch({ type: CREATE_USER, payload: data.user });
  } catch (error) {
    dispatch({ type: CREATE_USER_ERROR, error });
  }
};

export const getUser = () => async dispatch => {
  try {
    const { users } = apiRoutes;

    const id = sessionStorage.getItem('@chatio_id');

    const { data } = await api(`${users}/${id}`);

    dispatch({ type: GET_USER, payload: data });
  } catch (error) {
    dispatch({ type: GET_USER_ERROR, error });
  }
};

export const updateUser = user => async dispatch => {
  try {
    const { users } = apiRoutes;

    const { data } = await api.put(`${users}/${user._id}`, { user });

    dispatch({ type: UPDATE_USER, payload: data.user });
  } catch (error) {
    dispatch({ type: UPDATE_USER_ERROR, error });
  }
};

export function user(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        data: action.payload,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        data: {},
        serverError: true,
      };
    case UPDATE_USER:
      return {
        ...state,
        data: action.payload,
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        data: {},
        serverError: true,
      };
    case GET_USER:
      return {
        ...state,
        data: action.payload,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        data: {},
        serverError: true,
      };
    default:
      return state;
  }
}
