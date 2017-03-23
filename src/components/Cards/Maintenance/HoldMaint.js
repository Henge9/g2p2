import React from 'react';
import axios from 'axios';
import './HoldMaint.css';
import Maintenance from './Maintenance.js';

var card;
var cards = [];

export default class HoldMaint extends React.Component {

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

		var self2 = this;

		axios.get('http://agileboardgame.com/rest/?/m_cards').then(function(result) {

			let jsx = [];

			// Ajax code
			cards = result.data;

			// Create JSX elements
			for (var i = 0; i < cards.length; i++) {

				card = <Maintenance key={i.toString()} updateCol2Value={self.props.updateCol2Value} updateCol3Value={self.props.updateCol3Value} updateCol4Value={self.props.updateCol4Value} updateCard={self2.updateCard} number={cards[i].number} analytics={cards[i].analytics} development={cards[i].development} test={cards[i].test}/>

				jsx = self2.state.jsx;
				jsx.unshift(card);

				self2.setState({
					jsx: jsx
				});
			}
		});
	}

	render() {
		return(
			<div className='holdMaint'>
	  			{this.state.jsx}
	  		</div>
		);
	}
}