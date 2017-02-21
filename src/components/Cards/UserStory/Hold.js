import './Hold.css';
import React from 'react';
import UserStory from './User_Story.js';

export default class Hold extends React.Component {

	random(min, max) {
		return parseInt(Math.random() * (max - min) + min);
	}

    render() {

    	let cards = [];

    	return (
	  	<div className='hold'>
	  		<UserStory number="04" value={this.random(50, 500)} analytics={this.random(1, 7)} development={this.random(1, 7)} test={this.random(1, 7)} />
	  		<UserStory number="03" value={this.random(50, 500)} analytics={this.random(1, 7)} development={this.random(1, 7)} test={this.random(1, 7)} />
	  		<UserStory number="02" value={this.random(50, 500)} analytics={this.random(1, 7)} development={this.random(1, 7)} test={this.random(1, 7)} />
	  		<UserStory number="01" value={this.random(50, 500)} analytics={this.random(1, 7)} development={this.random(1, 7)} test={this.random(1, 7)} />
	  	</div>
    	);
    }
}