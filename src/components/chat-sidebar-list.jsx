import React, { Component } from 'react';

import {ChatSidebarListItem} from './chat-sidebar-list-item.jsx'

export class ChatSidebarList extends Component {
    render() {
        return (
           <ul className='chat-sidebar-list'>
                <ChatSidebarListItem />
                <ChatSidebarListItem />
           </ul>
        );
    }
}