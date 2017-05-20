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
    const lSData = JSON.parse(userdata);
  return dispatch => {
    return getRequest('http://localhost:3000/users/'
          +lSData.user._id)
    .then(res => res.json())
    .then(user =>{
      return dispatch({
        type: LOGIN_WITH_TOKEN,
        payload: {
          user,
          token: lSData.token,
          tokenType: lSData.tokenType
        }
      })
    })
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