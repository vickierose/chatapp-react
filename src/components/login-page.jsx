import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import Login from './login-page-present'

import * as loginActions from '../actions/login';

class LoginPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Login {...this.props}/>)
    }
}

const mapStateToProps = ({login}) => ({login});
const actionCreators = Object.assign({}, loginActions, { push });
const mapActionsToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(LoginPage);
