import React, { Component } from 'react';

export class ChatSidebarNav extends Component {
    constructor(props){
        super(props);
        this.handleArrowClick = this.handleArrowClick.bind(this);
    }

    handleArrowClick(e){
        this.props.sizingSidebar();
    }

    render() {
        return (
            <header className='chat-sidebar-nav'>
                <div className='arrow-icon' onClick={this.handleArrowClick}>
                    <div className='arrow-image'></div>
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
