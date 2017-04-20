import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import history from '../history';

const middleware = process.env.NODE_ENV === 'production' ?
  [routerMiddleware(history), thunk] :
  [routerMiddleware(history), thunk, createLogger()];

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}