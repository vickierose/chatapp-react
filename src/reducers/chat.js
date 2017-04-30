import { SEND_MESSAGE, JOIN_CHAT, LEAVE_CHAT, GET_MESSAGES, CLEAR_MESSAGES } from '../constants/chat';

export default function (state = [], action){
    switch (action.type) {
        case SEND_MESSAGE:
            return [...state, action.payload.message];
        case JOIN_CHAT:
            return [...state, action.payload.user];
        case LEAVE_CHAT:
            return [...state, action.payload.user];
        case GET_MESSAGES:
            return [...state, ...action.payload.messages];
        case CLEAR_MESSAGES:
            return [];
        default:
        return state
    }
};