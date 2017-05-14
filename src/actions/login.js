import { LOGIN, LOGOUT, LOGIN_WITH_TOKEN } from '../constants/login';
import { post } from '../utils/fetch';

export {
  loginUser,
  logoutUser,
  loginWithToken
};

function loginUser(credentials) {
 
  return dispatch => {
     return post('http://localhost:3000/auth/login', credentials).then(response => {
       return response.json()
       .then(user => {
         return dispatch({
           type: LOGIN,
           payload: {
             user
           }
         });
       })
       .catch(err => console.log(err));
     });
    };
}

function logoutUser() {
  return {
    type: LOGOUT
  };
}

function loginWithToken(userdata) {
  return {
    type: LOGIN_WITH_TOKEN,
    payload: {
      user: JSON.parse(userdata)
    }
  }
}