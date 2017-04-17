import React, { Component } from 'react';

export class LoginPage extends Component {
    constructor(props){
        super(props);
        this.signIn = this.signIn.bind(this);
    }

    signIn(){
        // let myHeaders = new Headers(); myHeaders.set('Content-Type', 'application/json');

        // let myInit = {
        //         method: 'post',
		// 		headers: myHeaders,
		// 		mode: 'cors',
		// 		body: JSON.stringify({"username": 'poiu', "pass": 'zxcv'})

        // };

        // fetch('http://eleksfrontendcamp-mockapitron.rhcloud.com/signup', myInit)
        // // .then((res) => res.json())
        // .then(console.log('signed up'));

        let myHeaders = new Headers(); myHeaders.set('Content-Type', 'application/json');

        let myInit = {
                method: 'post',
				headers: myHeaders,
				mode: 'cors',
				body: JSON.stringify({"username": 'poiu', "password": 'zxcv'})

        };

        fetch('http://eleksfrontendcamp-mockapitron.rhcloud.com/login', myInit)
        .then((res) => res.json())
        .then((resObj) => localStorage.setItem('userData', JSON.stringify(resObj)));
    }

    render() {
        return (
            <div className='auth-container'>
                <h2>Login</h2>
                <div>
                    <label>
                        <input type="text"
                                placeholder="Login" 
                                required />
                    </label>
                    <label>
                        <input type="password"
                                placeholder="Password" 
                                required />
                    </label>

                    <button type="submit" onClick={this.signIn}>Log In</button>
                    <button id="google-custom-button">Log in with Google</button>
                </div>
            </div>
        );
    }
}
