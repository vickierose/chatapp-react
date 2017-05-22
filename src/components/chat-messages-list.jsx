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

    get scrollHeight(){
        if(document.documentElement.clientWidth <= 600){
            return document.documentElement.clientHeight - 213
        }else{
            return document.documentElement.clientHeight - 143
        }
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
                    <ChatMessage currentUser={this.props.login.user}
                                 message={message}
                                 key={message.time}/>
                ))
  }

    render() {
        //  const height = document.documentElement.clientHeight - 80;
        return (
            <Scrollbars style={{height: this.scrollHeight}} ref='scrollbars'>
                <ul className='chat-messages-list'>
                    {this.chat}
                </ul>
            </Scrollbars>
        );
    }
}

