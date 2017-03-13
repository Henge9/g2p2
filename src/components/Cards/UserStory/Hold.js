import React from 'react';
import axios from 'axios';
import './Hold.css';
import UserStory from './User_Story.js';

var card;
var cards = [];

export default class Hold extends React.Component {

	constructor() {
		super();
		this.state = {
			jsx: [],
			analytics: 0,
			development: 0,
			test: 0
		}
		this.componentWillMount = this.componentWillMount.bind(this);
		this.updateCard = this.updateCard.bind(this);
	}

	updateCard(column, points, analytics, development, test) {

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

	componentWillMount() {
		
		self = this;

		axios.get('http://localhost:8080/g2p2/src/ajax/Card_Info.php?card=userstory').then(function(result) {

			let jsx = [];

			// Ajax code
			cards = result.data;

			// Create JSX elements
			for (var i = 0; i < cards.length; i++) {

				card = <UserStory updateCard={self.updateCard} number={cards[i].number} value={cards[i].value} analytics={cards[i].analytics} development={cards[i].development} test={cards[i].test}/>

				jsx = self.state.jsx;
				jsx.unshift(card);

				self.setState({
					jsx: jsx
				});
			}

			console.log(cards);
		});
	}

    render() {
    	return (
    	<div className='hold'>
    		{this.state.jsx}
    	</div>
    	);
    }
}