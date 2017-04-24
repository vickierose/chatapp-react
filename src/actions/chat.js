import {SEND_MESSAGE, JOIN_CHAT, LEAVE_CHAT, GET_MESSAGES} from '../constants/chat';
import {getRequest} from '../utils/fetch';

export {
  sendMessage,
  joinChat,
  leaveChat,
  getMessages,
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
  return dispatch => getRequest('http://eleksfrontendcamp-mockapitron.rhcloud.com/messages')
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