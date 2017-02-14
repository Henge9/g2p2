import React from 'react';
import './DiceArea.css';
import Die1 from './Dice/Die1';
import Die2 from './Dice/Die2';
import Die3 from './Dice/Die3';
import Die4 from './Dice/Die4';
import Die5 from './Dice/Die5';
import Die6 from './Dice/Die6';

export default class DiceArea extends React.Component {
	render() {
		return (
			<div className='dice-area'>
				<div className="dice-group">
					<Die1 />
					<Die3 />
					<Die5 />
					<Die2 />
					<Die4 />
					<Die6 />
				</div>
			</div>
		);
	}
}