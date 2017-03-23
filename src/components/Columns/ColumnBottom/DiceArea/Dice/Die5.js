import React from 'react';
import './Dice.css';


export default class Die5 extends React.Component {


	changePos() {
		var obj = this.refs.die5;
	
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

	back(event) {
		var obj = this.refs.die5;
		var group1 = document.querySelector('#group1');
			group1.appendChild(obj);
	}

	

	render() {

		var numb = this.props.rollDice5[`numberV`];

		if(numb === 1) {
			var d5 = { backgroundImage: "url('http://agileboardgame.com/diceimg/OneGg.png')" };
		}
		else if(numb === 2) {
		 	d5 = { backgroundImage: "url('http://agileboardgame.com/diceimg/TwoGg.png')" };	 	
		}
		else if(numb === 3) {
		 	d5 = { backgroundImage: "url('http://agileboardgame.com/diceimg/ThreeGg.png')" }
		} 	
		else if(numb === 4) {
			d5 = { backgroundImage: "url('http://agileboardgame.com/diceimg/FourGg.png')" };
		}	
		else if(numb === 5) {
			d5 = { backgroundImage: "url('http://agileboardgame.com/diceimg/FiveGg.png')" };	
		}
		else if(numb === 6) {
			d5 = { backgroundImage: "url('http://agileboardgame.com/diceimg/SixGg.png')" };
		}

	
		return (
			<div ref='die5' className='die5' style={d5} onClick={(e) => {this.props.dice5Positions(e); this.changePos(e)}}>	
			</div>
		);
	}
}