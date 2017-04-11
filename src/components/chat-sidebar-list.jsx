import React, { Component } from 'react';

import {ChatSidebarListItem} from './chat-sidebar-list-item.jsx'
import {USERS} from './../mock-data/mock-users.js'

export class ChatSidebarList extends Component {
    constructor (props){
        super(props);
        this.state = {
            users: USERS,
        }
        // this.getUserList = this.getUserList.bind(this)
    }

    // getUserList(){
    //     return USERS;
    //     // console.log(this.state.users);
    // }

    render() {
        return (
           <ul className='chat-sidebar-list'>
               {this.state.users.map(user => (
                    <ChatSidebarListItem user={user} key={user.id} />
               ))}
                
           </ul>
        );
    }

    componentDidMount() {
        console.log(this.state.users);
    }
}