import React, { Component } from 'react';
import {ChatMessage} from './chat-message.jsx';

export class ChatMessagesList extends Component {
    constructor (props){
        super(props);
        this.state = {
        }
    }
   
    render() {
        return (
            <ul className='chat-messages-list'>
                {/*{this.state.messages.map(message =>(
                    <ChatMessage />
                ))} */}
            </ul>
        );
    }
}

