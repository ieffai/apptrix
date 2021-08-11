const SET_USER = 'SET_USER';
const SET_USERS = 'SET_USERS';

const defaultState = {
  isAuth: false,
  users: [],
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, isAuth: action.payload };
    case SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

export const setUser = (bool) => ({ type: SET_USER, payload: bool });
export const setUsers = (users) => ({ type: SET_USERS, payload: users });
