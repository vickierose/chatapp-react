import { LOGIN, LOGOUT } from '../constants/login';

export default function (state = {}, action){
  switch (action.type) {
    case LOGIN:
      return action.payload.user
  
    case LOGOUT:
      return {};

    default:
     return state;
  }
}