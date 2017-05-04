import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import {ChatSidebarListItem} from './chat-sidebar-list-item.jsx';
import {getRequest} from '../utils/fetch';


export class ChatSidebarList extends Component {
    constructor (props){
        super(props);
        this.state = {};
        this.filterUsers = this.filterUsers.bind(this);
    }

    filterUsers(filter){
        const { userlist } = this.props;
        if(!filter){
            return userlist
        }else{
            const filteredList = userlist.filter((user) => {
                if(user.username){
                return user.username.toLowerCase().search(filter.toLowerCase()) !== -1};
            })
            return filteredList;
        }
    }

    get userlist(){
        const userlist = this.filterUsers(this.props.filterValue);
        return userlist.map((user, i) =>(
            <ChatSidebarListItem user={user} key={i}/>
        ))
    }

    render() {
        return (
            <Scrollbars style={{height: 'calc(100vh - 130px)'}}>
                <ul className='chat-sidebar-list'>
                    {this.userlist}
                </ul>
           </Scrollbars>
        );
    }
}