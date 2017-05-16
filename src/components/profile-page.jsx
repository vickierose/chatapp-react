import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import {updateProfile} from '../actions/login';
import {handleInputChange} from '../utils/utils';
import {put, getRequest} from '../utils/fetch';

 class ProfilePage extends Component {
     constructor(...args){
        super(...args);
        this.state = {
            username: this.props.login.user.username,
            status: this.props.login.user.status,
            email: this.props.login.user.email,
            avatar: "",
        };
        this.handleInputChange=handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleSubmit(e){
        const id = this.props.login.user._id;
        const url = `http://localhost:3000/users/${this.props.login.user._id}`
        const dataToSend = {
            username: this.state.username,
            status: this.state.status,
            email: this.state.email
        };
        this.props.updateProfile({url: url, cred: dataToSend})
        e.preventDefault();
        console.log('Saved!');
     }

     get avatarPath(){
         if(this.state.avatar !== ""){
         return this.state.avatar
        }else{
            return 'No file choosen'
        }
     }

    componentWillMount() {
        if(!this.props.login.user){
            this.props.push('/login')
        }
    }

    render() {
        return (
            <div className='profile-page'>
                <h2>Profile</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <span>Avatar</span>
                        <label className="file-upload">
                            <span className="button">Choose a pic</span>
                            <mark>{this.avatarPath}</mark>
                            <input type="file" 
                                    onChange={this.handleInputChange("avatar")}/>
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