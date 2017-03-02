import React from 'react';
import { connect } from 'react-redux';

export class LandingPage extends React.Component {


  render() {
    console.log(this.props)
    return (
    <div id="black">
      <div id="back">
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
	mentors: state.mentors
});

export default connect(mapStateToProps)(LandingPage);
