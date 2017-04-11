import React, { Component } from 'react';

import {ChatSidebarListItem} from './chat-sidebar-list-item.jsx'
import {USERS} from './../mock-data/mock-users.js'

export class ChatSidebarList extends Component {
    constructor (props){
        super(props);
        this.state = {
            users: USERS,
        }
    }

    render() {
        return (
           <ul className='chat-sidebar-list'>
               {this.state.users.map(user => (
                    <ChatSidebarListItem user={user} key={user.id} />
               ))}
                
           </ul>
        );
    }
}