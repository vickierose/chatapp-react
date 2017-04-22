import React, { Component } from 'react';

import {ChatSidebarListItem} from './chat-sidebar-list-item.jsx'

export class ChatSidebarList extends Component {
    constructor (props){
        super(props);
        this.state = {
        };

    }

    render() {
        return (
           <ul className='chat-sidebar-list'>
               {/*{this.state.chats.map(chat => (*/}
                    <ChatSidebarListItem />
               {/*))}}*/}
                
           </ul>
        );
    }
}