import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login from './login';
import chat from './chat';
import userlist from './userlist';

const reducers = {
  login,
  chat,
  userlist
};

const rootReducer = combineReducers({...reducers, router: routerReducer});
export default rootReducer;