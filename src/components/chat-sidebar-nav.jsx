import React, { Component } from 'react';
const classNames = require('classnames');

export class ChatSidebarNav extends Component {
    constructor(props){
        super(props);
        this.handleArrowClick = this.handleArrowClick.bind(this);
    }

    handleArrowClick(e){
        this.props.sizingSidebar();
    }

    render() {
        let arrowImageClasses = classNames({
            'arrow-image': true,
            'arrow-image--sidebar-closed': !this.props.arrowClosed
        })

        return (
            <header className='chat-sidebar-nav'>
                <div className='arrow-icon' onClick={this.handleArrowClick}>
                    <div className={arrowImageClasses}></div>
                </div>

                    <form className='search-field'>
                        <input type="text" 
                        placeholder="Search"
                        name="search"
                        />
                    </form>

                    <div className='sandwich-icon'></div>
            </header>
        );
    }
}
