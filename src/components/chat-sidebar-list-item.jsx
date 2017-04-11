import React, { Component } from 'react';

export class ChatSidebarListItem extends Component {
    render() {
        let photoStyle = {
            backgroundImage: 'url('+ "../mock-data/" + this.props.user.photo + ')',
            backgroundPosition: this.props.user.position
        }

        return (
            <li className='chat-sidebar-list-item'>
                <div className='photo' style={photoStyle}></div>
                <div className='chat-info'>
                    <p className='chat-name'>
                        {this.props.user.username}
                        {this.props.user.surname}
                        </p>
                    <p>{this.props.user.email}</p>
                </div>
                <div className='timer'>10m</div>
            </li>
        );
    }
}
