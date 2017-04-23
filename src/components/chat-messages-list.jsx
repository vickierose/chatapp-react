import React, { Component } from 'react';
import ChatMessage from './chat-message.jsx';

export class ChatMessagesList extends Component {
    constructor (props){
        super(props);
        this.state = {
        }
    }
    get chat() {
    const { chat } = this.props;
    return chat.map(message =>(
                    <ChatMessage message={message} key={message.time}/>
                ))
  }

    render() {
        return (
            <ul className='chat-messages-list'>
                {this.chat}
            </ul>
        );
    }
}

