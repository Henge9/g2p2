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


		var die1numb = this.props.rollDice1[`numberI`];
		console.log("Det här!!! " + die1numb);
		var die2numb = this.props.rollDice2[`numberII`];
		console.log("Det här!!! " + die2numb);
		var die3numb = this.props.rollDice3[`numberIII`];
		console.log("Det här!!! " + die3numb);
		var die4numb = this.props.rollDice4[`numberIV`];
		console.log("Det här!!! " + die4numb);
		var die5numb = this.props.rollDice5[`numberV`];
		console.log("Det här!!! " + die5numb);
		var die6numb = this.props.rollDice6[`numberVI`];
		console.log("Det här!!! " + die6numb);

	


		return (
			<div className='dice-area' >		
				<div className="dice-group" id="group1">
					<Die1 pushB={this.props.pushB} rollDice1={this.props.rollDice1} getPos={this.getPos} changePos1={this.changePos1}/>
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