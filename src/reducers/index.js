import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login from './login';
import chat from './chat';

const reducers = {
  login,
  chat
};

const rootReducer = combineReducers({...reducers, router: routerReducer});
export default rootReducer;