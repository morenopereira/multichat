import api from '../services/api';
import { apiRoutes } from '../constants';

const CREATE_ROOM = 'CREATE_ROOM';
const CREATE_ROOM_ERROR = 'CREATE_USER_ERROR';
const GET_ROOMS = 'GET_ROOMS';
const GET_ROOMS_ERROR = 'GET_ROOMS_ERROR';
const GET_ROOM = 'GET_ROOM';
const GET_ROOM_ERROR = 'GET_ROOM_ERROR';

const INITIAL_STATE = {
  data: {
    id: '',
    name: '',
    creadtedBy: '',
    messages: [],
  },
  serverError: false,
  rooms: [],
  room: {},
};

export const createRoom = room => async (dispatch, getState) => {
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

export const getAllRooms = () => async (dispatch, getState) => {
  try {
    const { rooms } = apiRoutes;

    const { data } = await api(rooms);

    dispatch({ type: GET_ROOMS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ROOMS_ERROR, error });
  }
};

export const getRoomsById = id => async (dispatch, getState) => {
  try {
    const { rooms } = apiRoutes;

    const { data } = await api(`${rooms}/${id}`);

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
        data: {
          ...state.data,
          id: action.payload._id,
          name: action.payload.name,
          createdBy: action.payload.createdBy,
        },
      };
    case CREATE_ROOM_ERROR:
      return {
        ...state,
        data: {},
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
        room: action.payload,
      };
    case GET_ROOM_ERROR:
      return {
        ...state,
        room: {},
        serverError: true,
      };
    default:
      return state;
  }
}
