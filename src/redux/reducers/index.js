import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import issueReducer from './issueReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  issue: issueReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
