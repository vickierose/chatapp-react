import React, { Component } from 'react';

export class ChatSidebarListItem extends Component {
    render() {
        let photoStyle = {
            backgroundImage: 'url('+ "../mock-data/" + this.props.chat.photo + ')',
            backgroundPosition: this.props.chat.position
        }

        return (
            <li className='chat-sidebar-list-item'>
                <div className='photo' style={photoStyle}></div>
                <div className='chat-info'>
                    <p className='chat-name'>
                        {this.props.chat.name}
                        </p>
                    <p>Hello, darkness my old friend</p>
                </div>
                <div className='timer'>{this.props.chat.createdAt}</div>
            </li>
        );
    }
}
