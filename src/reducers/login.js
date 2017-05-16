import { LOGIN, LOGOUT, LOGIN_WITH_TOKEN, UPDATE_PROFILE } from '../constants/login';

export default function (state = {}, action){
  switch (action.type) {
    case LOGIN:
      return action.payload.user;
    case LOGOUT:
      return {};
    case LOGIN_WITH_TOKEN:
      return action.payload.user;
    case UPDATE_PROFILE:
      return Object.assign({},state, {user: action.payload.user});
    default:
     return state;
  }
}