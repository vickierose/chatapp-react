import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Indicator from './indicator';

import {store} from '../app';

const classNames = require('classnames');

class MainHeader extends Component {
    constructor(...args){
        super(...args);
        this.logOut = this.logOut.bind(this);
    }

    logOut(){
        const logout = this.props.logoutUser;
        const clearMessages = this.props.clearMessages;
        const clearUsers = this.props.clearUsers;
        const push = this.props.push;
        logout();
        clearMessages();
        clearUsers();
        localStorage.removeItem('userdata');
        window.location.reload();
        this.props.push('/');
    }
    
    loggedInRoutes = () => (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/chat">Chat</Link></li>
            <li><Link to="profile">Profile</Link></li>
            <li onClick={this.logOut}>Logout</li>
        </ul>    
    )

    notLoggedInRoutes = () => (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
    )

    get links(){

         if (this.props.login.user){
            return this.loggedInRoutes();
        }else{
            return this.notLoggedInRoutes();
        }
    }

    render() {
        return (
            <header className='main-header'>
                <p className='logo'>ChatterBox
                    <Indicator />
                </p>
                <nav>
                    {this.links}
                </nav>
            </header>
        );
    }
}

export default connect()(MainHeader)