import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as chatActions from '../actions/chat';

import {ChatMessagesList} from './chat-messages-list.jsx';
import {CreateNewMessage} from './chat-messages-new-message.jsx';

 class ChatMessagesPart extends Component {
    render() {
        return (
            <div className='chat-messages-part'>
                <ChatMessagesList {...this.props}/>
                <CreateNewMessage {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = ({ chat, login }) => ({ chat, login });
const mapActionsToProps = dispatch => bindActionCreators(Object.assign({}, chatActions), dispatch);

export default connect(mapStateToProps, mapActionsToProps)(ChatMessagesPart);