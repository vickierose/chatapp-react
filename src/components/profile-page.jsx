import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import {updateProfile} from '../actions/login';
import {handleInputChange} from '../utils/utils';
import {put, getRequest} from '../utils/fetch';

const classNames = require('classnames');

 class ProfilePage extends Component {
     constructor(...args){
        super(...args);
        this.state = {
            username: this.props.login.user ? this.props.login.user.username : '',
            status: this.props.login.user ? this.props.login.user.status: 'no status',
            email: this.props.login.user ? this.props.login.user.email : '',
            avatar: "",
            notify: false,
        };
        this.handleInputChange=handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleNotification = this.toggleNotification.bind(this);
     }
     toggleNotification(){
         this.setState(state => ({notify: !this.state.notify}))
     }

     handleSubmit(e){
        const id = this.props.login.user._id;
        const url = `http://localhost:3000/users/${this.props.login.user._id}`
        const dataToSend = new FormData();

        dataToSend.append('avatar', this.avatar.files[0])
        dataToSend.append('username', this.state.username)
        dataToSend.append('status', this.state.status)
        dataToSend.append('email', this.state.email)

        this.props.updateProfile({url: url, cred: dataToSend})
        .then(() =>{
            this.toggleNotification()
            setTimeout(this.toggleNotification, 3000)
        })
        e.preventDefault();
     }

     get avatarPath(){
         if(this.state.avatar !== ""){
             const pathArr = this.state.avatar.split('\\');
         return pathArr[pathArr.length-1]
        }else{
            return 'No file choosen'
        }
     }

     get profilePic(){
         if(this.props.login.user.avatar){
            return (
                <img src={this.props.login.user.avatar}/>
            )
         }else{
             return 'No avatar'
         }
     }

    componentWillMount() {
        if(!this.props.login.user){
            this.props.push('/login')
        }
    }

    render() {
        const notificationClasses = classNames({
            'notification': true,
            'notification--showed': this.state.notify
        })
        return (
            <div className='profile-page'>
                <h2>Profile</h2>
                <div className={notificationClasses}>Your changes successfully saved</div>
                <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                    <div className='profile-pic'>
                        {this.profilePic}
                    </div>

                    <label>
                        <span>Avatar</span>
                        <label className="file-upload">
                            <span className="button">Choose a pic</span>
                            <mark>{this.avatarPath}</mark>
                            <input type="file"
                                    onChange={this.handleInputChange("avatar")}
                                    name='avatar'
                                    ref={(input) => { this.avatar = input; }}/>
                        </label>
                    </label>

                    <label>
                        <span>Username</span>
                        <input type="text" 
                        value={this.state.username}
                        onChange={this.handleInputChange("username")}/>
                    </label>

                    <label>
                        <span>Status</span>
                        <input type="text" 
                        value={this.state.status}
                        onChange={this.handleInputChange("status")}/>
                    </label>
                    
                    <label>
                        <span>Email</span>
                        <input type="text" 
                        value={this.state.email}
                        onChange={this.handleInputChange("email")}/>
                    </label>
                
                    <button type="submit">Save changes</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({login}) => ({login});
const actionCreators = Object.assign({}, {updateProfile}, { push });
const mapActionsToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(ProfilePage);