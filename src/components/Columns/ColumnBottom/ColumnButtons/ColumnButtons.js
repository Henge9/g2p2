import React from 'react';
import './ColumnButtons.css';
//importera tärningar?

export default class ColumnButtons extends React.Component {

	RollDice(min, max){
		min = Math.ceil(1);
  		max = Math.floor(7);
  		let number1 = Math.floor(Math.random() * (max - min)) + min;
  		let number2 = Math.floor(Math.random() * (max - min)) + min;
  		let number3 = Math.floor(Math.random() * (max - min)) + min;
  		let number4 = Math.floor(Math.random() * (max - min)) + min;
  		let number5 = Math.floor(Math.random() * (max - min)) + min;
  		let number6 = Math.floor(Math.random() * (max - min)) + min;
  		
  		console.log("tärning 1: " + number1);
  		console.log("tärning 2: " + number2);
  		console.log("tärning 3: " + number3);
  		console.log("tärning 4: " + number4);
  		console.log("tärning 5: " + number5);
  		console.log("tärning 6: " + number6);
  		console.log("---------");

  		return [number1, number2, number3, number4, number5, number6];
		}
		

		
	


		
		
 	


	render() {
		return (
			<div className='column-buttons'>
				
				<button onClick={this.RollDice}>Go!</button>
				
			</div>
		);
	}
}
