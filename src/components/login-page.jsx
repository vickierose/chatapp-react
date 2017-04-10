import React, { Component } from 'react';

export class LoginPage extends Component {
    render() {
        return (
            <div className='auth-container'>
                <h2>Login</h2>
                <form>
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

                    <button type="submit">Log In</button>
                    <button id="google-custom-button">Log in with Google</button>
                </form>
            </div>
        );
    }
}
