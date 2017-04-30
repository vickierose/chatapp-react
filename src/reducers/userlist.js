import {GET_USERS, CLEAR_USERS} from '../constants/userlist';


export default function (state = [], action){
    switch (action.type) {
        case GET_USERS:
            return [...state, ...action.payload.users];
        case CLEAR_USERS:
            return [] 
        default:
            return state
    }
};