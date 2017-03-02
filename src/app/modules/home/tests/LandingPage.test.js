import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { LandingPage } from '../views/containers/LandingPage';

let LandingPageComponent = mount(<LandingPage/>);

it('Renders image', () => {
  expect(LandingPageComponent.find('#black').length).toBe(1);
});
