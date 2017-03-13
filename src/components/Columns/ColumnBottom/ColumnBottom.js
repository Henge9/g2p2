import './ColumnBottom.css';
import React from 'react';
import DiceArea from './DiceArea/DiceArea.js';
import ColumnButtons from './ColumnButtons/ColumnButtons.js';

export default class ColumnBottom extends React.Component {

	
	constructor() {
		super();
		this.pushB = this.pushB.bind(this);
		this.state = {
			rollDice1: {numberI: 1},
			rollDice2: {numberII: 2},
			rollDice3: {numberIII: 3},
			rollDice4: {numberIV: 4},
			rollDice5: {numberV: 5},
			rollDice6: {numberVI: 6}
		};
	}

	pushB(){
		var rollDice1 = {...this.state.rollDice1};
		var rollDice2 = {...this.state.rollDice2};  
		var rollDice3 = {...this.state.rollDice3};  
		var rollDice4 = {...this.state.rollDice4};  
		var rollDice5 = {...this.state.rollDice5};  
		var rollDice6 = {...this.state.rollDice6};   

		const min = Math.ceil(1);
  		const max = Math.floor(7);
  		var number1 = Math.floor(Math.random() * (max - min)) + min;
  		var number2 = Math.floor(Math.random() * (max - min)) + min;
  		var number3 = Math.floor(Math.random() * (max - min)) + min;
  		var number4 = Math.floor(Math.random() * (max - min)) + min;
  		var number5 = Math.floor(Math.random() * (max - min)) + min;
  		var number6 = Math.floor(Math.random() * (max - min)) + min;

		rollDice1[`numberI`] = number1;
		this.setState({rollDice1});

		rollDice2[`numberII`] = number2;
		this.setState({rollDice2});

		rollDice3[`numberIII`] = number3;
		this.setState({rollDice3});

		rollDice4[`numberIV`] = number4;
		this.setState({rollDice4});

		rollDice5[`numberV`] = number5;
		this.setState({rollDice5});

		rollDice6[`numberVI`] = number6;
		this.setState({rollDice6});
	}



	render() {
		return (
			<div className='column-bottom'>
				<DiceArea pushB={this.pushB} rollDice1={this.state.rollDice1} rollDice2={this.state.rollDice2} rollDice3={this.state.rollDice3} rollDice4={this.state.rollDice4} rollDice5={this.state.rollDice5} rollDice6={this.state.rollDice6} />	
					
				<ColumnButtons addX={this.props.addX} pushB={this.pushB} />
			</div>
		);
	}
}