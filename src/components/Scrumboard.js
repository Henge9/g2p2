import './Scrumboard.css';
import React from 'react';
import NavBar from './Navbar/Navbar.js';
import Hold from './Cards/UserStory/Hold.js';
import HoldMaint from './Cards/Maintenance/HoldMaint.js';
import HoldDefects from './Cards/Defects/HoldDefects.js';
import ReleasePlan from './ReleasePlan/ReleasePlan.js';
import Columns from './Columns/Columns.js';

export default class ScrumBoard extends React.Component {
	
	constructor(){
		super();
		this.addX = this.addX.bind(this); //ReleasePlanCell.js - ColumnButton.js
		this.pushB = this.pushB.bind(this);
		this.countBajs = this.countBajs.bind(this)
		this.dice1Positions = this.dice1Positions.bind(this);
		this.dice2Positions = this.dice2Positions.bind(this);
		this.dice3Positions = this.dice3Positions.bind(this);
		this.dice4Positions = this.dice4Positions.bind(this);
		this.dice5Positions = this.dice5Positions.bind(this);
		this.dice6Positions = this.dice6Positions.bind(this);
		
		//getInitialState
		this.state = {
			releaseplan: false, //ReleasePlanCell.js - ColumnButton.js
			dayArray: {number: 0}, //Releaseplan.js
			sprintArray: {number: 1}, //Releaseplan.js
			col2Value: 0,
			col3Value: 0, 
			col4Value: 0,

			rollDice1: {numberI: 1},
			rollDice2: {numberII: 2},
			rollDice3: {numberIII: 3},
			rollDice4: {numberIV: 4},
			rollDice5: {numberV: 5},
			rollDice6: {numberVI: 6},

			dice1Position: {column: 1},
			dice2Position: {column: 1},
			dice3Position: {column: 1},
			dice4Position: {column: 1},
			dice5Position: {column: 1},
			dice6Position: {column: 1},
		};
	}

	//ReleasePlanCell.js - ColumnButton.js
	addX(e){
		const releaseplan = {...this.state.releaseplan};
		let sprintArray = {...this.state.sprintArray};
		let dayArray = {...this.state.dayArray};
		
		releaseplan[``] = true;
		dayArray[`number`] += 1;

		if (dayArray[`number`] === 6) {
			dayArray[`number`] = 1;
			sprintArray[`number`] += 1;
		}
		
		this.setState({releaseplan});
		this.setState({sprintArray});
		this.setState({dayArray});
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
		this.setState({dice1Position}, this.countBajs);
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
		this.setState({dice2Position}, this.countBajs);
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
		this.setState({dice3Position}, this.countBajs);
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
		this.setState({dice4Position}, this.countBajs);
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
		this.setState({dice5Position}, this.countBajs);
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
		this.setState({dice6Position}, this.countBajs);
	}

	countBajs(e){
		var die1numb = this.state.rollDice1[`numberI`];
		var die2numb = this.state.rollDice2[`numberII`];
		var die3numb = this.state.rollDice3[`numberIII`];
		var die4numb = this.state.rollDice4[`numberIV`];
		var die5numb = this.state.rollDice5[`numberV`];
		var die6numb = this.state.rollDice6[`numberVI`];

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
	}

	render() {
		return (
			<div className="scrumboard">
				<NavBar />
				<ReleasePlan addX={this.addX} releaseplan={this.state.releaseplan} sprintArray={this.state.sprintArray} dayArray={this.state.dayArray}/>
				<Columns addX={this.addX} countBajs={this.countBajs} pushB={this.pushB} rollDice1={this.state.rollDice1} rollDice2={this.state.rollDice2} rollDice3={this.state.rollDice3} rollDice4={this.state.rollDice4} rollDice5={this.state.rollDice5} rollDice6={this.state.rollDice6} dice1Positions={this.dice1Positions} dice2Positions={this.dice2Positions} dice3Positions={this.dice3Positions} dice4Positions={this.dice4Positions} dice5Positions={this.dice5Positions} dice6Positions={this.dice6Positions}/>
				<Hold />
				<HoldMaint />
				<HoldDefects />
			</div>
		);
	}
}