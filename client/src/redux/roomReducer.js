import api from '../services/api';
import { apiRoutes } from '../constants';

const CREATE_ROOM = 'CREATE_ROOM';
const CREATE_ROOM_ERROR = 'CREATE_USER_ERROR';
const GET_ROOMS = 'GET_ROOMS';
const GET_ROOMS_ERROR = 'GET_ROOMS_ERROR';
// const UPDATE_USER = 'UPDATE_USER';
// const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';

const INITIAL_STATE = {
  data: {
    id: '',
    name: '',
    creadtedBy: '',
    messages: [],
  },
  serverError: false,
  rooms: [],
};

export const createRoom = room => async (dispatch, getState) => {
  try {
    const { rooms } = apiRoutes;

    const { data } = await api.post(rooms, {
      body: room,
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

// export const updateUser = user => async (dispatch, getState) => {
//   try {
//     const { users } = apiRoutes;

//     const { data } = await api.put(`${users}/${user.id}`, {
//       user,
//     });

//     dispatch({ type: UPDATE_USER, payload: data.user });
//   } catch (error) {
//     dispatch({ type: UPDATE_USER_ERROR, error });
//   }
// };

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
    case GET_ROOMS:
      return {
        ...state,
        rooms: action.payload,
      };
    default:
      return state;
  }
}
