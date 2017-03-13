import React from 'react';
import './DiceArea.css';
import Die1 from './Dice/Die1.js';
import Die2 from './Dice/Die2.js';
import Die3 from './Dice/Die3.js';
import Die4 from './Dice/Die4.js';
import Die5 from './Dice/Die5.js';
import Die6 from './Dice/Die6.js';

export default class DiceArea extends React.Component {

	constructor(){
		super();
		this.dicePositions = this.dicePositions.bind(this);

		this.state = {
			dice1Position: {column: 1},
			dice2Position: {column: 1},
			dice3Position: {column: 1},
			dice4Position: {column: 1},
			dice5Position: {column: 1},
			dice6Position: {column: 1}, 
		};
	}

	dicePositions(){
		alert('hej');

		const dice1Position = {...this.state.dice1Position};
		const dice2Position = {...this.state.dice2Position};
		const dice3Position = {...this.state.dice3Position};
		const dice4Position = {...this.state.dice4Position};
		const dice5Position = {...this.state.dice5Position};
		const dice6Position = {...this.state.dice6Position};

		// dice1Position[`column`] += 1;
		// dice2Position[`column`] += 1;
		// dice3Position[`column`] += 1;
		// dice4Position[`column`] += 1;
		// dice5Position[`column`] += 1;
		// dice6Position[`column`] += 1;

		// if (dice1Position[`column`] === 2) {
		// 	//do something and then reset the state
		// 	dice1Position[`column`] = 1;
		// }
		
		// this.setState({dice1Position});
	}

	render() {
		var die1numb = this.props.rollDice1[`numberI`];
		var die2numb = this.props.rollDice2[`numberII`];
		var die3numb = this.props.rollDice3[`numberIII`];
		var die4numb = this.props.rollDice4[`numberIV`];
		var die5numb = this.props.rollDice5[`numberV`];
		var die6numb = this.props.rollDice6[`numberVI`];

		return (
			<div className='dice-area' >		
				<div className="dice-group" id="group1">
					<Die1 dice1Position={this.state.dice1Position} pushB={this.props.pushB} rollDice1={this.props.rollDice1} getPos={this.getPos} changePos1={this.changePos1} dicePosition={this.dicePositions()}/>
					<Die3 pushB={this.props.pushB} rollDice3={this.props.rollDice3} getPos={this.getPos} />
					<Die5 pushB={this.props.pushB} rollDice5={this.props.rollDice5} getPos={this.getPos} />
					<Die2 pushB={this.props.pushB} rollDice2={this.props.rollDice2} getPos={this.getPos} />
					<Die4 pushB={this.props.pushB} rollDice4={this.props.rollDice4} getPos={this.getPos} />
					<Die6 pushB={this.props.pushB} rollDice6={this.props.rollDice6} getPos={this.getPos} />
				</div>
				<div className="dice-group2" id="group2" ref="group2"></div>
			 	<div className="dice-group3" id="group3"></div>	
				<div className="dice-group4" id="group4"></div>	
			</div>
		);
	}
}