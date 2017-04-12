import React, { Component } from 'react';

import {ChatSidebarListItem} from './chat-sidebar-list-item.jsx'
import {CHATS} from './../mock-data/mock-chats.js'

export class ChatSidebarList extends Component {
    constructor (props){
        super(props);
        this.state = {
            chats: CHATS,
        };

        this.handleCLickOnChat=this.handleCLickOnChat.bind(this);
    }

    handleCLickOnChat(e){
        this.props.selectChat(e.target)
    }

    render() {
        return (
           <ul className='chat-sidebar-list' onClick={this.handleCLickOnChat}>
               {this.state.chats.map(chat => (
                    <ChatSidebarListItem chat={chat} key={chat.id} />
               ))}
                
           </ul>
        );
    }
}