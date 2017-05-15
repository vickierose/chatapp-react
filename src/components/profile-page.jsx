import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

 class ProfilePage extends Component {

     handleSubmit(e){
        console.log('Saved!');
        e.preventDefault();
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
                        <span>Username</span>
                        <input type="text" />
                    </label>
                    <label>
                        <span>Status</span>
                        <input type="text" />
                    </label>
                    <label>
                        <span>Avatar</span>
                        <input type="file" />
                    </label>
                    <button type="submit">Save changes</button>
                </form>
            </div>


        );
    }
}

const mapStateToProps = ({login}) => ({login});
const actionCreators = Object.assign({}, { push });
const mapActionsToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(ProfilePage);