import { LOGIN, LOGOUT } from '../constants/login';
import { post } from '../utils/fetch';

export {
  loginUser,
  logoutUser
};

function loginUser() {
  const credentials = {"username":"poiu","pass":"zxcv"};

  return dispatch => {
     return post('https://front-camp-chat.herokuapp.com/login', credentials).then(response => {
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