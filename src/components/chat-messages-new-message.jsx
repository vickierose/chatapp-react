import React, { Component } from 'react';

import * as ws from '../utils/ws';
import {handleInputChange} from '../utils/utils';
import * as validation from '../utils/validation';
import { Validate, ValidateGroup } from 'react-validate';

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

   submitMessage(e) {
       ws.sendMessage(this.state.msg);
       this.clearForm();
       e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submitMessage} className='create-new-message-form'>
                <ValidateGroup>
                    <Validate validators={[validation.isNotEmpty]}>
                    <textarea value={this.state.msg}
                            placeholder="Type message"
                            onChange={this.handleInputChange('msg')} 
                            ></textarea>
                    </Validate>
                <button type="submit">Send</button>
                </ValidateGroup>
            </form>
        );
    }
}
