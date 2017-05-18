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

     get avatar (){
        const nameFirstSym = this.props.message.user.username.charAt(0).toUpperCase();
        if(this.props.message.user.avatar &&  typeof(this.props.message.user.avatar) !== 'object'){
            return (
                 <img src={this.props.message.user.avatar} />
            )
        }else {
            return nameFirstSym
        }
    }

    render() {
        console.log(this.props.message);
        let messageClasses = classNames({
            message: true,
            'outcoming-message': 
                this.props.message.user.username === store.getState().login.user.username,
                'incoming-message': this.props.message.user.username !== store.getState().login.user.username
        })

        let messageDate = moment(this.props.message.time).format('LT');

        return (
            <li className={messageClasses}>
                <div className='photo'>{this.avatar}</div>
                <div className='message-text'>
                    <div className='username'>{this.props.message.user.username}</div>
                    <span>{this.checkMessage()}</span>
                    <div className='time'>{this.formatDate()}</div>
                </div>
            </li>
        );
    }
}

export default connect()(ChatMessage);