import './Maintenance.css';
import React from 'react';

export default class Maintenance extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isMoving: false,
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
		if (parseInt(this.refs.card.style.left) < 550 && this.state.isMoving == false) {
			this.refs.card.style.left = parseInt(this.refs.card.style.left) + 150 + 'px';

			this.setState({
				isMoving: true,
			});

			let that = this;

			setTimeout(function() {
				that.setState({
					isMoving: false,
				});
			}, 3000);
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
			<div ref='card' className='maintenance-card' onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} onClick={this.onClick.bind(this)}>
				<p className='header'>M{this.props.number}</p>
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

	if (randomNumber > 0.5) {
		var left = (randomNumber * 10).toString() + 'px';
	} else {
		var left = (randomNumber * -10).toString() + 'px';
	}

	card.style.top = top;
	card.style.left = left;
}

function insertLetters(prop, ref, letter) {
	for (var i = 0; i < prop; i++) {

		// Create new element
		var newElement = document.createElement('p');
		newElement.innerHTML = letter;

		// Insert new element into div
		ref.appendChild(newElement);
	}
} // Creates one letter for each point