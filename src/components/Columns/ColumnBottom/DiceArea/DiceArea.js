import React from 'react';
import './DiceArea.css';
import Die1 from './Dice/Die1.js';
import Die2 from './Dice/Die2.js';
import Die3 from './Dice/Die3.js';
import Die4 from './Dice/Die4.js';
import Die5 from './Dice/Die5.js';
import Die6 from './Dice/Die6.js';


export default class DiceArea extends React.Component {
	render() {
		return (
			<div className='dice-area'>
				<div className="dice-group">
					<Die1 pushB={this.props.pushB} rollDice1={this.props.rollDice1} />
					<Die3 />
					<Die5 />
					<Die2 pushB={this.props.pushB} rollDice2={this.props.rollDice2} />
					<Die4 />
					<Die6 />
				</div>
			</div>
		);
	}
}