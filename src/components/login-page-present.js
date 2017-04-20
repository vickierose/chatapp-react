import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
            login: '',
            password: ''
        }
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

 handleLoginChange(e){
        this.setState(state => ({login: e.target.value}));
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
                                value = {this.state.login}
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

                    <button type="submit" onClick={this.props.loginUser}>Log In</button>
                    <button id="google-custom-button">Log in with Google</button>
                </div>
            </div>
        );
    }
}

export default connect()(Login);