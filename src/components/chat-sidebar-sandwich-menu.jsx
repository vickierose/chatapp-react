import React, { Component } from 'react';
const classNames = require('classnames');

class ChatSidebarSandwichMenu extends Component {
    constructor(props){
        super(props);
        this.state = {  }
    }
    render() {
        const menuClasses = classNames({
            'sandwich-menu': true,
            'sandwich-menu--showed': this.props.displayState
        })

        return (
            <nav className={menuClasses}>
                <ul>
                    <li><a>New Chat</a></li>
                    <li><a href="#">smthng1</a></li>
                    <li><a href="#">smthng2</a></li>
                    <li><a href="#">smthng3</a></li>
                </ul>
            </nav>
        );
    }
}

export default ChatSidebarSandwichMenu;