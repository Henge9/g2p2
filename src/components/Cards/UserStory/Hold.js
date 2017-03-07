import React from 'react';
import axios from 'axios';
import './Hold.css';
import UserStory from './User_Story.js';

var cards;

export default class Hold extends React.Component {

	generateCards() {
		axios.get('http://localhost:8080/g2p2/src/ajax/Card_Info.php').then(function(result) {

			// Ajax code
			cards = result.data;

			// Create JSX elements

			console.log("Kort från databasen:");
			console.log(cards);

			// Return JSX elements
		});
	}

    render() {

    	return (
    	<div className='hold'>
    		{this.generateCards()}
    	</div>
    	);
    }
}