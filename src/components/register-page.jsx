import React, { Component } from 'react';

export class RegisterPage extends Component {
    render() {
        return (
           <div className='auth-container'>
               <h2>Register</h2>
                <form>
                    <label>
                        <input type="text"  
                                placeholder="Full Name" />
                    </label>

                    <label>
                        <input type="email" 
                                placeholder="E-mail" />
                    </label>

                    <div>
                        <label>
                            <input type="password" 
                                    placeholder="Password" />
                        </label>

                        <label>
                            <input type="password" 
                                    placeholder="Confirm Password" />
                        </label>
                    </div>

                    <button type="submit">Sign Up</button>
                    </form>
                </div> 
        );
    }
}
