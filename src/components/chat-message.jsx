import React, { Component } from 'react';

export class ChatMessage extends Component {
    render() {
        return (
            <li className='message'>
                <div className='photo'></div>
                <div className='message-text'>
                    <span>{this.props.message.text}</span>
                    <div className='time'>{this.props.message.sentAt}</div>
                </div>
            </li>
        );
    }
}