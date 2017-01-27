import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import App from './App';

const props = {children: []};
let AppComponent =  shallow(<App {...props} />);

it ('Renders Nav Bar', () => {
	expect(AppComponent.find('.nav-wrapper').length).toBe(1);
})
