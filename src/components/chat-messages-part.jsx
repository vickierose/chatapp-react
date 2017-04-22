import React, { Component } from 'react';

import {ChatMessagesList} from './chat-messages-list.jsx';
import {CreateNewMessage} from './chat-messages-new-message.jsx';

export class ChatMessagesPart extends Component {
    render() {
        return (
            <div className='chat-messages-part'>
                <ChatMessagesList />
                <CreateNewMessage />
            </div>
        );
    }
}