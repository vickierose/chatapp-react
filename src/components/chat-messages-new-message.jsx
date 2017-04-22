import React, { Component } from 'react';

export class CreateNewMessage extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: ''
        }
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }

    handleMessageChange(e){
        this.setState(state => ({message: e.target.value}));
        e.persist();
    }

    clearForm() {
    this.setState({ message: '' });
  }

   submitMessage() {
    this.clearForm();
  }

    render() {
        return (
            <div className='create-new-message-form'>
                <textarea value={this.state.message} 
                          placeholder="Type message"
                          onChange={this.handleMessageChange} 
                          required></textarea>
                <button type="submit" onClick={this.submitMessage}>Send</button>
            </div>
        );
    }
}
