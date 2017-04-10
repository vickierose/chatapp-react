import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import {RegisterPage} from './register-page.jsx';

describe('register page', () => {
    it('should contain 4 inputs', () => {
        expect(shallow(<RegisterPage />).find('input').length).toBe(4);
    });
    it('should contain input for full name', () => {
         expect(shallow(<RegisterPage />).find('input').find('[placeholder="Full Name"]').length).toBe(1);
    });
    it('should contain input for e-mail', () => {
        expect(shallow(<RegisterPage />).find('input').find('[placeholder="E-mail"]').length).toBe(1);
    });
    it('should contain input for password', () => {
        expect(shallow(<RegisterPage />).find('input').find('[placeholder="Password"]').length).toBe(1);
    });
    it('should contain input for confirming password', () => {
        expect(shallow(<RegisterPage />).find('input').find('[placeholder="Confirm Password"]').length).toBe(1);
    });
    it('should contain button for signing up', () => {
        expect(shallow(<RegisterPage />).find('button').length).toBe(1);
    });
});