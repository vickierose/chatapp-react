import React, { Component } from 'react';
import ChatSidebarSandwichMenu from './chat-sidebar-sandwich-menu';

const classNames = require('classnames');

export class ChatSidebarNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            sandwichMenuOpened: false,
        }
        this.handleArrowClick = this.handleArrowClick.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.toggleSandwichMenu = this.toggleSandwichMenu.bind(this);
    }

    handleArrowClick(e){
        if(this.props.arrowClosed && this.state.sandwichMenuOpened){
            this.toggleSandwichMenu()
        };

        this.props.sizingSidebar();
    }

    toggleSandwichMenu(){
        this.setState(state => ({sandwichMenuOpened: !this.state.sandwichMenuOpened}))
    }

    handleSearchChange(e){
        this.props.handleFilterChange(e.target.value)
         e.persist();
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
                        value={this.props.filterValue}
                        onChange={this.handleSearchChange}
                        />
                    </form>

                    <div className='sandwich-icon' onClick={this.toggleSandwichMenu}></div>

                    <ChatSidebarSandwichMenu displayState={this.state.sandwichMenuOpened}
                                             hider={this.toggleSandwichMenu} 
                                             changePage={this.props.changePage}/>
            </header>
        );
    }
}
