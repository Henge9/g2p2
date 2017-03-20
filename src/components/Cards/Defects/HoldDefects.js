import React from 'react';
import axios from 'axios';
import './HoldDefects.css';
import Defects from './Defects.js';

var card;
var cards = [];

export default class HoldDefects extends React.Component {

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
		
		var self3 = this;

		axios.get('http://agileboardgame.com/rest/?/d_cards').then(function(result) {

			let jsx = [];

			// Ajax code
			cards = result.data;

			// Create JSX elements
			for (var i = 0; i < cards.length; i++) {

				card = <Defects key={i.toString()} updateCard={self3.updateCard} number={cards[i].number} analytics={cards[i].analytics} development={cards[i].development} test={cards[i].test}/>

				jsx = self3.state.jsx;
				jsx.unshift(card);

				self3.setState({
					jsx: jsx
				});
			}
		});
	}

	render() {
		return(
			<div className='holdDef'>
				{this.state.jsx}
	  		</div>
		);
	}
}