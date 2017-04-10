import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import {LoginPage}from './login-page.jsx';

describe('login page', () => {
    it('should render form', () => {
        expect(shallow(<LoginPage />).find('form').length).toBe(1);
    });
    it('should contain 2 inputs', () => {
        expect(shallow(<LoginPage />).find('input').length).toBe(2);
    });
    it('shoud contain input for login', () => {
        expect(shallow(<LoginPage />).find('input').find('[type="text"]').length).toBe(1);
    });
    it('shoud contain input for password', () => {
         expect(shallow(<LoginPage />).find('input').find('[type="password"]').length).toBe(1);
    });
    it('should contain login button', () => {
        expect(shallow(<LoginPage />).find('button').find('[type="submit"]').length).toBe(1);
    });
    it('should contain google login button', () => {
        expect(shallow(<LoginPage />).find('#google-custom-button').length).toBe(1);
    });
});