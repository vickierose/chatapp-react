import {SEND_MESSAGE, JOIN_CHAT, LEAVE_CHAT} from '../constants/chat';

export {
  sendMessage,
  joinChat,
  leaveChat
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