import React from 'react';
import axios from 'axios';
import './Hold.css';
import UserStory from './User_Story.js';

var cards;
var v;

export default class Hold extends React.Component {

	random(min, max) {
		return parseInt(Math.random() * (max - min) + min);
	}

	generateCards() {
		axios.get('http://localhost:8080/g2p2/src/ajax/Card_Info.php').then(function(result) {

			// Ajax code
			cards = result.data;

			for (var i = 0; i < cards.length; i++) {

				console.log(cards[i]);

				v += <UserStory number={cards[i].number} value={cards[i].value} analytics={cards[i].analytics} development={cards[i].development} test={cards[i].test} />;
			}

			return v;
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