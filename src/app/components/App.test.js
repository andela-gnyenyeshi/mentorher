import React from 'react';
import expect from 'expect';
import {shallow, mount} from 'enzyme';
import { App } from './App';

const props = {children: [], fetchMentors: function () {}};
let AppComponent =  mount(<App {...props} />);

it ('Renders Nav Bar', () => {
	expect(AppComponent.find('.nav-wrapper').length).toBe(1);
})
