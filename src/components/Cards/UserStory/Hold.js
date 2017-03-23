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
			test: 0,
			// col2Value: 0,
		}
		this.componentWillMount = this.componentWillMount.bind(this);
		this.updateCard = this.updateCard.bind(this);
		// this.updateCol2Value = this.updateCol2Value.bind(this)
	}

	// updateCol2Value(e){
	// 	const col2Value = {...this.state.col2Value};
	// 	col2Value[``] = this.props.col2Value;
	// 	this.setState({col2Value})
	// 	return ({col2Value})
	// }

	updateCard(column, points, analytics, development, test) {

		points = parseInt(points);
		analytics = parseInt(analytics);
		development = parseInt(development);
		test = parseInt(test);

		switch(column) {
				case 'analysis':
					this.setState({
						analytics: this.state.analytics + points
					}, function() {
						this.props.updatePoints(column, points, analytics, development, test)
					});
					break;

				case 'development':
					this.setState({
						analytics: this.state.analytics - analytics,
						development: this.state.development + points
					}, function() {
						this.props.updatePoints(column, points, analytics, development, test)
					});
					break;

				case 'test':
					this.setState({
						development: this.state.development - development,
						test: this.state.test + points
					}, function() {
						this.props.updatePoints(column, points, analytics, development, test)
					});
					break;

				default:
					this.setState({
						test: this.state.test - test
					}, function() {
						this.props.updatePoints(column, points, analytics, development, test)
					});
			}
	}

	componentWillMount() {
		
		self = this;

		axios.get('http://agileboardgame.com/rest/?/us_cards').then(function(result) {

			let jsx = [];

			// Ajax code
			cards = result.data;
			self.props.cardSum(cards)

			// Create JSX elements
			for (var i = 0; i < cards.length; i++) {

				card = <UserStory key={i.toString()} updateCol2Value={self.props.updateCol2Value} updateCard={self.updateCard} number={cards[i].number} value={cards[i].value} analytics={cards[i].analytics} development={cards[i].development} test={cards[i].test} cardsColumn={self.props.cardsColumn}/>

				jsx = self.state.jsx;
				jsx.unshift(card);

				self.setState({
					jsx: jsx
				});
			}
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