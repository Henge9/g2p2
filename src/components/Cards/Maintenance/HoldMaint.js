import './HoldMaint.css';
import React from 'react';
import Maintenance from './Maintenance.js';

export default class HoldMaint extends React.Component {

	random(min, max) {
		return parseInt(Math.random() * (max - min) + min, 10);
	}

	render() {
		return(
			<div className='holdMaint'>
	  			<Maintenance number="04" value={this.random(50, 500)} analytics={this.random(1, 7)} development={this.random(1, 7)} test={this.random(1, 7)} />
		  		<Maintenance number="03" value={this.random(50, 500)} analytics={this.random(1, 7)} development={this.random(1, 7)} test={this.random(1, 7)} />
		  		<Maintenance number="02" value={this.random(50, 500)} analytics={this.random(1, 7)} development={this.random(1, 7)} test={this.random(1, 7)} />
		  		<Maintenance number="01" value={this.random(50, 500)} analytics={this.random(1, 7)} development={this.random(1, 7)} test={this.random(1, 7)} />
	  		</div>
		);
	}
}