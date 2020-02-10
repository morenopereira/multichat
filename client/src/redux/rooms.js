import api from '../services/api';
import { apiRoutes } from '../constants';

const CREATE_ROOM = 'CREATE_ROOM';
const CREATE_ROOM_ERROR = 'CREATE_USER_ERROR';
const GET_ROOMS = 'GET_ROOMS';
const GET_ROOMS_ERROR = 'GET_ROOMS_ERROR';
const GET_ROOM = 'GET_ROOM';
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
};

export const createRoom = room => async dispatch => {
  try {
    const { rooms } = apiRoutes;

    const { data } = await api.post(rooms, {
      room,
    });

    dispatch({ type: CREATE_ROOM, payload: data.room });
  } catch (error) {
    dispatch({ type: CREATE_ROOM_ERROR, error });
  }
};

export const updaRoom = (messages, id) => async dispatch => {
  try {
    const { rooms } = apiRoutes;

    const { data } = await api.put(`${rooms}/${id}`, {
      messages,
    });

    dispatch({ type: CREATE_ROOM, payload: data.room });
  } catch (error) {
    dispatch({ type: CREATE_ROOM_ERROR, error });
  }
};

export const getAllRooms = () => async dispatch => {
  try {
    const { rooms } = apiRoutes;

    const { data } = await api(rooms);

    dispatch({ type: GET_ROOMS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ROOMS_ERROR, error });
  }
};

export const getRoomsByName = name => async dispatch => {
  try {
    const { rooms } = apiRoutes;

    const { data } = await api(`${rooms}/${name}`);

    dispatch({ type: GET_ROOM, payload: data });
  } catch (error) {
    dispatch({ type: GET_ROOM_ERROR, error });
  }
};

export function room(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case CREATE_ROOM:
      return {
        ...state,
        newRoom: action.payload,
      };
    case CREATE_ROOM_ERROR:
      return {
        ...state,
        newRoom: {},
        serverError: true,
      };
    case GET_ROOMS:
      return {
        ...state,
        rooms: action.payload,
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
        currentRoom: action.payload[0],
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
