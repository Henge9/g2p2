import './Defects.css';
import React from 'react';

export default class Defects extends React.Component {
	componentDidMount() {
		insertLetters(this.props.analytics, this.refs.analytics, 'A');
		insertLetters(this.props.development, this.refs.development, 'D');
		insertLetters(this.props.test, this.refs.test, 'T');
	}

	render() {
		return (
			<div className='defects-card'>
				<p className='header'>Defects{this.props.number}</p>
				<div className='points'>
					<div ref='analytics'></div>
	  				<div ref='development'></div>
	  				<div ref='test'></div>
				</div>
			</div>
		);
	}
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