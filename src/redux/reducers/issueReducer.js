const SET_ISSUES = 'SET_ISSUES';
const SET_PROJECT_NAMES = 'SET_PROJECT_NAMES';
const SET_WORK_ITEM = 'SET_WORK_ITEM';
const SET_NEW_WORK_ITEM = 'SET_NEW_WORK_ITEM';

const defaultState = {
  issues: [],
  names: [],
  workItem: {},
  newWorkItem: {},
};

export default function issueReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ISSUES: {
      return { ...state, issues: action.payload };
    }
    case SET_PROJECT_NAMES: {
      return { ...state, names: action.payload };
    }
    case SET_WORK_ITEM: {
      return { ...state, workItem: action.payload };
    }
    case SET_NEW_WORK_ITEM: {
      return { ...state, newWorkItem: action.payload };
    }
    default:
      return state;
  }
}

export const setIssues = (issues) => ({ type: SET_ISSUES, payload: issues });
export const setProjectNames = (names) => ({ type: SET_PROJECT_NAMES, payload: names });
export const setWorkItem = (item) => ({ type: SET_WORK_ITEM, payload: item });
export const setNewWorkItem = (item) => ({ type: SET_NEW_WORK_ITEM, payload: item });
