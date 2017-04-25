import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import Login from './login-page-present'

import * as loginActions from '../actions/login';
import * as chatActions from '../actions/chat';

class LoginPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Login {...this.props}/>)
    }
}

const mapStateToProps = ({chat, login}) => ({chat, login});
const actionCreators = Object.assign({}, loginActions, chatActions, { push });
const mapActionsToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(LoginPage);
