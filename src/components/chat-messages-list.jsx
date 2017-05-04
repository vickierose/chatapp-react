import React, { Component } from 'react';
import ChatMessage from './chat-message.jsx';
import { Scrollbars } from 'react-custom-scrollbars';

export class ChatMessagesList extends Component {
    constructor (props){
        super(props);
        this.state = {
        }
    }

    scrollToBottom(){
        this.refs.scrollbars.scrollToBottom()
    }

    componentDidMount() {
        this.scrollToBottom();
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
            <Scrollbars style={{height: 'calc(100vh - 143px)'}} ref='scrollbars'>
                <ul className='chat-messages-list'>
                    {this.chat}
                </ul>
            </Scrollbars>
        );
    }
}

