import './Scrumboard.css';
import React from 'react';
import NavBar from './Navbar/Navbar.js';
import Hold from './Cards/Hold.js';
import HoldMaint from './Cards/HoldMaint.js';
import HoldDefects from './Cards/HoldDefects.js';
import Members from './Members/Members.js';
import ReleasePlan from './ReleasePlan/ReleasePlan.js';
import Columns from './Columns/Columns.js';



export default class ScrumBoard extends React.Component {
	render() {
		return (
			<div className="scrumboard">
				<NavBar />
				<header className='header'>
				</header>
				<Columns />
			</div>
		);
	}
}