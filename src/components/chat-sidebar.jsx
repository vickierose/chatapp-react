import React, { Component } from 'react';

import {ChatSidebarNav} from './chat-sidebar-nav.jsx';
import {ChatSidebarList} from './chat-sidebar-list.jsx';

const classNames = require('classnames');

export class ChatSidebar extends Component {
    constructor (props){
        super(props);
        this.state = {
            isSidebarOpen: true
        }
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar (){
        this.setState(state => ({isSidebarOpen: !state.isSidebarOpen}));
    }

    render() {
        let sidebarClasses = classNames({
            'chat-sidebar': true,
            'chat-sidebar--closed': !this.state.isSidebarOpen
        })

        return (
            <aside className={sidebarClasses}>
                <ChatSidebarNav sizingSidebar={this.toggleSidebar} 
                                arrowClosed={this.state.isSidebarOpen}/>
                <ChatSidebarList selectChat={this.props.changeChat}/>
            </aside>
        );
    }
}