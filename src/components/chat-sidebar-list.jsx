import React, { Component } from 'react';

import {ChatSidebarListItem} from './chat-sidebar-list-item.jsx';
import {getRequest} from '../utils/fetch';

export class ChatSidebarList extends Component {
    constructor (props){
        super(props);
        this.state = {
            users: []
        };
        this.getUsers = this.getUsers.bind(this);

    }

    getUsers(){
        getRequest('http://eleksfrontendcamp-mockapitron.rhcloud.com/users')
        .then(res => res.json())
        .then(res => {this.setState(state => ({users: res}))})
    }

    componentWillMount() {
        this.getUsers();
    }

    render() {
        return (
           <ul className='chat-sidebar-list'>
               {this.state.users.map((user, i) => (
                    <ChatSidebarListItem user={user} key={i}/>
               ))}}  
           </ul>
        );
    }
}