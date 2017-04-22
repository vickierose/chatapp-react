import React, { Component } from 'react';

export class ChatMessage extends Component {
    render() {
        return (
            <li className='message'>
                <div className='photo'></div>
                <div className='message-text'>
                    <span></span>
                    <div className='time'></div>
                </div>
            </li>
        );
    }
}