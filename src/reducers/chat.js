import { SEND_MESSAGE, JOIN_CHAT, LEAVE_CHAT } from '../constants/chat';

export default function (state = [], action){
    switch (action.type) {
        case SEND_MESSAGE:
            return [...state, action.payload.message];
        case JOIN_CHAT:
            return [...state, action.payload.username];
        case LEAVE_CHAT:
            return [...state, action.payload.username];
        default:
        return state
    }
};