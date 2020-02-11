import api from '../services/api';
import { apiRoutes } from '../constants';

const CREATE_ROOM = 'CREATE_ROOM';
const CREATE_ROOM_ERROR = 'CREATE_USER_ERROR';
const GET_ROOMS = 'GET_ROOMS';
const GET_ROOMS_SUCCESS = 'GET_ROOMS_SUCCESS';
const GET_ROOMS_ERROR = 'GET_ROOMS_ERROR';
const GET_ROOM = 'GET_ROOM';
const GET_ROOM_SUCCESS = 'GET_ROOM_SUCCESS';
const GET_ROOM_ERROR = 'GET_ROOM_ERROR';

const INITIAL_STATE = {
  newRoom: {
    id: '',
    name: '',
    messages: [],
  },
  serverError: false,
  rooms: [],
  currentRoom: {},
  loading: false
};

export const createRoom = room => async dispatch => {
  try {
    const { rooms } = apiRoutes;

    const { data } = await api.post(rooms, { data: room });

    dispatch({ type: CREATE_ROOM, payload: data.room });
  } catch (error) {
    dispatch({ type: CREATE_ROOM_ERROR, error });
  }
};

export const updaRoom = (messageInfos, id) => async dispatch => {
  try {
    const { rooms } = apiRoutes;

    const { data } = await api.put(`${rooms}/${id}`, {
      data: messageInfos,
    });

    dispatch({ type: CREATE_ROOM, payload: data.room });
  } catch (error) {
    dispatch({ type: CREATE_ROOM_ERROR, error });
  }
};

export const getAllRooms = () => async dispatch => {
  dispatch({ type: GET_ROOMS });
  try {
    const { rooms } = apiRoutes;

    const { data } = await api(rooms);

    dispatch({ type: GET_ROOMS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ROOMS_ERROR, error });
  }
};

export const getRoomsByName = name => async dispatch => {
  dispatch({ type: GET_ROOM });
  try {
    const { rooms } = apiRoutes;

    const { data } = await api(`${rooms}/${name}`);

    dispatch({ type: GET_ROOM_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ROOM_ERROR, error });
  }
};

export function room(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case CREATE_ROOM:
      return {
        ...state,
        currentRoom: action.payload,
      };
    case CREATE_ROOM_ERROR:
      return {
        ...state,
        currentRoom: {},
        serverError: true,
      };
    case GET_ROOMS:
      return {
        ...state,
        rooms: [],
        loading: true
      };
    case GET_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: action.payload,
        loading: false
      };
    case GET_ROOMS_ERROR:
      return {
        ...state,
        rooms: [],
        serverError: true,
      };
    case GET_ROOM:
      return {
        ...state,
        currentRoom: [],
        loading: true
      };
    case GET_ROOM_SUCCESS:
      return {
        ...state,
        currentRoom: action.payload[0],
        loading: false
      };
    case GET_ROOM_ERROR:
      return {
        ...state,
        currentRoom: {},
        serverError: true,
      };
    default:
      return state;
  }
}
