import React from 'react';
import './Dice.css';


export default class Die3 extends React.Component {


	changePos() {
		var obj = this.refs.die3;
	
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
        

		var numb = this.props.rollDice3[`numberIII`];
		
		if(numb === 1) {
			var d3 = { backgroundImage: "url('http://agileboardgame.com/diceimg/One.png')" };
		}
		else if(numb === 2) {
		 	d3 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Two.png')" };	 	
		}
		else if(numb === 3) {
		 	d3 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Three.png')" }
		} 	
		else if(numb === 4) {
			d3 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Four.png')" };
		}	
		else if(numb === 5) {
			d3 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Five.png')" };	
		}
		else if(numb === 6) {
			d3 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Six.png')" };
		}

	
		return (
			<div ref='die3' className='die3' style={d3} onClick={(e) => {this.props.dice3Positions(e); this.changePos(e)}}>	
			</div>
		);
	}
}