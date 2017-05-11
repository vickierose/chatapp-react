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
                    <li><a href="#">smthng1</a></li>
                    <li><a href="#">smthng2</a></li>
                    <li><a href="#">smthng3</a></li>
                </ul>
            </nav>
        );
    }
}

export default ChatSidebarSandwichMenu;