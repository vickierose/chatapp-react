import React, { Component } from 'react';
// import style from './../styles/_main-header.scss';

export class MainHeader extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.changePage(e.target.getAttribute('value'));
    }

    render() {
        return (
            <header className='main-header'>
                <p className='logo'>ChatterBox</p>
                <nav>
                    <ul onClick={this.handleClick}>
                        <li value="home">Home</li>
                        <li value="chat">Chat</li>
                        <li value="login">Login</li>
                        <li value="register">Register</li>
                        <li value="profile">Profile</li>
                    </ul>
                </nav>
            </header>
        );
    }
}
