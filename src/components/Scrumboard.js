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
		this.addX				=	 this.addX.bind(this); //ReleasePlanCell.js - ColumnButton.js
		this.updatePoints		=	 this.updatePoints.bind(this);
		this.cardSum			=	 this.cardSum.bind(this);
		this.cardsColumn		=	 this.cardsColumn.bind(this);
		this.pushB				=	 this.pushB.bind(this);
		this.countDice			=	 this.countDice.bind(this);
		this.removePoints		=	 this.removePoints.bind(this);
		this.dice1Positions		=	 this.dice1Positions.bind(this);
		this.dice2Positions		=	 this.dice2Positions.bind(this);
		this.dice3Positions		=	 this.dice3Positions.bind(this);
		this.dice4Positions		=	 this.dice4Positions.bind(this);
		this.dice5Positions		=	 this.dice5Positions.bind(this);
		this.dice6Positions		=	 this.dice6Positions.bind(this);
		this.clickArrow			= 	 this.clickArrow.bind(this);
		
		this.state = {
			releaseplan: false, //ReleasePlanCell.js - ColumnButton.js
			dayArray: {number: 0}, //Releaseplan.js
			sprintArray: {number: 1}, //Releaseplan.js

			col2Value: 0,
			col3Value: 0, 
			col4Value: 0,

			analytics: 0,
			development: 0,
			test: 0,

			cardsColumnState: {column: 'backlog'},
			finishedCards: {number: 0},
			totalSumState: [],
			earnedTotalSumState: [],

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

			clickedArrow: {click: false},
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
		rollDice2[`numberII`] = number2;
		rollDice3[`numberIII`] = number3;
		rollDice4[`numberIV`] = number4;
		rollDice5[`numberV`] = number5;
		rollDice6[`numberVI`] = number6;

		this.setState({
			rollDice1,
			rollDice2,
			rollDice3,
			rollDice4,
			rollDice5,
			rollDice6
		}, function() {this.countDice()});
	}

	clickArrow(event) {
		var clickedArrow = {...this.state.clickedArrow};

		var dice1Position = {...this.state.dice1Position};
		var dice2Position = {...this.state.dice2Position};
		var dice3Position = {...this.state.dice3Position};
		var dice4Position = {...this.state.dice4Position};
		var dice5Position = {...this.state.dice5Position};
		var dice6Position = {...this.state.dice6Position};

		clickedArrow[`click`] = true;

		//console.log(clickedArrow);
		
		this.setState({clickedArrow});

		if(clickedArrow[`click`] === true && dice1Position[`column`] > 1) {
			dice1Position[`column`] = 1;	
		}	

		if(clickedArrow[`click`] === true && dice2Position[`column`] > 1) {
			dice2Position[`column`] = 1;	
		}	

		if(clickedArrow[`click`] === true && dice3Position[`column`] > 1) {
			dice3Position[`column`] = 1;
		}	

		if(clickedArrow[`click`] === true && dice4Position[`column`] > 1) {
			dice4Position[`column`] = 1;
		}	

		if(clickedArrow[`click`] === true && dice5Position[`column`] > 1) {
			dice5Position[`column`] = 1;
		}	

		if(clickedArrow[`click`] === true && dice6Position[`column`] > 1) {
			dice6Position[`column`] = 1;
		}	

		this.setState({dice1Position});
		this.setState({dice2Position});
		this.setState({dice3Position});
		this.setState({dice4Position});		
		this.setState({dice5Position});
		this.setState({dice6Position});

		clickedArrow[`click`] = false;
		this.setState({clickedArrow});

		//console.log("last", clickedArrow)
	}

	dice1Positions() {
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

	countDice(e) {
		var die1numb = this.state.rollDice1[`numberI`];
		var die2numb = this.state.rollDice2[`numberII`];
		var die3numb = this.state.rollDice3[`numberIII`];
		var die4numb = this.state.rollDice4[`numberIV`];
		var die5numb = this.state.rollDice5[`numberV`];
		var die6numb = this.state.rollDice6[`numberVI`];

		console.log(`${die1numb} ${die2numb} ${die3numb} ${die4numb} ${die5numb} ${die6numb}`);

		var dice1Position = {...this.state.dice1Position};
		var dice2Position = {...this.state.dice2Position};
		var dice3Position = {...this.state.dice3Position};
		var dice4Position = {...this.state.dice4Position};
		var dice5Position = {...this.state.dice5Position};
		var dice6Position = {...this.state.dice6Position};

		var helpNumber2 = 0
		var helpNumber3 = 0
		var helpNumber4 = 0

		switch (dice1Position[`column`]){
			case 2:
        		helpNumber2 += die1numb
        	break;

        	case 4:
        		helpNumber4 += die1numb
        	break;
		}

		switch (dice2Position[`column`]){
			case 2:
        		helpNumber2 += die2numb
        	break;

        	case 4:
        		helpNumber4 += die2numb
        	break;
		}

		switch (dice3Position[`column`]){
			case 2:
        		helpNumber2 += die3numb
        	break;

        	case 3:
        		helpNumber3 += die3numb
        	break;

        	case 4:
        		helpNumber4 += die3numb
        	break;
		}

		switch (dice4Position[`column`]){
			case 2:
        		helpNumber2 += die4numb
        	break;

        	case 3:
        		helpNumber3 += die4numb
        	break;

        	case 4:
        		helpNumber4 += die4numb
        	break;
		}

		switch (dice5Position[`column`]){
			case 2:
        		helpNumber2 += die5numb
        	break;

        	case 3:
        		helpNumber3 += die5numb
        	break;

        	case 4:
        		helpNumber4 += die5numb
        	break;
		}

		switch (dice6Position[`column`]){
			case 2:
        		helpNumber2 += die6numb
        	break;

        	case 3:
        		helpNumber3 += die6numb
        	break;

        	case 4:
        		helpNumber4 += die6numb
        	break;
		}

		this.setState({col2Value: helpNumber2})
		this.setState({col3Value: helpNumber3})
		this.setState({col4Value: helpNumber4})

		console.log('2 e: ', helpNumber2)
		console.log('3 e: ', helpNumber3)
		console.log('4 e: ', helpNumber4)	
	}

	updatePoints(column, points, analytics, development, test) {

		switch(column) {
				case 'analysis':
					this.setState({
						analytics: this.state.analytics + points
					});
					break;

				case 'development':
					this.setState({
						analytics: this.state.analytics - analytics,
						development: this.state.development + points
					});
					break;

				case 'test':
					this.setState({
						development: this.state.development - development,
						test: this.state.test + points
					});
					break;

				default:
					this.setState({
						test: this.state.test - test
					});
			}
	}

	removePoints(e){
		alert('remove')
		this.setState({analytics: this.state.analytics - this.state.col2Value})
		this.setState({development: this.state.development - this.state.col3Value})
		this.setState({test: this.state.test - this.state.col4Value})
	}

	//När det sätts till test ska summan adderas till totala summan
	//I ifen, pusha in i array så då är test-korten samlade i en array

	cardsColumn(cardsColumn){
		// for (var i=0; i<cardSum.length; i++){
		// 	console.log('column?: ', cardSum[i].column)
		// }

		var cardsColumnState = {...this.state.cardsColumnState};
		var finishedCards = {...this.state.finishedCards};
		var totalSumState = {...this.state.totalSumState};
		var earnedTotalSumState = {...this.state.earnedTotalSumState};
		var helpArray = []

		if (cardsColumn === 'test') {
			finishedCards[`number`] += 1
			// cardsColumnState[`column`] = 'development';
			// this.setState({cardsColumnState});
			this.setState({finishedCards})

			for(var i=0; i<finishedCards[`number`]; i++){
				helpArray.push(Number(totalSumState[i]))
			}

			helpArray = helpArray.reduce((total, sum) => { 
			return total + sum
			}, 0)

			earnedTotalSumState = helpArray
			this.setState({earnedTotalSumState})
		}
	}

	//Om den är test, pusha in i state-arrayen. Om cards-column-state är test, pusha in värdena.

	cardSum(cardSum){
		if (this.state.cardsColumnState[`column`] === 'analysis'){
			alert('bas')
		}
		var totalSum = []
		var totalSumState = {...this.state.totalSumState};

		for (var i=0; i<cardSum.length; i++){
			totalSum.push(cardSum[i].value)
		}

		totalSumState = totalSum

		this.setState({totalSumState})
		
		// totalSum = cardSum.reduce((total, sum) => { 
		// 	return total + sum
		// }, 0)

		// console.log('totala värdet: ', cardSum)
			// for (var i=0; i<cardSum.length; i++){
			// 	console.log('column?: ', cardSum[i].column)
			// }

		// var moneyArray = []
		// // moneyArray.push(Number(cards[i].value))
		// moneyArray.push(cardSum)

		// var totalSumState = {...this.state.totalSumState}
		// totalSumState.push(totalSum)
		// this.setState({totalSumState})
	}

	render() {
		return (
			<div className="scrumboard">
				<NavBar />
				<ReleasePlan addX={this.addX} releaseplan={this.state.releaseplan} sprintArray={this.state.sprintArray} dayArray={this.state.dayArray} earnedTotalSumState={this.state.earnedTotalSumState}/>
				<Columns clickArrow={this.clickArrow} removePoints={this.removePoints} addX={this.addX} countDice={this.countDice} pushB={this.pushB} rollDice1={this.state.rollDice1} rollDice2={this.state.rollDice2} rollDice3={this.state.rollDice3} rollDice4={this.state.rollDice4} rollDice5={this.state.rollDice5} rollDice6={this.state.rollDice6} dice1Positions={this.dice1Positions} dice2Positions={this.dice2Positions} dice3Positions={this.dice3Positions} dice4Positions={this.dice4Positions} dice5Positions={this.dice5Positions} dice6Positions={this.dice6Positions} />
				<Hold updatePoints={this.updatePoints} cardSum={this.cardSum} cardsColumn={this.cardsColumn} />
				<HoldMaint updatePoints={this.updatePoints} />
				<HoldDefects updatePoints={this.updatePoints} />
			</div>
		);
	}
}