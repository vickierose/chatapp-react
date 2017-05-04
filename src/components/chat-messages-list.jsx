import React, { Component } from 'react';
import ChatMessage from './chat-message.jsx';

export class ChatMessagesList extends Component {
    constructor (props){
        super(props);
        this.state = {
        }
    }

    scrollToBottom(){
        const messageList = document.querySelector('.chat-messages-list');
        messageList.scrollTop += messageList.scrollHeight;
    }

    componentWillMount() {
        // this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
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

