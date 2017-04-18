import React, { Component } from 'react';

export class RegisterPage extends Component {
    register(){
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
    }
    
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
