import React, { Component } from 'react';
const classNames = require('classnames');

class ChatSidebarSandwichMenu extends Component {
    constructor(props){
        super(props);
        this.state = {  }
        this.showNewChatPage = this.showNewChatPage.bind(this);
    }

    showNewChatPage(e){
            this.props.changePage('createNewChat');
            this.props.hider();
        }

    render() {
        const menuClasses = classNames({
            'sandwich-menu': true,
            'sandwich-menu--showed': this.props.displayState
        })

        return (
            <nav className={menuClasses}>
                <ul>
                    <li><a onClick={this.showNewChatPage}>New Chat</a></li>
                    <li><a>Show users</a></li>
                    <li><a>Show chat rooms</a></li>
                </ul>
            </nav>
        );
    }
}

export default ChatSidebarSandwichMenu;