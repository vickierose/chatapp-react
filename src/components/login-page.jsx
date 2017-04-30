import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import Login from './login-page-present'

import * as loginActions from '../actions/login';
import * as chatActions from '../actions/chat';
import * as userlistActions from '../actions/userlist';

class LoginPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Login {...this.props}/>)
    }
}

const mapStateToProps = ({chat, login, userlist}) => ({chat, login, userlist});
const actionCreators = Object.assign({}, loginActions, chatActions, userlistActions, { push });
const mapActionsToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(LoginPage);
