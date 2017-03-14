import React from 'react';
import './Dice.css';


export default class Die6 extends React.Component {


	changePos() {
		var obj = this.refs.die6;
		var currentPos6 = 'group1';
	
		if(obj.parentNode.id === 'group1'){
			var group2 = document.querySelector('#group2');
			group2.appendChild(obj);

			currentPos6 = 'group2';
		}

		else if(obj.parentNode.id === 'group2') {
			var group3 = document.querySelector('#group3');
			group3.appendChild(obj);

			currentPos6 = 'group3';
		}

		else if(obj.parentNode.id === 'group3') {
			var group4 = document.querySelector('#group4');
			group4.appendChild(obj);

			currentPos6 = 'group4';
		}

		else if(obj.parentNode.id === 'group4') {
			group2 = document.querySelector('#group2');
			group2.appendChild(obj);

			currentPos6 = 'group2';
		}
	}

	// givePos(event) {
	// 	this.props.getPos(event);
	// }

	render() {

		var numb = this.props.rollDice6[`numberVI`];
		
		if(numb === 1) {
			var d6 = { backgroundImage: "url('http://agileboardgame.com/diceimg/One.png')" };
		}
		else if(numb === 2) {
		 	d6 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Two.png')" };	 	
		}
		else if(numb === 3) {
		 	d6 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Three.png')" }
		} 	
		else if(numb === 4) {
			d6 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Four.png')" };
		}	
		else if(numb === 5) {
			d6 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Five.png')" };	
		}
		else if(numb === 6) {
			d6 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Six.png')" };
		}

		return (
			<div ref='die6' className='die6' style={d6} onClick={(e) => {this.props.dice6Positions(e); this.changePos(e); this.givePos(e)}}>	
			</div>
		);
	}
}