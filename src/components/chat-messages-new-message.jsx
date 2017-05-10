import React, { Component } from 'react';

import * as ws from '../utils/ws';
import {handleInputChange} from '../utils/utils';

export class CreateNewMessage extends Component {
    constructor(props){
        super(props);
        this.state = {
            msg: ''
        }
        this.submitMessage = this.submitMessage.bind(this);
        this.handleInputChange = handleInputChange.bind(this);
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
                            onChange={this.handleInputChange('msg')} 
                            required></textarea>
                <button type="submit" onClick={this.submitMessage}>Send</button>
            </div>
        );
    }
}
