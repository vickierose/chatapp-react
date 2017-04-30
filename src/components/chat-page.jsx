import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import ChatSidebar from './chat-sidebar.jsx';
import ChatMessagesPart from './chat-messages-part.jsx';


class ChatPage extends Component {
    constructor (props) {
        super(props);
    }

    componentWillMount() {
        if(!this.props.login.user){
            this.props.push('/login')
        }
    }

    render() {
        return (
            <div className='chat-page'>
                <ChatSidebar />
                <ChatMessagesPart />
            </div>
        );
    }
}

const mapStateToProps = ({login}) => ({login});
const actionCreators = Object.assign({}, { push });
const mapActionsToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(ChatPage);