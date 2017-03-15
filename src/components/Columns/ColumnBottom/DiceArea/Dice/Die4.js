import React from 'react';
import './Dice.css';


export default class Die4 extends React.Component {

	changePos() {
		var obj = this.refs.die4;
	
		if(obj.parentNode.id === 'group1'){
			var group2 = document.querySelector('#group2');
			group2.appendChild(obj);
		}

		else if(obj.parentNode.id === 'group2') {
			var group3 = document.querySelector('#group3');
			group3.appendChild(obj);
		}

		else if(obj.parentNode.id === 'group3') {
			var group4 = document.querySelector('#group4');
			group4.appendChild(obj);
		}

		else if(obj.parentNode.id === 'group4') {
			group2 = document.querySelector('#group2');
			group2.appendChild(obj);
		}
	}


	render() {

		var numb = this.props.rollDice4[`numberIV`];
		
		if(numb === 1) {
			var d4 = { backgroundImage: "url('http://agileboardgame.com/diceimg/One.png')" };
		}
		else if(numb === 2) {
		 	d4 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Two.png')" };	 	
		}
		else if(numb === 3) {
		 	d4 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Three.png')" }
		} 	
		else if(numb === 4) {
			d4 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Four.png')" };
		}	
		else if(numb === 5) {
			d4 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Five.png')" };	
		}
		else if(numb === 6) {
			d4 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Six.png')" };
		}

		return (
			<div ref='die4' className='die4' style={d4} onClick={(e) => {this.props.dice4Positions(e); this.changePos(e)}}>	
			</div>
		);
	}
}