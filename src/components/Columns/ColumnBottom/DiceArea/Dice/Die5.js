import React from 'react';
import './Dice.css';


export default class Die5 extends React.Component {


	changePos() {
		var obj = this.refs.die5;
		var currentPos5 = 'group1';
	
		if(obj.parentNode.id === 'group1'){
			var group2 = document.querySelector('#group2');
			group2.appendChild(obj);

			currentPos5 = 'group2';
		}

		else if(obj.parentNode.id === 'group2') {
			var group3 = document.querySelector('#group3');
			group3.appendChild(obj);

			currentPos5 = 'group3';
		}

		else if(obj.parentNode.id === 'group3') {
			var group4 = document.querySelector('#group4');
			group4.appendChild(obj);

			currentPos5 = 'group4';
		}

		else if(obj.parentNode.id === 'group4') {
			group2 = document.querySelector('#group2');
			group2.appendChild(obj);

			currentPos5 = 'group2';
		}
	}

	givePos(event) {
		this.props.getPos(event);
	}

	render() {

		var numb = this.props.rollDice5[`numberV`];

		if(numb === 1) {
			var d5 = { backgroundImage: "url('http://agileboardgame.com/diceimg/One.png')" };
		}
		else if(numb === 2) {
		 	d5 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Two.png')" };	 	
		}
		else if(numb === 3) {
		 	d5 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Three.png')" }
		} 	
		else if(numb === 4) {
			d5 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Four.png')" };
		}	
		else if(numb === 5) {
			d5 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Five.png')" };	
		}
		else if(numb === 6) {
			d5 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Six.png')" };
		}

	
		return (
			<div ref='die5' className='die5' style={d5} onClick={(e) => {this.changePos(e); this.givePos(e)}}>	
			</div>
		);
	}
}