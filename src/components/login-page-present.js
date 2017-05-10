import React, { Component } from 'react';
// import * as ws from '../utils/ws';
import * as validation from '../utils/validation';
import GoogleLogin from 'react-google-login';

 const classNames = require('classnames');

class Login extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
            username: '',
            password: '',
            formIsValid: false
        }
    this.checkFormValidity = this.checkFormValidity.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.logIn = this.logIn.bind(this);
    this.googleSuccess = this.googleSuccess.bind(this);
    this.googleFail = this.googleFail.bind(this);
  }

  checkFormValidity(){
      if(validation.isNotEmpty(this.state.username) && validation.isNotEmpty(this.state.password)){
          this.setState(({state}) => ({formIsValid: true}))
      }else{
          this.setState(({state}) => ({formIsValid: false}))
      }
  }
  
  logIn(){
    const {username, password} = this.state;
    const login = this.props.loginUser;
    const push = this.props.push;
    const getMessages = this.props.getMessages;
    const getUsers = this.props.getUsers;

    login({username, password})
    .then(() =>{
        localStorage.setItem('userdata', JSON.stringify(this.props.login));
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
        this.checkFormValidity();
        e.persist();
    }

    handlePasswordChange(e){
        this.setState(state => ({password: e.target.value}));
        this.checkFormValidity();
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
                        <div className='error'>
                            Login is required</div>
                    </label>
                    <label>
                        <input type="password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                placeholder="Password" 
                                required />
                        <div className='error'>Password is required</div>
                    </label>

                    <button type="submit" 
                            disabled={!this.state.formIsValid}
                            onClick={this.logIn}>Log In</button>

                    <GoogleLogin
                        clientId="886894346654-eekbgqs2hps8v1tlj96u3m822f6gqmmb.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={this.googleSuccess}
                        onFailure={this.googleFail}
                        className="social-button"
                        disabled={this.state.username || this.state.password}
                    />
                </div>
            </div>
        );
    }
}

export default Login;