import React, { Component } from 'react';
import {ChatMessage} from './chat-message.jsx';

export class ChatMessagesList extends Component {
    render() {
        return (
            <ul className='chat-messages-list'>
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
            </ul>
        );
    }
}

