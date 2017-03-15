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
		this.dice1Positions = this.dice1Positions.bind(this);
		this.dice2Positions = this.dice2Positions.bind(this);
		this.dice3Positions = this.dice3Positions.bind(this);
		this.dice4Positions = this.dice4Positions.bind(this);
		this.dice5Positions = this.dice5Positions.bind(this);
		this.dice6Positions = this.dice6Positions.bind(this);

		this.state = {
			dice1Position: {column: 1},
			dice2Position: {column: 1},
			dice3Position: {column: 1},
			dice4Position: {column: 1},
			dice5Position: {column: 1},
			dice6Position: {column: 1}, 
		};
	}

	dice1Positions(){
		const dice1Position = {...this.state.dice1Position};
		switch(dice1Position[`column`]) {
    		case 1:
        		dice1Position[`column`] = 2
        	break;
    		
    		case 2:
        		dice1Position[`column`] = 4
        	break;

        	case 4:
        		dice1Position[`column`] = 2
        	break;
		}
		this.setState({dice1Position});
	}

	dice2Positions(){
		const dice2Position = {...this.state.dice2Position};
		switch(dice2Position[`column`]) {
    		case 1:
        		dice2Position[`column`] = 2
        	break;
    		
    		case 2:
        		dice2Position[`column`] = 4
        	break;

        	case 4:
        		dice2Position[`column`] = 2
        	break;
		}
		this.setState({dice2Position});
	}

	dice3Positions(){
		const dice3Position = {...this.state.dice3Position};
		switch(dice3Position[`column`]) {
    		case 1:
        		dice3Position[`column`] = 2
        	break;
    		
    		case 2:
        		dice3Position[`column`] = 3
        	break;

        	case 3:
        		dice3Position[`column`] = 4
        	break;

        	case 4:
        		dice3Position[`column`] = 2
        	break;
		}
		this.setState({dice3Position});
	}

	dice4Positions(){
		const dice4Position = {...this.state.dice4Position};
		switch(dice4Position[`column`]) {
    		case 1:
        		dice4Position[`column`] = 2
        	break;
    		
    		case 2:
        		dice4Position[`column`] = 3
        	break;

        	case 3:
        		dice4Position[`column`] = 4
        	break;

        	case 4:
        		dice4Position[`column`] = 2
        	break;
		}
		this.setState({dice4Position});
	}

	dice5Positions(){
		const dice5Position = {...this.state.dice5Position};
		switch(dice5Position[`column`]) {
    		case 1:
        		dice5Position[`column`] = 2
        	break;
    		
    		case 2:
        		dice5Position[`column`] = 3
        	break;

        	case 3:
        		dice5Position[`column`] = 4
        	break;

        	case 4:
        		dice5Position[`column`] = 2
        	break;
		}
		this.setState({dice5Position});
	}

	dice6Positions(){
		const dice6Position = {...this.state.dice6Position};
		switch(dice6Position[`column`]) {
    		case 1:
        		dice6Position[`column`] = 2
        	break;
    		
    		case 2:
        		dice6Position[`column`] = 3
        	break;

        	case 3:
        		dice6Position[`column`] = 4
        	break;

        	case 4:
        		dice6Position[`column`] = 2
        	break;
		}
		this.setState({dice6Position});
	}

	render() {

		var die1numb = this.props.rollDice1[`numberI`];
		var die2numb = this.props.rollDice2[`numberII`];
		var die3numb = this.props.rollDice3[`numberIII`];
		var die4numb = this.props.rollDice4[`numberIV`];
		var die5numb = this.props.rollDice5[`numberV`];
		var die6numb = this.props.rollDice6[`numberVI`];

		var dice1Position = {...this.state.dice1Position};
		var dice2Position = {...this.state.dice2Position};
		var dice3Position = {...this.state.dice3Position};
		var dice4Position = {...this.state.dice4Position};
		var dice5Position = {...this.state.dice5Position};
		var dice6Position = {...this.state.dice6Position};

		const column2Array = [];
		const column3Array = [];
		const column4Array = [];

		switch (dice1Position[`column`]){
			case 2:
        		column2Array.push(die1numb)
        	break;

        	case 4:
        		column4Array.push(die1numb)
        	break;
		}

		switch (dice2Position[`column`]){
			case 2:
        		column2Array.push(die2numb)
        	break;

        	case 4:
        		column4Array.push(die2numb)
        	break;
		}

		switch (dice3Position[`column`]){
			case 2:
        		column2Array.push(die3numb)
        	break;

        	case 3:
        		column3Array.push(die3numb)
        	break;

        	case 4:
        		column4Array.push(die3numb)
        	break;
		}

		switch (dice4Position[`column`]){
			case 2:
        		column2Array.push(die4numb)
        	break;

        	case 3:
        		column3Array.push(die4numb)
        	break;

        	case 4:
        		column4Array.push(die4numb)
        	break;
		}

		switch (dice5Position[`column`]){
			case 2:
        		column2Array.push(die5numb)
        	break;

        	case 3:
        		column3Array.push(die5numb)
        	break;

        	case 4:
        		column4Array.push(die5numb)
        	break;
		}

		switch (dice6Position[`column`]){
			case 2:
        		column2Array.push(die6numb)
        	break;

        	case 3:
        		column3Array.push(die6numb)
        	break;

        	case 4:
        		column4Array.push(die6numb)
        	break;
		}

		var column2Value = column2Array.reduce((total, sum) => {
			return total + sum
		}, 0)

		var column3Value = column3Array.reduce((total, sum) => {
			return total + sum
		}, 0)

		var column4Value = column4Array.reduce((total, sum) => {
			return total + sum
		}, 0)

		console.log('2 e: ', column2Value)
		console.log('3 e: ', column3Value)
		console.log('4 e: ', column4Value)

		return (
			<div className='dice-area' >		
				<div className="dice-group" id="group1">
					<Die1 pushB={this.props.pushB} rollDice1={this.props.rollDice1} dice1Positions={this.dice1Positions} />
					<Die3 pushB={this.props.pushB} rollDice3={this.props.rollDice3} dice3Positions={this.dice3Positions} />
					<Die5 pushB={this.props.pushB} rollDice5={this.props.rollDice5} dice5Positions={this.dice5Positions} />
					<Die2 pushB={this.props.pushB} rollDice2={this.props.rollDice2} dice2Positions={this.dice2Positions} />
					<Die4 pushB={this.props.pushB} rollDice4={this.props.rollDice4} dice4Positions={this.dice4Positions} />
					<Die6 pushB={this.props.pushB} rollDice6={this.props.rollDice6} dice6Positions={this.dice6Positions} />
				</div>
				<div className="dice-group2" id="group2" ref="group2"></div>
			 	<div className="dice-group3" id="group3"></div>	
				<div className="dice-group4" id="group4"></div>	
			</div>
		);
	}
}