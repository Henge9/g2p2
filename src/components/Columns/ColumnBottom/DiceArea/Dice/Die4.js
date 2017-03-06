import React from 'react';
import './Dice.css';


export default class Die4 extends React.Component {


	onClick() {
		var obj = this.refs.die4;
	
		if(obj.parentNode.id === 'group1'){
			var group3 = document.querySelector('#group3');
			group3.appendChild(obj);
		}

		else if(obj.parentNode.id === 'group3') {
			var group2 = document.querySelector('#group2');
			group2.appendChild(obj);
		}

		else if(obj.parentNode.id === 'group2') {
			var group4 = document.querySelector('#group4');
			group4.appendChild(obj);
		}

		else if(obj.parentNode.id === 'group4') {
			var group1 = document.querySelector('#group1');
			group1.appendChild(obj);
		}
	}


	render() {

		var numb = this.props.rollDice4[`numberIV`];
		
		if(numb === 1) {
			var d4 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/One.png')" };
		}
		else if(numb === 2) {
		 	d4 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Two.png')" };	
		}
		else if(numb === 3) {
		 	d4 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Three.png')" };
		} 	
		else if(numb === 4) {
			d4 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Four.png')" };
		}	
		else if(numb === 5) {
			d4 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Five.png')" };	
		}
		else if(numb === 6) {
			d4 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Six.png')" };
		}

		return (
			<div ref='die4' className='die4' style={d4} onClick={this.onClick.bind(this)}>	
			</div>
		);
	}
}