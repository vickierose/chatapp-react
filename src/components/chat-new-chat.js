import React, { Component } from 'react';

class CreateNewChat extends Component {
    constructor(props){
        super(props);
        this.state = {}
        this.createNewChat = this.createNewChat.bind(this);
    }

    showChat(e){
            this.props.changePage('chat');
        }

    createNewChat(e){
        e.preventDefault();
        console.log('new Chat created!');
        this.showChat();
    }
    render() {
        return (
            <div className='new-chat-form'>
                <h3>Create new chat</h3>
                <form onSubmit={this.createNewChat}>
                    <input type="text"
                        name="chatName"
                        placeholder="Enter chat name"
                        required/>

                    <button type="button">Invite users</button>

                    <input type="text" name="search"
                            placeholder="Search user"/>

                    <ul className="userlist">
                        <li className="new-chat-user">
                            <div className="photo"></div>
                            <span className="new-chat-user__info"></span>
                            <button type="button" className="user-selection-btn">
                                    &#10003;
                            </button>
                        </li>
                    </ul>

                    <button type="submit">
                        Create new chat
                    </button>
                </form>
            </div>
        );
    }
}

export default CreateNewChat;