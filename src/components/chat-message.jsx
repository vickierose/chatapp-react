import React, { Component } from 'react';
import { connect } from 'react-redux';

import {store} from '../app.js';

const classNames = require('classnames');
const moment = require('moment');

class ChatMessage extends Component {
    render() {
        let messageClasses = classNames({
            message: true,
            'outcoming-message': 
                this.props.message.user.username === store.getState().login.user.username
        })

        let messageDate = moment(this.props.message.time).format('LT');

        return (
            <li className={messageClasses}>
                <div className='photo'></div>
                <div className='message-text'>
                    <span>{this.props.message.user.username} >> {this.props.message.msg}</span>
                    <div className='time'>{messageDate}</div>
                </div>
            </li>
        );
    }
}

export default connect()(ChatMessage);