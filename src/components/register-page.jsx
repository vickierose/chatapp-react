import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {loginUser} from '../actions/login';
// import * as chatActions from '../actions/chat';
import {getMessages} from '../actions/chat';
import {getUsers} from '../actions/userlist';

class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            newUserLogin: '',
            newUserEmail: '',
            newUserPassword: '',
            passwordConfirm: ''
        };
        this.register = this.register.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPassChange = this.handleConfirmPassChange.bind(this);
    }
    handleNameChange(e){
        this.setState(state => ({newUserLogin: e.target.value}));
        e.persist();
    }
    handleEmailChange(e){
        this.setState(state => ({newUserEmail: e.target.value}));
        e.persist();
    }
    handlePasswordChange(e){
        this.setState(state => ({newUserPassword: e.target.value}));
        e.persist();
    }
    handleConfirmPassChange(e){
        this.setState(state => ({passwordConfirm: e.target.value}));
        e.persist();
    }

    register(){
     let myHeaders = new Headers(); myHeaders.set('Content-Type', 'application/json');

        let myInit = {
                method: 'post',
				headers: myHeaders,
				mode: 'cors',
				body: JSON.stringify({"username": this.state.newUserLogin, 
                                      "password": this.state.newUserPassword, 
                                      "email": this.state.newUserEmail})

        };

        fetch('http://eleksfrontendcamp-mockapitron.rhcloud.com/signup', myInit)
        .then(() => 
            this.props.loginUser({username: this.state.newUserLogin,
                                password: this.state.newUserPassword})
        )
        .then(() =>{
            localStorage.setItem('userdata', JSON.stringify(this.props.login));
        })
        .then(() => {
            this.props.push('/chat')})
        .then(() => this.props.getUsers())
        .then(() =>this.props.getMessages());
    }

    componentWillMount() {
        if(this.props.login.user){
            this.props.push('/')
        }
    }
    
    render() {
        return (
           <div className='auth-container'>
               <h2>Register</h2>
                <div onSubmit={this.register}>
                    <label>
                        <input type="text"  
                                placeholder="Full Name"
                                value={this.state.newUserLogin}
                                onChange={this.handleNameChange} />
                    </label>

                    <label>
                        <input type="email" 
                                placeholder="E-mail"
                                value={this.state.newUserEmail}
                                onChange={this.handleEmailChange} />
                    </label>

                    <div>
                        <label>
                            <input type="password" 
                                    placeholder="Password"
                                    value={this.state.newUserPassword}
                                    onChange={this.handlePasswordChange} />
                        </label>

                        <label>
                            <input type="password" 
                                    placeholder="Confirm Password"
                                    value={this.state.passwordConfirm}
                                    onChange={this.handleConfirmPassChange} />
                        </label>
                    </div>

                    <button type="submit" onClick={this.register}>Sign Up</button>
                    </div>
                </div> 
        );
    }
}

const mapStateToProps = ({login, chat, userlist}) => ({login, chat, userlist});
const actionCreators = Object.assign({}, {loginUser}, {getMessages}, {getUsers}, { push });
const mapActionsToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(RegisterPage);
