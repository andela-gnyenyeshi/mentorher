import React, {PropTypes} from 'react';
const geryu = 6;
class App extends React.Component {
	render() {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<a href="#" className="brand-logo">Mentor Her</a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li><a href="sass.html">Home</a></li>
							<li><a href="badges.html">About</a></li>
							<li><a href="collapsible.html">Contact</a></li>
						</ul>
					</div>
				</nav>
				{this.props.children}
			</div>
		)
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;
