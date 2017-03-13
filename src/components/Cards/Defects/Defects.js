import './Defects.css';
import React from 'react';

export default class Defects extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isMoving: false,
			column: 'backlog'
		};
	}

	onMouseEnter() {
		this.refs.card.style.border = '1px solid cyan';
		this.refs.card.style.boxShadow = '0px 0px 3px 3px rgba(0, 255, 255, 0.7)';
	}

	onMouseLeave() {
		this.refs.card.style.border = '1px solid black';
		this.refs.card.style.boxShadow = 'none';
	}

	onClick() {
		if (parseInt(this.refs.card.style.left, 10) < 550 && this.state.isMoving === false) {
			this.refs.card.style.left = parseInt(this.refs.card.style.left, 10) + 158 + 'px';

			this.setState({
				isMoving: true,
			});

			let that = this;

			setTimeout(function() {
				that.setState({
					isMoving: false,
				});
			}, 2000);

			switch(this.state.column) {
				case 'backlog':
					this.setState({
						column: 'analysis'	
					});
					this.refs.analytics.style.color = "yellow";
					this.refs.analytics.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
					break;

				case 'analysis':
					this.setState({
						column: 'development'
					});
					this.refs.analytics.style.color = "black";
					this.refs.analytics.style.textShadow = "none";

					this.refs.development.style.color = "lightblue";
					this.refs.development.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
					break;

				case 'development':
					this.setState({
						column: 'test'
					});
					this.refs.development.style.color = "black";
					this.refs.development.style.textShadow = "none";

					this.refs.test.style.color = "yellow";
					this.refs.test.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
					break;

				case 'test':
					this.setState({
						column: 'done'
					});
					this.refs.test.style.color = "black";
					this.refs.test.style.textShadow = "none";
					break;

				default:
					this.setState({
						column: 'backlog'
					});
			}
		}
	}

	componentDidMount() {
		let analEl = this.refs.analytics;
		let devEl = this.refs.development;
		let testEl = this.refs.test;

		// Insert points
		insertLetters(this.props.analytics, analEl, 'A');
		insertLetters(this.props.development, devEl, 'D');
		insertLetters(this.props.test, testEl, 'T');

		// Randomize card position
		var card = this.refs.card;
		randomCardPos(card);
	}

	render() {
		return (
			<div ref='card' className='defects-card' onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} onClick={this.onClick.bind(this)}>
				<p className='header'>D{this.props.number}</p>
				<div className='points'>
					<div ref='analytics'></div>
	  				<div ref='development'></div>
	  				<div ref='test'></div>
				</div>
			</div>
		);
	}
}

function randomCardPos(card) {

	var randomNumber = Math.random();
	var top = (Math.random() * 10).toString() + 'px';
	var left;

	if (randomNumber > 0.5) {
		left = (randomNumber * 10).toString() + 'px';
	} else {
		left = (randomNumber * -10).toString() + 'px';
	}

	card.style.top = top;
	card.style.left = left;
}

function insertLetters(amount, ref, letter) {
	for (var i = 0; i < amount; i++) {

		// Create new element
		var newElement = document.createElement('p');
		newElement.innerHTML = letter;

		// Insert new element into div
		ref.appendChild(newElement);
	}
} // Creates one letter for each point