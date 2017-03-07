import React from 'react';
import './DiceArea.css';
import Die1 from './Dice/Die1.js';
import Die2 from './Dice/Die2.js';
import Die3 from './Dice/Die3.js';
import Die4 from './Dice/Die4.js';
import Die5 from './Dice/Die5.js';
import Die6 from './Dice/Die6.js';

export default class DiceArea extends React.Component {

	constructor() {
		super();
		this.getPos = this.getPos.bind(this);
		/*this.state = {
			currentPos1: Die1.parentNode.id 
		}*/
	}

	getPos() {

			console.log("Funkar detta?");
			//console.log("buhu " + currentPos1);
			console.log("buhu " + Die1.parentNode.id);
			//console.log("buhu2 " + Die2.parentNode.id);
			//console.log("buhu3 " + Die3.parentNode.id);
		}

	render() {

		var die1numb = this.props.rollDice1[`numberI`];
		var die2numb = this.props.rollDice2[`numberII`];
		var die3numb = this.props.rollDice3[`numberIII`];
		var die4numb = this.props.rollDice4[`numberIV`];
		var die5numb = this.props.rollDice5[`numberV`];
		var die6numb = this.props.rollDice6[`numberVI`];

		return (
			<div className='dice-area' /*getPos={this.getPos}*/>		
				<div className="dice-group" id="group1">
					<Die1 pushB={this.props.pushB} rollDice1={this.props.rollDice1} getPos={this.getPos} />
					<Die3 pushB={this.props.pushB} rollDice3={this.props.rollDice3} getPos={this.getPos} />
					<Die5 pushB={this.props.pushB} rollDice5={this.props.rollDice5} getPos={this.getPos} />
					<Die2 pushB={this.props.pushB} rollDice2={this.props.rollDice2} getPos={this.getPos} />
					<Die4 pushB={this.props.pushB} rollDice4={this.props.rollDice4} getPos={this.getPos} />
					<Die6 pushB={this.props.pushB} rollDice6={this.props.rollDice6} getPos={this.getPos} />
				</div>
				<div className="dice-group2" id="group2"></div>
			 	<div className="dice-group3" id="group3"></div>	
				<div className="dice-group4" id="group4"></div>	
			</div>
		);
	}
}