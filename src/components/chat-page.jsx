import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import ChatSidebar from './chat-sidebar.jsx';
import ChatMessagesPart from './chat-messages-part.jsx';
import CreateNewChat from './chat-new-chat';


class ChatPage extends Component {
    constructor (props) {
        super(props);
        this.state={
            pageToRender: 'chat'
        }
        this.handleRenderState = this.handleRenderState.bind(this);
    }

    page = <ChatMessagesPart />;

    detectPageToRender(){
        switch (this.state.pageToRender) {
            case 'chat':
                this.page = <ChatMessagesPart />;
                break;
            
            case 'createNewChat':
                this.page = <CreateNewChat changePage = {this.handleRenderState}/>;
                break;
        }
    }

    handleRenderState(page){
        this.setState({pageToRender: page});
    }

    componentWillMount() {
        if(!this.props.login.user){
            this.props.push('/login')
        }
    }

    render() {
        this.detectPageToRender();

        return (
            <div className='chat-page'>
                <ChatSidebar changePage = {this.handleRenderState}/>
                {this.page}
            </div>
        );
    }
}

const mapStateToProps = ({login}) => ({login});
const actionCreators = Object.assign({}, { push });
const mapActionsToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(ChatPage);