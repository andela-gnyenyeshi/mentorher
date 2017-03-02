import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { MentorDetails } from '../views/containers/MentorDetails';

let renderedMentorDetails = mount(<MentorDetails />);

it('Renders paragraph', () => {
  expect(renderedMentorDetails.text()).toInclude('This is the user route with mentor details');
})
