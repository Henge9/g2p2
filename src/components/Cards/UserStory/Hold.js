import React from 'react';
import axios from 'axios';
import './Hold.css';
import UserStory from './User_Story.js';

export default class Hold extends React.Component {

	random(min, max) {
		return parseInt(Math.random() * (max - min) + min);
	}

	componentDidMount() {
		axios.get('localhost:8080/g2p2/src/ajax/Card_Info.php').then(function(result) {
			console.log(result.data);
		});
	}

    render() {

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