import React from 'react';
import './Dice.css';


export default class Die3 extends React.Component {


	changePos() {
		var obj = this.refs.die3;
		var currentPos3 = 'group1';
	
		if(obj.parentNode.id === 'group1'){
			var group2 = document.querySelector('#group2');
			group2.appendChild(obj);

			currentPos3 = 'group2';
		}

		else if(obj.parentNode.id === 'group2') {
			var group3 = document.querySelector('#group3');
			group3.appendChild(obj);

			currentPos3 = 'group3';
		}

		else if(obj.parentNode.id === 'group3') {
			var group4 = document.querySelector('#group4');
			group4.appendChild(obj);

			currentPos3 = 'group4';
		}

		else if(obj.parentNode.id === 'group4') {
			group2 = document.querySelector('#group2');
			group2.appendChild(obj);

			currentPos3 = 'group2';
		}
	}

	givePos(event) {
		this.props.getPos(event);
	}

	render() {
        

		var numb = this.props.rollDice3[`numberIII`];
		
		if(numb === 1) {
			var d3 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/One.png')" };
		}
		else if(numb === 2) {
		 	d3 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Two.png')" };	 	
		}
		else if(numb === 3) {
		 	d3 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Three.png')" }
		} 	
		else if(numb === 4) {
			d3 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Four.png')" };
		}	
		else if(numb === 5) {
			d3 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Five.png')" };	
		}
		else if(numb === 6) {
			d3 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Six.png')" };
		}

	
		return (
			<div ref='die3' className='die3' style={d3} onClick={(e) => {this.changePos(e); this.givePos(e)}}>	
			</div>
		);
	}
}