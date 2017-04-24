import React, { Component } from 'react';

export class ChatSidebarListItem extends Component {
    render() {
        // let photoStyle = {
        //     backgroundImage: 'url('+ "../mock-data/" + this.props.chat.photo + ')',
        //     backgroundPosition: this.props.chat.position
        // }

        return (
            <li className='chat-sidebar-list-item'>
                <div className='photo'></div>
                <div className='chat-info'>
                    <p className='chat-name'>{this.props.user.username}</p>
                    <p>Hello, darkness my old friend</p>
                </div>
                <div className='timer'></div>
            </li>
        );
    }
}
