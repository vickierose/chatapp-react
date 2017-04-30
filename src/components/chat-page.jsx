import React, { Component } from 'react';

import ChatSidebar from './chat-sidebar.jsx';
import ChatMessagesPart from './chat-messages-part.jsx';


export class ChatPage extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className='chat-page'>
                <ChatSidebar />
                <ChatMessagesPart />
            </div>
        );
    }
}