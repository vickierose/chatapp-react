import React, { Component } from 'react';
import {ChatMessage} from './chat-message.jsx';

import {MESSAGES} from './../mock-data/mock-messages.js';
import {USERS} from './../mock-data/mock-users.js';

export class ChatMessagesList extends Component {
    constructor (props){
        super(props);
        this.state = {
            messages: MESSAGES,
            users: USERS
        }
    }
    
    render() {
        return (
            <ul className='chat-messages-list'>
                {this.state.messages.map(message =>(
                    <ChatMessage message={message} key={message.id}/>
                ))} 
            </ul>
        );
    }
}

