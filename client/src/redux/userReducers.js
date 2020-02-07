const CREATE_USER = 'CREATE_USER';
const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

const INITIAL_STATE = {
  data: {
    nickName: '',
    restriction: true,
    email: '',
    name: '',
    birthday: '',
  },
};

export const createUser = user => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_USER, payload: user });
  } catch (error) {
    dispatch({ type: CREATE_USER_ERROR, error });
  }
};

export function user(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        data: {
          ...state.data,
          nickName: action.payload.nickName,
          restriction: action.payload.restriction,
          email: action.payload.email,
          name: action.payload.name,
          birthday: action.payload.birthday,
        },
      };
    default:
      return state;
  }
}
