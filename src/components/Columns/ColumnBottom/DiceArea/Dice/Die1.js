import React from 'react';
import './Dice.css';

export default class Die1 extends React.Component {

	changePosition(){
	}

	changePos() {
		var obj = this.refs.die1;
		var currentPos1 = 'group1';
		console.log(obj);
	
		if(obj.parentNode.id === 'group1'){
			var group2 = document.querySelector('#group2');
			group2.appendChild(obj);

			currentPos1 = 'group2';
		}

		else if(obj.parentNode.id === 'group2') {
			var group4 = document.querySelector('#group4');
			group4.appendChild(obj);
			
			currentPos1 = 'group4';
		}

		else if(obj.parentNode.id === 'group4') {
			group2 = document.querySelector('#group2');
			group2.appendChild(obj);
			
			currentPos1 = 'group2';
		}

		console.log("1: " + currentPos1);
		return currentPos1;
	}	

	render() {
		this.props.dice1Position

		var numb = this.props.rollDice1[`numberI`];
		
		if(numb === 1) {
		 	var d1 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/One2.png')" };
		}
		else if(numb === 2) {
		 	d1 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Two2.png')" }; 	
		}
		else if(numb === 3) {	
		 	d1 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Three2.png')" };
		} 	
		else if(numb === 4) {
			d1 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Four2.png')" };
		}	
		else if(numb === 5) {	
			d1 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Five2.png')" };	
		}
		else if(numb === 6) {		
			d1 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Six2.png')" };
		}

		return (
			<div ref='die1' className='die1' style={d1} onClick={(e) => {this.props.dicePositions(e); this.changePos(e)}} >	
			</div>  
		);
	}
}