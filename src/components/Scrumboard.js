import React from 'react';
import NavBar from './Navbar/Navbar.js';
import Hold from './Hold.js';
import Members from './Members/Members.js';
import ReleasePlan from './Releaseplan/Releaseplan.js';
import Columns from './Columns/Columns.js'

export default class ScrumBoard extends React.Component {
	render() {
		return (
			<div className="scrumboard">
				<NavBar />
				<header>
					<Members />
					<ReleasePlan />
				</header>
				<Columns />
				<Hold />
			</div>
		);
	}
}