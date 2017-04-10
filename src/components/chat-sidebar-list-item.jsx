import React, { Component } from 'react';

export class ChatSidebarListItem extends Component {
    render() {
        return (
            <li className='chat-sidebar-list-item'>
                <div className='photo'></div>
                <div className='chat-info'>
                    <p className='chat-name'></p>
                    <p></p>
                </div>
                <div className='timer'></div>
            </li>
        );
    }
}
