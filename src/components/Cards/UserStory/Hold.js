import React from 'react';
import axios from 'axios';
import './Hold.css';
import UserStory from './User_Story.js';

var card;
var cards = [];
var jsx = [];

export default class Hold extends React.Component {

	generateCards() {
		
		// axios.get('http://localhost:8080/g2p2/src/ajax/Card_Info.php').then(function(result) {

		// 	// Ajax code
		// 	cards = result.data;
		// 	console.log(cards);

		// 	// Create JSX elements
		// 	for (var i = 0; i < cards.length; i++) {
		// 		card = <UserStory number={cards[i].number} value={cards[i].value} analytics={cards[i].analytics} development={cards[i].development} test={cards[i].test}/>
		// 		jsx.push(card);
		// 	}

		// 	console.log(jsx);

		// 	// Return array of JSX elements
		// 	return jsx;
		// });

		var cards = [{
			number: 1,
			value: 300,
			analytics: 'analytics',
			development: 'development',
			test: 'test',
		}, 
		{
			number: 2,
			value: 500,
			analytics: 'Analytics',
			development: 'Development',
			test: 'Test',
		}]

		for (var i=0; i<cards.length; i++){
			card = <UserStory number={cards[i].number} value={cards[i].value} analytics={cards[i].analytics} development={cards[i].development} test={cards[i].test}/>
			jsx.push(card)	
		}
	}

    render() {

    	return (
    	<div className='hold'>
    		{this.generateCards(), jsx}
    	</div>
    	);
    }
}