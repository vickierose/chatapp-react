import React, { Component } from 'react';
import { connect } from 'react-redux';
import {store} from '../app';


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
                    <button id="google-custom-button">Log in with Google</button>
                </div>
            </div>
        );
    }
}

export default connect()(Login);