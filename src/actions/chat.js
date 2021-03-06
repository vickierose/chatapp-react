import {SEND_MESSAGE, JOIN_CHAT, LEAVE_CHAT, GET_MESSAGES, CLEAR_MESSAGES} from '../constants/chat';
import {getRequest} from '../utils/fetch';
import {apiUrl} from '../api-config';

export {
  sendMessage,
  joinChat,
  leaveChat,
  getMessages,
  clearMessages
};

function sendMessage(message) {
  const { msg, user, time } = message;
  return {
    type: SEND_MESSAGE,
    payload: {
      message: {msg, user, time}
    }
  };
}

function joinChat(userdata) {
  const msg = 'joined chat';
  const {user, time} = userdata;
  return {
    type: JOIN_CHAT,
    payload: {
      user: {msg, user, time}
    }
  };
}

function leaveChat(userdata) {
  const msg = 'leaved chat';
  const {user, time} = userdata;
  return {
    type: LEAVE_CHAT,
    payload: {
      user: {msg, user, time}
    }
  };
}

function getMessages(){
  return dispatch => getRequest(apiUrl + '/chat')
   .then(res => res.json())
   .then(messages =>{
     return dispatch({
       type: GET_MESSAGES,
       payload: {
         messages
       }
     })
   })
}

function clearMessages(){
  return {
    type: CLEAR_MESSAGES
  }
}
