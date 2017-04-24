import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {store} from '../app.js';

class MainHeader extends Component {
    constructor(props){
        super(props);
    }
    
    loggedInRoutes = (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/chat">Chat</Link></li>
            <li><Link to="profile">Profile</Link></li>
            <li>Logout</li>
        </ul>    
    )

    notLoggedInRoutes = (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
    )

    get links(){
        if (store.getState().login.user){
            return this.loggedInRoutes
        }else{
            return this.notLoggedInRoutes
        }
    }

    render() {
        return (
            <header className='main-header'>
                <p className='logo'>ChatterBox</p>
                <nav>
                    {this.links}
                </nav>
            </header>
        );
    }
}

export default connect()(MainHeader);