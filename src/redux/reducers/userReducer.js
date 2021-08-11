const SET_USER = 'SET_USER';
const SET_USERS = 'SET_USERS';
const SET_CUR_USER = 'SET_CUR_USER';

const defaultState = {
  isAuth: false,
  users: [],
  curUser: {},
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, isAuth: action.payload };
    case SET_USERS:
      return { ...state, users: action.payload };
    case SET_CUR_USER:
      return { ...state, curUser: action.payload };
    default:
      return state;
  }
}

export const setUser = (bool) => ({ type: SET_USER, payload: bool });
export const setUsers = (users) => ({ type: SET_USERS, payload: users });
export const setCurUser = (user) => ({ type: SET_CUR_USER, payload: user });
