import React, { Component } from 'react';

import {ChatSidebar} from './chat-sidebar.jsx';
import {ChatMessagesPart} from './chat-messages-part.jsx';


export class ChatPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentChat: '1'
        }
        this.changeChat = this.changeChat.bind(this);
    }
    changeChat(id){
        this.setState(state =>({currentChat: id}));
        console.log(this.state.currentChat);
    }

    render() {
        return (
            <div className='chat-page'>
                <ChatSidebar changeChat={this.changeChat}/>
                <ChatMessagesPart />
            </div>
        );
    }
}