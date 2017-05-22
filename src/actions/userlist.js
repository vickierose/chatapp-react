import {GET_USERS, CLEAR_USERS} from '../constants/userlist';
import {getRequest} from '../utils/fetch';
import {apiUrl} from '../api-config';

export {
    getUsers,
    clearUsers
}

function getUsers(){
  return dispatch => getRequest(apiUrl + '/users')
  .then(res => res.json())
  .then(users => {
    return dispatch({
      type: GET_USERS,
      payload: {
        users
      }
    })
  })
}

function clearUsers() {
  return {
    type: CLEAR_USERS
  }
}