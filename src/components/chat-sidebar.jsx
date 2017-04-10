import React, { Component } from 'react';

import {ChatSidebarNav} from './chat-sidebar-nav.jsx';
import {ChatSidebarList} from './chat-sidebar-list.jsx';

export class ChatSidebar extends Component {
    render() {
        return (
            <aside className='chat-sidebar'>
                <ChatSidebarNav />
                <ChatSidebarList />
            </aside>
        );
    }
}