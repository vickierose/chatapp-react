import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import {HomePage} from './home-page.jsx';

describe('home page', () => {
    it('should render greeting h1', () => {
        expect(shallow(<HomePage />).find('h1').length).toBe(1);
    });
});