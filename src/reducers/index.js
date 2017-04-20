import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login from './login';

const reducers = {
  login
};

const rootReducer = combineReducers({...reducers, router: routerReducer});
export default rootReducer;