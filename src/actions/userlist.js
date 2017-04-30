import {GET_USERS} from '../constants/userlist';
import {getRequest} from '../utils/fetch';

export {
    getUsers,
}

function getUsers(){
  return dispatch => getRequest('http://eleksfrontendcamp-mockapitron.rhcloud.com/users')
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