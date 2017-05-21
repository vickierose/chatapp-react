import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
        this.showChat = this.showChat.bind(this);
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

    get userlist(){
        const {userlist} = this.props;

         const avatar = (user) => {
            const nameFirstSym = user.username.charAt(0).toUpperCase();
            if(user.avatar){
                return (
                    <img src={user.avatar} />
                )
            }else {
                return nameFirstSym
            }
        }
        return userlist.map(user => (
            <li className="new-chat-user" key={user._id}>
                <div className="photo">{avatar(user)}</div>
                <span className="new-chat-user__info">{user.username}</span>
                <button type="button" className="user-selection-btn" onClick={this.selectUser}>
                        &#10003;
                </button>
            </li>
        )
        )
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
                <span onClick={this.showChat}>&#8592; Back</span>
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
                            {this.userlist}
                        </ul>
                    </div>

                    <button type="submit">Create new chat</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({login, userlist}) => ({login, userlist});
export default connect(mapStateToProps, null)(CreateNewChat);