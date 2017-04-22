import {SEND_MESSAGE, JOIN_CHAT, LEAVE_CHAT} from '../constants/chat';

export {
  sendMessage,
  joinChat,
  leaveChat
};

function sendMessage(msg) {
  const { message, username } = msg;

  return {
    type: SEND_MESSAGE,
    payload: {
      message: `${username} >> ${message}`
    }
  };
}

function joinChat(username) {
  return {
    type: JOIN_CHAT,
    payload: {
      username: `${username} joined to chat`
    }
  };
}

function leaveChat(username) {
  return {
    type: LEAVE_CHAT,
    payload: {
      username: `${username} left chat`
    }
  };
}