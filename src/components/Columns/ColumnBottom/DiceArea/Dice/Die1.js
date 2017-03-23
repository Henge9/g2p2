import React from 'react';
import './Dice.css';

export default class Die1 extends React.Component {

	changePosition(){
	}

	changePos() {
		var obj = this.refs.die1;
	
		if(obj.parentNode.id === 'group1'){
			var group2 = document.querySelector('#group2');
			group2.appendChild(obj);
		}

		else if(obj.parentNode.id === 'group2') {
			var group4 = document.querySelector('#group4');
			group4.appendChild(obj);
		}

		else if(obj.parentNode.id === 'group4') {
			group2 = document.querySelector('#group2');
			group2.appendChild(obj);
		}

		
	}

	back(event) {
		var obj = this.refs.die1;
		var group1 = document.querySelector('#group1');
			group1.appendChild(obj);
	}
	

	render() {
		this.props.dice1Position

		var numb = this.props.rollDice1[`numberI`];
		
		if(numb === 1) {
		 	var d1 = { backgroundImage: "url('http://agileboardgame.com/diceimg/One2.png')" };
		}
		else if(numb === 2) {
		 	d1 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Two2.png')" }; 	
		}
		else if(numb === 3) {	
		 	d1 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Three2.png')" };
		} 	
		else if(numb === 4) {
			d1 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Four2.png')" };
		}	
		else if(numb === 5) {	
			d1 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Five2.png')" };	
		}
		else if(numb === 6) {		
			d1 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Six2.png')" };
		}

		return (
			<div ref='die1' className='die1' style={d1} onClick={(e) => {this.props.dice1Positions(e); this.changePos(e)}}></div>  
		);
	}
}