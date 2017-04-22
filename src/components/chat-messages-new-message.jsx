import React, { Component } from 'react';
import * as ws from '../utils/ws';

export class CreateNewMessage extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: ''
        }
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    handleMessageChange(e){
        this.setState(state => ({message: e.target.value}));
        e.persist();
    }

    clearForm() {
    this.setState({ message: '' });
  }

   submitMessage() {
    // ws.sendMessage(this.state.message);
    this.clearForm();
  }

    render() {
        return (
            <form className='create-new-message-form'>
                <textarea value={this.state.message} 
                          placeholder="Type message"
                          onChange={this.handleMessageChange} 
                          required></textarea>
                <button type="submit">Send</button>
            </form>
        );
    }
}
