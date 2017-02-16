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
			dayArray: [],
		};
	}


	//ReleasePlanCell.js - ColumnButton.js
	addX(dayX){
		const releaseplan = {...this.state.releaseplan};
		releaseplan[``] = true;
		this.setState({releaseplan});
	}

	render() {
		return (
			<div className="scrumboard">
				<NavBar />
				<ReleasePlan addX={this.addX} releaseplan={this.state.releaseplan} dayArray={this.state.dayArray}/>
				<Columns addX={this.addX} />
				<Hold />
				<HoldMaint />
				<HoldDefects />
			</div>
		);
	}
}