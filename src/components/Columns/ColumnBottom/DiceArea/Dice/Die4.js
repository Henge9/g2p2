import React from 'react';
import './Dice.css';


export default class Die4 extends React.Component {
	render() {

		var numb = this.props.rollDice4[`numberIV`];
		
		if(numb === 1) {
			var d4 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/One.png" };
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
			<div ref='die4' className='die4' style={d4}>	
			</div>
		);
	}
}