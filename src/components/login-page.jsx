import React, { Component } from 'react';

export class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: '',
            password: ''
        }

        this.logIn = this.logIn.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    logIn(){
        const socket = io.connect('http://eleksfrontendcamp-mockapitron.rhcloud.com');

        let myHeaders = new Headers(); myHeaders.set('Content-Type', 'application/json');

        let myInit = {
                method: 'post',
				headers: myHeaders,
				mode: 'cors',
				body: JSON.stringify({
                    "username": this.state.login,
                    "password": this.state.password
                })

        };
        

        fetch('http://eleksfrontendcamp-mockapitron.rhcloud.com/login', myInit)
        .then((res) => res.json())
        .then((resObj) => localStorage.setItem('userData', JSON.stringify(resObj)))
        .then(socket.on('connect', () => {
            let userData = JSON.parse(localStorage.getItem('userData'));
            socket.emit('authenticate', { token: userData.token});
     }));
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

                    <button type="submit" onClick={this.logIn}>Log In</button>
                    <button id="google-custom-button">Log in with Google</button>
                </div>
            </div>
        );
    }
}
