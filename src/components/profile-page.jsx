import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

 class ProfilePage extends Component {

    componentWillMount() {
        if(!this.props.login.user){
            this.props.push('/login')
        }
    }

    render() {
        return (
            <h1>Profile</h1>
        );
    }
}

const mapStateToProps = ({login}) => ({login});
const actionCreators = Object.assign({}, { push });
const mapActionsToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(ProfilePage);