import { LOGIN, LOGOUT, LOGIN_WITH_TOKEN } from '../constants/login';

export default function (state = {}, action){
  switch (action.type) {
    case LOGIN:
      return action.payload.user;
    case LOGOUT:
      return {};
    case LOGIN_WITH_TOKEN:
      return action.payload.user;
    default:
     return state;
  }
}