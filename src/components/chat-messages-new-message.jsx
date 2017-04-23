import React, { Component } from 'react';

import * as ws from '../utils/ws';

export class CreateNewMessage extends Component {
    constructor(props){
        super(props);
        this.state = {
            msg: ''
        }
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }

    handleMessageChange(e){
        this.setState(state => ({msg: e.target.value}));
        e.persist();
    }

    clearForm() {
        this.setState({ msg: '' });
    }

   submitMessage() {
       ws.sendMessage(this.state.msg);
       this.clearForm();
    }

    render() {
        return (
            <div className='create-new-message-form'>
                <textarea value={this.state.msg} 
                          placeholder="Type message"
                          onChange={this.handleMessageChange} 
                          required></textarea>
                <button type="submit" onClick={this.submitMessage}>Send</button>
            </div>
        );
    }
}
