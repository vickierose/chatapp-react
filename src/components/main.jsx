import React, { Component } from 'react';

import {MainHeader} from './main-header.jsx';

import {HomePage} from './home-page.jsx';
import {LoginPage} from './login-page.jsx';
import {RegisterPage} from './register-page.jsx';
import {ChatPage} from './chat-page.jsx';
import {ProfilePage} from './profile-page.jsx';

export class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageToRender: 'home'
        };
        this.handleRenderState = this.handleRenderState.bind(this);
        this.detectPageToRender = this.detectPageToRender.bind(this);
    };

    page = <HomePage />;

    detectPageToRender(){
        switch (this.state.pageToRender) {
            case 'home':
                this.page = <HomePage />;
                break;
            case 'chat':
                this.page = <ChatPage />;
                break;
            case 'login': 
                this.page = <LoginPage />;
                break;
            case 'register':
                this.page = <RegisterPage />;
                break;
            case 'profile':
            this.page = <ProfilePage />
        }
    }

    handleRenderState(page){
        this.setState({pageToRender: page});
        
    }

    render() {
        this.detectPageToRender();
        return (
            <div>
                <MainHeader changePage={this.handleRenderState}/>
                {this.page}
            </div>
        );
    }
}
