import React, { Component } from 'react';

export class CreateNewMessage extends Component {
    render() {
        return (
            <form className='create-new-message-form'>
                <textarea placeholder="Type message" name="text" required></textarea>
                <button type="submit">Send</button>
            </form>
        );
    }
}
