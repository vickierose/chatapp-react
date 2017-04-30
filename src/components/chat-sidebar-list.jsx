import React, { Component } from 'react';

import {ChatSidebarListItem} from './chat-sidebar-list-item.jsx';
import {getRequest} from '../utils/fetch';

export class ChatSidebarList extends Component {
    constructor (props){
        super(props);
        this.state = {};
    }

    get userlist(){
        const { userlist } = this.props;
        return userlist.map((user, i) =>(
            <ChatSidebarListItem user={user} key={i}/>
        ))
    }

    render() {
        return (
           <ul className='chat-sidebar-list'>
               {this.userlist}
           </ul>
        );
    }
}