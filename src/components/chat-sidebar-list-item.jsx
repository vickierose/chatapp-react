import React, { Component } from 'react';

export class ChatSidebarListItem extends Component {
    render() {
        // let photoStyle = {
        //     backgroundImage: 'url('+ "../mock-data/" + this.props.chat.photo + ')',
        //     backgroundPosition: this.props.chat.position
        // }
        const nameFirstSym = this.props.user.username.charAt(0).toUpperCase();
        return (
            <li className='chat-sidebar-list-item'>
                <div className='photo'>{nameFirstSym}</div>
                <div className='chat-info'>
                    <p className='chat-name'>{this.props.user.username}</p>
                    <p>{this.props.user.status || ""}</p>
                </div>
                <div className='timer'></div>
            </li>
        );
    }
}
