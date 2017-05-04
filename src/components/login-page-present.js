import React, { Component } from 'react';
import { connect } from 'react-redux';
import {store} from '../app';
// import * as ws from '../utils/ws';

import GoogleLogin from 'react-google-login';
 
class Login extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
            username: '',
            password: ''
        }
    this.logIn = this.logIn.bind(this);
    this.googleSuccess = this.googleSuccess.bind(this);
    this.googleFail = this.googleFail.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  
  logIn(){
    const {username, password} = this.state;
    const login = this.props.loginUser;
    const push = this.props.push;
    const getMessages = this.props.getMessages;
    const getUsers = this.props.getUsers;

    login({username, password})
    .then(() =>{
        localStorage.setItem('userdata', JSON.stringify(store.getState().login));
    })
    .then(() => {push('/chat')})
    .then(() => getUsers())
    .then(() =>getMessages());
  }

  googleSuccess(res){
      console.log(res);
    let userData = {
        token: res.accessToken,
        tokenType: res.tokenObj.token_type,
        user:{
            username: res.profileObj.name,
            email: res.profileObj.email,
            googleId: res.profileObj.googleId,
            imageUrl: res.profileObj.imageUrl
        }
    }

    localStorage.setItem('userdata', JSON.stringify(userData));
    this.props.loginWithToken(localStorage.userdata);
    this.props.push('/chat');
    this.props.getUsers();
    this.props.getMessages();
    //  ws.initConnection();
    //  ws.addListener('message', this.props.sendMessage);
    //  ws.addListener('join', this.props.joinChat);
    //  ws.addListener('leave', this.props.leaveChat);
  }

  googleFail(err){
      console.log(err)
  }

 handleLoginChange(e){
        this.setState(state => ({username: e.target.value}));
        e.persist();
    }

    handlePasswordChange(e){
        this.setState(state => ({password: e.target.value}));
         e.persist();
    }

    componentWillMount() {
        if(this.props.login.user){
            this.props.push('/')
        }
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

                    <GoogleLogin
                        clientId="886894346654-eekbgqs2hps8v1tlj96u3m822f6gqmmb.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={this.googleSuccess}
                        onFailure={this.googleFail}
                        className="social-button"
                    />
                </div>
            </div>
        );
    }
}

export default connect()(Login);