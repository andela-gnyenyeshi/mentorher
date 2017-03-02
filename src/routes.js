import React from 'react'; /* eslint-disable no-unused-vars */
import { Route, IndexRoute } from 'react-router'; /* eslint-disable no-unused-vars */
import App from './app/components/App';
import LandingPage from './app/modules/home/views/containers/LandingPage';
import MentorDetails from './app/modules/home/views/containers/MentorDetails';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path="/user" component={MentorDetails} />
    <Route path="/mentordetails" component={MentorDetails} />
  </Route>
);
