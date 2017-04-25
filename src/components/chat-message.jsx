import React, { Component } from 'react';
import { connect } from 'react-redux';

import {store} from '../app.js';

const classNames = require('classnames');
const moment = require('moment');

class ChatMessage extends Component {

    checkMessage(){
        const msg = this.props.message.msg;
        if (typeof msg ==='string'){
            return msg
        }else if(!msg){
            return 'message is broken'
        }else {
            return msg.msg
        }
    }

    formatDate(){
        const messageDate = this.props.message.time;
        return moment(messageDate).calendar(null, {
            sameDay: 'LT',
            nextDay: 'L',
            nextWeek: 'L',
            lastDay: 'L',
            lastWeek: 'L',
            sameElse: 'L',
        })
        
    }
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
                    <span>{this.props.message.user.username} >> {this.checkMessage()}</span>
                    <div className='time'>{this.formatDate()}</div>
                </div>
            </li>
        );
    }
}

export default connect()(ChatMessage);