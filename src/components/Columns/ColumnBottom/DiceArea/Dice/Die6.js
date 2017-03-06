import React from 'react';
import './Dice.css';


export default class Die6 extends React.Component {


	onClick() {
		var obj = this.refs.die6;
	
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

		var numb = this.props.rollDice6[`numberVI`];
		
		if(numb === 1) {
			var d6 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/One.png')" };
		}
		else if(numb === 2) {
		 	d6 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Two.png')" }; 	
		}
		else if(numb === 3) {
		 	d6 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Three.png')" };
		} 	
		else if(numb === 4) {
			d6 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Four.png')" };
		}	
		else if(numb === 5) {
			d6 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Five.png')" };	
		}
		else if(numb === 6) {
			d6 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Six.png')" };
		}


		return (
			<div ref='die6' className='die6' style={d6} onClick={this.onClick.bind(this)}>	
			</div>
		);
	}
}