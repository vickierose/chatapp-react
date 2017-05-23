import React, { Component } from 'react';
import * as ws from '../utils/ws';
import * as validation from '../utils/validation';
import GoogleLogin from 'react-google-login';
import { Validate, ValidateGroup, ErrorMessage } from 'react-validate';
import {handleInputChange} from '../utils/utils';
const classNames = require('classnames');

class Login extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
            username: '',
            password: '',
            notify: false,
        }

    this.handleInputChange = handleInputChange.bind(this);
    this.logIn = this.logIn.bind(this);
    this.submitForm = this.submitForm.bind(this);
    // this.googleSuccess = this.googleSuccess.bind(this);
    // this.googleFail = this.googleFail.bind(this);
    this.showNotification = this.showNotification.bind(this);
  }
  
  logIn(){
    const {username, password} = this.state;
    const login = this.props.loginUser;
    const push = this.props.push;
    const getMessages = this.props.getMessages;
    const getUsers = this.props.getUsers;

    login({username, password})
    .then(() =>{
        if(this.props.login.user){
            localStorage.setItem('userdata', JSON.stringify(this.props.login));
            push('/chat');
            getUsers();
            getMessages();
        }else{
            this.showNotification();
            setTimeout(this.showNotification, 3000);
        }
    });
  }

  showNotification(){
         this.setState(state => ({notify: !this.state.notify}))
     }

  submitForm(e){
       e.preventDefault();
       this.logIn();
  }

//   googleSuccess(res){
//       console.log(res);
//       const id_token = res.getAuthResponse().id_token;
//        this.props.googleLogin(id_token)
//         .then(() =>{
//             localStorage.setItem('userdata', JSON.stringify(this.props.login))
//         })
//         .then(() =>{this.props.push('/chat')})
//         .then(() => {this.props.getUsers()})
//         .then(() => {this.props.getMessages()})
//   }

//   googleFail(err){
//       console.log(err)
//   }

    componentWillMount() {
        if(this.props.login.user){
            this.props.push('/')
        }
    }

    componentWillReceiveProps({ login }){
         if(this.props.login.user){
            this.props.push('/chat')
        }
    }

    render() {
        const notificationClasses = classNames({
            'notification': true,
            'notification--showed': this.state.notify
        })
        return (
            <div className='auth-container'>
                <h2>Login</h2>
                <div className={notificationClasses}>
                    Login or password is invalid. Please, try again
                </div>
                <form onSubmit={this.submitForm}>
                    <ValidateGroup>
                        <Validate validators={[validation.isNotEmpty]}>
                            <input type="text"
                                    onChange={this.handleInputChange('username')}
                                    placeholder="Login" 
                                    />
                            <ErrorMessage>Login is required</ErrorMessage>
                        </Validate>
                        <Validate validators={[validation.validateLength]}>
                            <input type="password"
                                    onChange={this.handleInputChange('password')}
                                    placeholder="Password" 
                                    />
                            <ErrorMessage>Password should be at least 3 symbols</ErrorMessage>
                        </Validate>

                        <button type="submit">Log In</button>
                    </ValidateGroup>
                </form>

                {/*<GoogleLogin
                        clientId="886894346654-eekbgqs2hps8v1tlj96u3m822f6gqmmb.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={this.googleSuccess}
                        onFailure={this.googleFail}
                        className="social-button"
                        disabled={this.state.username || this.state.password}/>*/}
            </div>
        );
    }
}

export default Login;