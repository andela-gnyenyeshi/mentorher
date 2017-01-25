import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import App from './App';

let AppComponent =  shallow(<App />);

it ('Renders Nav Bar', () => {
	expect(AppComponent.find('.nav-wrapper').length.toBe(1));
})
