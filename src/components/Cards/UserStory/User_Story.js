import React from 'react';
import './User_Story.css';

export default class UserStory extends React.Component {

	componentDidMount() {

		// Insert points
		insertLetters(this.props.analytics, this.refs.analytics, 'A');
		insertLetters(this.props.development, this.refs.development, 'D');
		insertLetters(this.props.test, this.refs.test, 'T');

		// Randomize card position
		var card = this.refs.card;
		randomCardPos(card);
	}

    render(){
	return (
	  	<div ref='card' className='user-story'>
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