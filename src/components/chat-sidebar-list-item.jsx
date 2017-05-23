import React, { Component } from 'react';

export class ChatSidebarListItem extends Component {
    get avatar (){
        const nameFirstSym = this.props.user.username.charAt(0).toUpperCase();
        if(this.props.user.avatar){
            return (
                 <img src={this.props.user.avatar} />
            )
        }else {
            return nameFirstSym
        }
    }

    get status(){
        if(this.props.user.status === 'undefined'){
            return '';
        }else{
            return this.props.user.status
        }
    }

    render() {
        return (
            <li className='chat-sidebar-list-item'>
                <div className='photo'>
                   {this.avatar}
                </div>
                <div className='chat-info'>
                    <p className='chat-name'>{this.props.user.username}</p>
                    <p>{this.status}</p>
                </div>
                {/*<div className='timer'></div>*/}
            </li>
        );
    }
}
