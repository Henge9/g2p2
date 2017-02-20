import React from 'react';
import './User_Story.css';

export default class UserStory extends React.Component {

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
		insertLetters(analEl, 'A');
		insertLetters(devEl, 'D');
		insertLetters(testEl, 'T');

		// Change points font size
		analEl.style.fontSize = (analEl.childElementCount* -1) + 20 + 'px';
		devEl.style.fontSize = (devEl.childElementCount* -1) + 20 + 'px'
		testEl.style.fontSize = (testEl.childElementCount* -1) + 20 + 'px'

		// Randomize card position
		var card = this.refs.card;
		randomCardPos(card);
	}

    render(){
	return (
	  	<div ref='card' className='user-story' onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} onClick={this.onClick.bind(this)}>
	  		<p className='header'>US{this.props.number}</p><p className='value'>${this.props.value}</p>
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
} // Randomizes card starting position

function insertLetters(ref, letter) {

	// Randomize amount
	var amount = parseInt(Math.random() * 8);

	console.log(amount);

	for (var i = 0; i < amount; i++) {

		// Create new element
		var newElement = document.createElement('p');
		newElement.innerHTML = letter;

		// Insert new element into div
		ref.appendChild(newElement);
	}
} // Creates one letter for each point8