const SET_USER = 'SET_USER';

const defaultState = {
  isAuth: false,
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
}

export const setUser = (bool) => ({ type: SET_USER, payload: bool });
