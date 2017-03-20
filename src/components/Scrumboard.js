import './Scrumboard.css';
import React from 'react';
import NavBar from './Navbar/Navbar.js';
import Hold from './Cards/UserStory/Hold.js';
import HoldMaint from './Cards/Maintenance/HoldMaint.js';
import HoldDefects from './Cards/Defects/HoldDefects.js';
import ReleasePlan from './ReleasePlan/ReleasePlan.js';
import Columns from './Columns/Columns.js';

export default class ScrumBoard extends React.Component {
	
	constructor(){
		super();
		this.addX = this.addX.bind(this); //ReleasePlanCell.js - ColumnButton.js
		this.getPoints = this.getPoints.bind(this)
		this.sendPoints = this.sendPoints.bind(this)
		this.updatePoints = this.updatePoints.bind(this)
		
		//getInitialState
		this.state = {
			releaseplan: false, //ReleasePlanCell.js - ColumnButton.js
			dayArray: {number: 0}, //Releaseplan.js
			sprintArray: {number: 1}, //Releaseplan.js
			col2Value: 0,
			col3Value: 0, 
			col4Value: 0,
			analytics: 0,
			development: 0,
			test: 0,
		};
	}

	//ReleasePlanCell.js - ColumnButton.js
	addX(e){
		const releaseplan = {...this.state.releaseplan};
		let sprintArray = {...this.state.sprintArray};
		let dayArray = {...this.state.dayArray};
		
		releaseplan[``] = true;
		dayArray[`number`] += 1;

		if (dayArray[`number`] === 6) {
			dayArray[`number`] = 1;
			sprintArray[`number`] += 1;
		}
		
		this.setState({releaseplan});
		this.setState({sprintArray});
		this.setState({dayArray});
	}

	getPoints(column2Value, column3Value, column4Value){
		const col2Value = {...this.state.col2Value}
		const col3Value = {...this.state.col3Value}
		const col4Value = {...this.state.col4Value}

		col2Value[``] = column2Value
		col3Value[``] = column3Value
		col4Value[``] = column4Value

		this.setState({col2Value})
		this.setState({col3Value})
		this.setState({col4Value})
		// this.setState({column2Value: column2Value, column3Value: column3Value, column4Value: column4Value})
	}

	sendPoints(e){
		console.log ('denna 2: ', this.state.col2Value)
		console.log ('denna 3: ', this.state.col3Value)
		console.log ('denna 4: ', this.state.col4Value)
	}

	updatePoints(column, points, analytics, development, test) {

		switch(column) {
				case 'analysis':
					this.setState({
						analytics: this.state.analytics + points
					});
					break;

				case 'development':
					this.setState({
						analytics: this.state.analytics - analytics,
						development: this.state.development + points
					});
					break;

				case 'test':
					this.setState({
						development: this.state.development - development,
						test: this.state.test + points
					});
					break;

				default:
					this.setState({
						test: this.state.test - test
					});
			}
	}

	render() {
		return (
			<div className="scrumboard">
				<NavBar />
				<ReleasePlan addX={this.addX} releaseplan={this.state.releaseplan} sprintArray={this.state.sprintArray} dayArray={this.state.dayArray}/>
				<Columns addX={this.addX} getPoints={this.getPoints} sendPoints={this.sendPoints} />
				<Hold updatePoints={this.updatePoints} />
				<HoldMaint updatePoints={this.updatePoints} />
				<HoldDefects updatePoints={this.updatePoints} />
			</div>
		);
	}
}