import React from 'react';
import { connect } from 'react-redux';

export class MentorDetails extends React.Component {
	render() {
    let mentors = this.props.mentors ? this.props.mentors.data : [];
		return (
      <div>
        <p>This is the user route with mentor details</p>
        <p>List all mentors</p>
				<tbody>
        {mentors.length > 0 && mentors.map((mentor) => {
					console.log('huuuh');
          return (<td key={mentor.id}>
            <tr>{mentor.firstname}</tr>
            <tr>{mentor.description}</tr>
          </td>)
        })}
				</tbody>
      </div>
		);
	}
}

const mapStateToProps = (state) => ({
	mentors: state.mentors
});

export default connect(mapStateToProps, {

})(MentorDetails);
