import { LOGIN, LOGOUT, LOGIN_WITH_TOKEN, UPDATE_PROFILE, GOOGLE_LOGIN } from '../constants/login';
import { post, put, getRequest } from '../utils/fetch';

export {
  loginUser,
  logoutUser,
  googleLogin,
  loginWithToken,
  updateProfile
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

function googleLogin(userdata){
  return dispatch => {
    return post('http://localhost:3000/auth/google', userdata)
      .then(res => res.json())
      .then(user =>{
        return dispatch({
          type: GOOGLE_LOGIN,
          payload: {user}
        })
      })
  }
}

function loginWithToken(userdata) {
  return {
    type: LOGIN_WITH_TOKEN,
    payload: {
      user: JSON.parse(userdata)
    }
  }
}

function updateProfile(data) {
  return dispatch =>{
    return put(data.url, data.cred)
      .then(res =>res.json())
      .then(user =>{
        return dispatch({
          type: UPDATE_PROFILE,
          payload:{
            user
          }
        })
      })
  }
}