import React, { Component } from 'react';

export class ChatMessage extends Component {
    render() {
        return (
            <li className='message'>
                <div className='photo'></div>
                <div className='message-text'>
                    <span>{this.props.message.user.username} >> {this.props.message.msg}</span>
                    <div className='time'>{this.props.message.time}</div>
                </div>
            </li>
        );
    }
}