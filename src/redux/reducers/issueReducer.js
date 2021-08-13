const SET_ISSUES = 'SET_ISSUES';
const SET_PROJECT_NAMES = 'SET_PROJECT_NAMES';

const defaultState = {
  issues: [],
  names: [],
};

export default function issueReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ISSUES: {
      return { ...state, issues: action.payload };
    }
    case SET_PROJECT_NAMES: {
      return { ...state, names: action.payload };
    }
    default:
      return state;
  }
}

export const setIssues = (issues) => ({ type: SET_ISSUES, payload: issues });
export const setProjectNames = (names) => ({ type: SET_PROJECT_NAMES, payload: names });
