import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import MainHeader from './main-header-present';

import {logoutUser} from '../actions/login';
import {clearUsers} from '../actions/userlist';
import {clearMessages} from '../actions/chat';

class MainHeaderContainer extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <MainHeader {...this.props}/>
        );
    }
}
const mapStateToProps = ({login}) => ({login});
const actionCreators = Object.assign({}, {logoutUser}, {clearUsers}, {clearMessages}, { push });
const mapActionsToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(MainHeaderContainer);