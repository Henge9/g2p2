import './ColumnBottom.css';
import React from 'react';
import DiceArea from './DiceArea/DiceArea.js';
import Die1 from './DiceArea/Dice/Die1.js';
import Die2 from './DiceArea/Dice/Die2.js';
import ColumnButtons from './ColumnButtons/ColumnButtons.js';

export default class ColumnBottom extends React.Component {

	
	constructor() {
		super();
		this.pushB = this.pushB.bind(this);
		this.state = {
			rollDice1: {numberI: 1},
			rollDice2: {numberII: 2},
		};
	}


	pushB(){
		var rollDice1 = {...this.state.rollDice1}; 
		var rollDice2 = {...this.state.rollDice2};  
		// var rollDice3 = {...this.state.rollDice1};  
		// var rollDice4 = {...this.state.rollDice1};  
		// var rollDice5 = {...this.state.rollDice1};  
		// var rollDice6 = {...this.state.rollDice1};   

		const min = Math.ceil(1);
  		const max = Math.floor(7);
  		var number1 = Math.floor(Math.random() * (max - min)) + min;
  		var number2 = Math.floor(Math.random() * (max - min)) + min;

		console.log("TÄRNING 1: " + number1);
		rollDice1 [`numberI`] = number1;
		this.setState({rollDice1});

		console.log("TÄRNING 2: " + number2);
		rollDice2 [`numberII`] = number2;
		this.setState({rollDice2});
	}



	render() {
		return (
			<div className='column-bottom'>
				<DiceArea pushB={this.pushB} rollDice1={this.state.rollDice1} rollDice2={this.state.rollDice2} />	
					
				<ColumnButtons addX={this.props.addX} pushB={this.pushB}/>
			</div>
		);
	}
}