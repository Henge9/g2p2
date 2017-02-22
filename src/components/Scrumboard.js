import './Scrumboard.css';
import React from 'react';
import NavBar from './Navbar/Navbar.js';
import Hold from './Cards/UserStory/Hold.js';
import HoldMaint from './Cards/Maintenance/HoldMaint.js';
import HoldDefects from './Cards/Defects/HoldDefects.js';
import Members from './Members/Members.js';
import ReleasePlan from './ReleasePlan/ReleasePlan.js';
import ReleasePlanCell from './ReleasePlan/ReleasePlanCell/ReleasePlanCell.js';
import Columns from './Columns/Columns.js';

 

export default class ScrumBoard extends React.Component {
	
	constructor(){
		super();
		this.addX = this.addX.bind(this); //ReleasePlanCell.js - ColumnButton.js
		
		//getInitialState
		this.state = {
			releaseplan: false, //ReleasePlanCell.js - ColumnButton.js
			dayArray: {number: 0}, //Releaseplan.js
			sprintArray: {number: 1}, //Releaseplan.js
			card: {isMoving: false},
		};
	}

	//ReleasePlanCell.js - ColumnButton.js
	addX(){
		const releaseplan = {...this.state.releaseplan};
		let sprintArray = {...this.state.sprintArray};
		let dayArray = {...this.state.dayArray};
		
		releaseplan[``] = true;
		dayArray[`number`] += 1;

		if (dayArray[`number`] == 6) {
			dayArray[`number`] = 1;
			sprintArray[`number`] += 1;
		}
		
		this.setState({releaseplan});
		this.setState({sprintArray});
		this.setState({dayArray});
	}

	render() {
		return (
			<div className="scrumboard">
				<NavBar />
				<ReleasePlan addX={this.addX} releaseplan={this.state.releaseplan} sprintArray={this.state.sprintArray} dayArray={this.state.dayArray}/>
				<Columns addX={this.addX} />
				<Hold card={this.state.card} />
				<HoldMaint />
				<HoldDefects />
			</div>
		);
	}
}