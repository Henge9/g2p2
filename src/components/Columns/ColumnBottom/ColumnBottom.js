import './ColumnBottom.css';
import React from 'react';
import DiceArea from './DiceArea/DiceArea.js';
import ColumnButtons from './ColumnButtons/ColumnButtons.js';

export default class ColumnBottom extends React.Component {

	// constructor() {
	// 	super();
	// 	// this.pushB = this.pushB.bind(this);
	// 	// this.countDice = this.countDice.bind(this)
	// 	// this.dice1Positions = this.dice1Positions.bind(this);
	// 	// this.dice2Positions = this.dice2Positions.bind(this);
	// 	// this.dice3Positions = this.dice3Positions.bind(this);
	// 	// this.dice4Positions = this.dice4Positions.bind(this);
	// 	// this.dice5Positions = this.dice5Positions.bind(this);
	// 	// this.dice6Positions = this.dice6Positions.bind(this);
		
	// 	this.state = {
	// 		// rollDice1: {numberI: 1},
	// 		// rollDice2: {numberII: 2},
	// 		// rollDice3: {numberIII: 3},
	// 		// rollDice4: {numberIV: 4},
	// 		// rollDice5: {numberV: 5},
	// 		// rollDice6: {numberVI: 6},

	// 		// dice1Position: {column: 1},
	// 		// dice2Position: {column: 1},
	// 		// dice3Position: {column: 1},
	// 		// dice4Position: {column: 1},
	// 		// dice5Position: {column: 1},
	// 		// dice6Position: {column: 1},
	// 	};
	// }

	// pushB(){
	// 	var rollDice1 = {...this.state.rollDice1};
	// 	var rollDice2 = {...this.state.rollDice2};  
	// 	var rollDice3 = {...this.state.rollDice3};  
	// 	var rollDice4 = {...this.state.rollDice4};  
	// 	var rollDice5 = {...this.state.rollDice5};  
	// 	var rollDice6 = {...this.state.rollDice6};   

	// 	const min = Math.ceil(1);
 //  		const max = Math.floor(7);
 //  		var number1 = Math.floor(Math.random() * (max - min)) + min;
 //  		var number2 = Math.floor(Math.random() * (max - min)) + min;
 //  		var number3 = Math.floor(Math.random() * (max - min)) + min;
 //  		var number4 = Math.floor(Math.random() * (max - min)) + min;
 //  		var number5 = Math.floor(Math.random() * (max - min)) + min;
 //  		var number6 = Math.floor(Math.random() * (max - min)) + min;

	// 	rollDice1[`numberI`] = number1;
	// 	this.setState({rollDice1});

	// 	rollDice2[`numberII`] = number2;
	// 	this.setState({rollDice2});

	// 	rollDice3[`numberIII`] = number3;
	// 	this.setState({rollDice3});

	// 	rollDice4[`numberIV`] = number4;
	// 	this.setState({rollDice4});

	// 	rollDice5[`numberV`] = number5;
	// 	this.setState({rollDice5});

	// 	rollDice6[`numberVI`] = number6;
	// 	this.setState({rollDice6});
	// }

	// dice1Positions(){
	// 	const dice1Position = {...this.state.dice1Position};
	// 	switch(dice1Position[`column`]) {
 //    		case 1:
 //        		dice1Position[`column`] = 2
 //        	break;
    		
 //    		case 2:
 //        		dice1Position[`column`] = 4
 //        	break;

 //        	case 4:
 //        		dice1Position[`column`] = 2
 //        	break;
	// 	}
	// 	this.setState({dice1Position}, this.countDice);
	// }

	// dice2Positions(){
	// 	const dice2Position = {...this.state.dice2Position};
	// 	switch(dice2Position[`column`]) {
 //    		case 1:
 //        		dice2Position[`column`] = 2
 //        	break;
    		
 //    		case 2:
 //        		dice2Position[`column`] = 4
 //        	break;

 //        	case 4:
 //        		dice2Position[`column`] = 2
 //        	break;
	// 	}
	// 	this.setState({dice2Position}, this.countDice);
	// }

	// dice3Positions(){
	// 	const dice3Position = {...this.state.dice3Position};
	// 	switch(dice3Position[`column`]) {
 //    		case 1:
 //        		dice3Position[`column`] = 2
 //        	break;
    		
 //    		case 2:
 //        		dice3Position[`column`] = 3
 //        	break;

 //        	case 3:
 //        		dice3Position[`column`] = 4
 //        	break;

 //        	case 4:
 //        		dice3Position[`column`] = 2
 //        	break;
	// 	}
	// 	this.setState({dice3Position}, this.countDice);
	// }

	// dice4Positions(){
	// 	const dice4Position = {...this.state.dice4Position};
	// 	switch(dice4Position[`column`]) {
 //    		case 1:
 //        		dice4Position[`column`] = 2
 //        	break;
    		
 //    		case 2:
 //        		dice4Position[`column`] = 3
 //        	break;

 //        	case 3:
 //        		dice4Position[`column`] = 4
 //        	break;

 //        	case 4:
 //        		dice4Position[`column`] = 2
 //        	break;
	// 	}
	// 	this.setState({dice4Position}, this.countDice);
	// }

	// dice5Positions(){
	// 	const dice5Position = {...this.state.dice5Position};
	// 	switch(dice5Position[`column`]) {
 //    		case 1:
 //        		dice5Position[`column`] = 2
 //        	break;
    		
 //    		case 2:
 //        		dice5Position[`column`] = 3
 //        	break;

 //        	case 3:
 //        		dice5Position[`column`] = 4
 //        	break;

 //        	case 4:
 //        		dice5Position[`column`] = 2
 //        	break;
	// 	}
	// 	this.setState({dice5Position}, this.countDice);
	// }

	// dice6Positions(){
	// 	const dice6Position = {...this.state.dice6Position};
	// 	switch(dice6Position[`column`]) {
 //    		case 1:
 //        		dice6Position[`column`] = 2
 //        	break;
    		
 //    		case 2:
 //        		dice6Position[`column`] = 3
 //        	break;

 //        	case 3:
 //        		dice6Position[`column`] = 4
 //        	break;

 //        	case 4:
 //        		dice6Position[`column`] = 2
 //        	break;
	// 	}
	// 	this.setState({dice6Position}, this.countDice);
	// }

	// countDice(e){
	// 	var die1numb = this.state.rollDice1[`numberI`];
	// 	var die2numb = this.state.rollDice2[`numberII`];
	// 	var die3numb = this.state.rollDice3[`numberIII`];
	// 	var die4numb = this.state.rollDice4[`numberIV`];
	// 	var die5numb = this.state.rollDice5[`numberV`];
	// 	var die6numb = this.state.rollDice6[`numberVI`];

	// 	var dice1Position = {...this.state.dice1Position};
	// 	var dice2Position = {...this.state.dice2Position};
	// 	var dice3Position = {...this.state.dice3Position};
	// 	var dice4Position = {...this.state.dice4Position};
	// 	var dice5Position = {...this.state.dice5Position};
	// 	var dice6Position = {...this.state.dice6Position};

	// 	const column2Array = [];
	// 	const column3Array = [];
	// 	const column4Array = [];

	// 	switch (dice1Position[`column`]){
	// 		case 2:
 //        		column2Array.push(die1numb)
 //        	break;

 //        	case 4:
 //        		column4Array.push(die1numb)
 //        	break;
	// 	}

	// 	switch (dice2Position[`column`]){
	// 		case 2:
 //        		column2Array.push(die2numb)
 //        	break;

 //        	case 4:
 //        		column4Array.push(die2numb)
 //        	break;
	// 	}

	// 	switch (dice3Position[`column`]){
	// 		case 2:
 //        		column2Array.push(die3numb)
 //        	break;

 //        	case 3:
 //        		column3Array.push(die3numb)
 //        	break;

 //        	case 4:
 //        		column4Array.push(die3numb)
 //        	break;
	// 	}

	// 	switch (dice4Position[`column`]){
	// 		case 2:
 //        		column2Array.push(die4numb)
 //        	break;

 //        	case 3:
 //        		column3Array.push(die4numb)
 //        	break;

 //        	case 4:
 //        		column4Array.push(die4numb)
 //        	break;
	// 	}

	// 	switch (dice5Position[`column`]){
	// 		case 2:
 //        		column2Array.push(die5numb)
 //        	break;

 //        	case 3:
 //        		column3Array.push(die5numb)
 //        	break;

 //        	case 4:
 //        		column4Array.push(die5numb)
 //        	break;
	// 	}

	// 	switch (dice6Position[`column`]){
	// 		case 2:
 //        		column2Array.push(die6numb)
 //        	break;

 //        	case 3:
 //        		column3Array.push(die6numb)
 //        	break;

 //        	case 4:
 //        		column4Array.push(die6numb)
 //        	break;
	// 	}

	// 	var column2Value = column2Array.reduce((total, sum) => {
	// 		return total + sum
	// 	}, 0)

	// 	var column3Value = column3Array.reduce((total, sum) => {
	// 		return total + sum
	// 	}, 0)

	// 	var column4Value = column4Array.reduce((total, sum) => {
	// 		return total + sum
	// 	}, 0)

	// 	console.log('2 e: ', column2Value)
	// 	console.log('3 e: ', column3Value)
	// 	console.log('4 e: ', column4Value)

	// 	this.props.getPoints(column2Value, column3Value, column4Value)
	// }

	render() {
		return (
			<div className='column-bottom'>
				<DiceArea clickArrow={this.props.clickArrow} countDice={this.props.countDice} pushB={this.props.pushB} rollDice1={this.props.rollDice1} rollDice2={this.props.rollDice2} rollDice3={this.props.rollDice3} rollDice4={this.props.rollDice4} rollDice5={this.props.rollDice5} rollDice6={this.props.rollDice6} dice1Positions={this.props.dice1Positions} dice2Positions={this.props.dice2Positions} dice3Positions={this.props.dice3Positions} dice4Positions={this.props.dice4Positions} dice5Positions={this.props.dice5Positions} dice6Positions={this.props.dice6Positions} />
				<ColumnButtons removePoints={this.props.removePoints} countDice={this.props.countDice} addX={this.props.addX} pushB={this.props.pushB} />
			</div>
		);
	}
}