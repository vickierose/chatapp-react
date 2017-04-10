import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import { MainHeader } from './main-header.jsx';

describe('main header', () => {
    it('should display logo in p', () => {
        expect(shallow(<MainHeader />).find('p').length).toBe(1);
    });
    it('should display nav with 5 items', () => {
        expect(shallow(<MainHeader />).find('nav').length).toBe(1);
        expect(shallow(<MainHeader />).find('li').length).toBe(5);
    });
});