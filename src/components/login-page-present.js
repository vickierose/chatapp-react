import React, { Component } from 'react';
import { connect } from 'react-redux';
import {store} from '../app';

import io from 'socket.io-client';

class Login extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
            username: '',
            password: ''
        }
    this.logIn = this.logIn.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.socket = io.connect('http://eleksfrontendcamp-mockapitron.rhcloud.com:8000');
  }
  
  logIn(){
      debugger;
    const {username, password} = this.state;
    const login = this.props.loginUser;
    const push = this.props.push;

    login({username, password})
    .then(() =>{localStorage.setItem('token', store.getState().login.token)})
    .then(this.socket.on('connect', () => {
        this.socket.emit('authenticate', { token: localStorage['token']})}))
    .then(() => {push('/chat')});
  }

 handleLoginChange(e){
        this.setState(state => ({username: e.target.value}));
        e.persist();
    }

    handlePasswordChange(e){
        this.setState(state => ({password: e.target.value}));
         e.persist();
    }

    render() {
        return (
            <div className='auth-container'>
                <h2>Login</h2>
                <div>
                    <label>
                        <input type="text"
                                value = {this.state.username}
                                onChange={this.handleLoginChange}
                                placeholder="Login" 
                                required />
                    </label>
                    <label>
                        <input type="password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                placeholder="Password" 
                                required />
                    </label>

                    <button type="submit" onClick={this.logIn}>Log In</button>
                    <button id="google-custom-button">Log in with Google</button>
                </div>
            </div>
        );
    }
}

export default connect()(Login);