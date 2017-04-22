import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import history from '../history';

import {MainHeader} from './main-header.jsx';

import {HomePage} from './home-page.jsx';
import LoginPage from './login-page.jsx';
import {RegisterPage} from './register-page.jsx';
import {ChatPage} from './chat-page.jsx';
import {ProfilePage} from './profile-page.jsx';

export class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    };

    render() {
        return ( 
            <Provider store={this.props.store}>
                <div>
                <ConnectedRouter history = {history}>
                        <div>
                            <Route path="/" component={MainHeader}/>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/register" component={RegisterPage}/>
                            <Route path="/login" component={LoginPage}/>
                            <Route path="/chat" component={ChatPage}/>
                            <Route path="/profile" component={ProfilePage}/>
                        </div>
                </ConnectedRouter>
                </div>
            </Provider>
        );
    }
}
