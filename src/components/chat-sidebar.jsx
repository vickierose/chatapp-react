import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {ChatSidebarNav} from './chat-sidebar-nav.jsx';
import {ChatSidebarList} from './chat-sidebar-list.jsx';

import * as userlistActions from '../actions/userlist';

const classNames = require('classnames');

class ChatSidebar extends Component {
    constructor (props){
        super(props);
        this.state = {
            isSidebarOpen: true,
            filterValue: ''
        }
        this.toggleSidebar = this.toggleSidebar.bind(this);
         this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    toggleSidebar (){
        this.setState(state => ({isSidebarOpen: !state.isSidebarOpen}));
    }

    handleSearchChange(value){
        this.setState(state => ({filterValue: value}));
    }

    render() {
        let sidebarClasses = classNames({
            'chat-sidebar': true,
            'chat-sidebar--closed': !this.state.isSidebarOpen
        })

        return (
            <aside className={sidebarClasses}>
                <ChatSidebarNav sizingSidebar={this.toggleSidebar} 
                                arrowClosed={this.state.isSidebarOpen}
                                filterValue={this.state.filterValue}
                                handleFilterChange={this.handleSearchChange}/>
                <ChatSidebarList {...this.props} filterValue={this.state.filterValue}/>
            </aside>
        );
    }
}

const mapStateToProps = ({userlist}) =>({userlist});
const mapActionsToProps =  dispatch => bindActionCreators(Object.assign({}, userlistActions), dispatch);
export default connect(mapStateToProps, mapActionsToProps)(ChatSidebar);