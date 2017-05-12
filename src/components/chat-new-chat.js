import React, { Component } from 'react';
const classNames = require('classnames');

class CreateNewChat extends Component {
    constructor(props){
        super(props);
        this.state = {
            isUserpickerShowed: false,
            selectedUsers: []
        }
        this.tempSelectedUsers = [];
        this.createNewChat = this.createNewChat.bind(this);
        this.showUserPicker = this.showUserPicker.bind(this);
        this.selectUser = this.selectUser.bind(this);
    }

    showUserPicker(){
        this.setState(state =>({isUserpickerShowed:true}))
    }

    selectUser(e){
        debugger;
        e.target.classList.toggle('user-selection-btn--checked');
        if(e.target.classList.contains('user-selection-btn--checked')){
            this.tempSelectedUsers.push('a')
            console.log(this.tempSelectedUsers);
        }
    }

    showChat(e){
            this.props.changePage('chat');
        }

    createNewChat(e){
        e.preventDefault();
        console.log('new Chat created!');
        this.setState(state =>({selectedUsers: [...this.tempSelectedUsers]}))
        this.showChat();
    }
    render() {
        const userpickerClasses = classNames({
            userpicker: true,
            'userpicker--showed': this.state.isUserpickerShowed
        });

        return (
            <div className='new-chat-form'>
                <h3>Create new chat</h3>
                <form onSubmit={this.createNewChat}>
                    <input type="text"
                        name="chatName"
                        placeholder="Enter chat name"
                        required/>

                    <button type="button" onClick={this.showUserPicker}>Invite users</button>

                    <div className={userpickerClasses}>
                        <input type="text" name="search"
                            placeholder="Search user"/>

                        <ul className="userlist">
                            <li className="new-chat-user">
                                <div className="photo"></div>
                                <span className="new-chat-user__info">User1</span>
                                <button type="button" className="user-selection-btn" onClick={this.selectUser}>
                                        &#10003;
                                </button>
                            </li>
                            <li className="new-chat-user">
                                <div className="photo"></div>
                                <span className="new-chat-user__info">User2</span>
                                <button type="button" className="user-selection-btn" onClick={this.selectUser}>
                                        &#10003;
                                </button>
                            </li>
                            <li className="new-chat-user">
                                <div className="photo"></div>
                                <span className="new-chat-user__info">User3</span>
                                <button type="button" className="user-selection-btn" onClick={this.selectUser}>
                                        &#10003;
                                </button>
                            </li>
                        </ul>
                    </div>

                    <button type="submit">Create new chat</button>
                </form>
            </div>
        );
    }
}

export default CreateNewChat;