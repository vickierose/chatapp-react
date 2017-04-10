import React, { Component } from 'react';

export class ChatSidebarNav extends Component {
    render() {
        return (
            <header className='chat-sidebar-nav'>
                <div className='arrow-icon'>
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
