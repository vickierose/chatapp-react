import {GET_USERS} from '../constants/userlist';


export default function (state = [], action){
    switch (action.type) {
        case GET_USERS:
            return [...state, ...action.payload.users]; 
        default:
            return state
    }
};