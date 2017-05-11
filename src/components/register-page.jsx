import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as validation from '../utils/validation';
import { Validate, ValidateGroup, ErrorMessage } from 'react-validate';
import {handleInputChange} from '../utils/utils';
import validator from 'validator';
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
            passwordConfirm: '',
        };
        
        this.handleInputChange = handleInputChange.bind(this);
        this.register = this.register.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.validateConfirmPassword = this.validateConfirmPassword.bind(this);
    }

    validateConfirmPassword(value){
        return validator.equals(value, this.state.newUserPassword)
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

    submitForm(e){
       e.preventDefault();
       this.register();
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
                <form onSubmit={this.submitForm}>
                    <ValidateGroup>
                        <Validate validators={[validation.isNotEmpty]}>
                            <input type="text"  
                                    placeholder="Full Name"
                                    onChange={this.handleInputChange('newUserLogin')} />
                            <ErrorMessage>Username is required</ErrorMessage>
                        </Validate>
                        <Validate validators={[validation.isNotEmpty, validation.isEmail]}>
                            <input type="email" 
                                    placeholder="E-mail"
                                    
                                    onChange={this.handleInputChange('newUserEmail')} />
                            <ErrorMessage>Please put a valid email</ErrorMessage>
                        </Validate>
                        <Validate validators={[validation.validateLength]}>
                                <input type="password" 
                                        placeholder="Password"
                                        onChange={this.handleInputChange('newUserPassword')} />
                                <ErrorMessage>Password should be at least 3 symbols</ErrorMessage>
                        </Validate>                                   
                        <Validate validators={[validation.validateLength, this.validateConfirmPassword]}>
                                <input type="password" 
                                        placeholder="Confirm Password"
                                        onChange={this.handleInputChange('passwordConfirm')} />
                                <ErrorMessage>Passwords missmatch</ErrorMessage>
                        </Validate>
                        
                        <button type="submit">Sign Up</button>
                    </ValidateGroup>
                 </form>
            </div> 
        );
    }
}

const mapStateToProps = ({login, chat, userlist}) => ({login, chat, userlist});
const actionCreators = Object.assign({}, {loginUser}, {getMessages}, {getUsers}, { push });
const mapActionsToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(RegisterPage);
