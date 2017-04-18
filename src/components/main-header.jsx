import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import style from './../styles/_main-header.scss';

export class MainHeader extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <header className='main-header'>
                <p className='logo'>ChatterBox</p>
                <nav>
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li><Link to="/chat">Chat</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="profile">Profile</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
