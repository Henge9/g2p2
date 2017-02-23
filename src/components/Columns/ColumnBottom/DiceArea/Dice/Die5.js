import React from 'react';
import './Dice.css';


export default class Die5 extends React.Component {
	render() {

		var numb = this.props.rollDice5[`numberV`];

		if(numb === 1) {
			var d5 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/One.png" };
		}
		else if(numb === 2) {
		 	d5 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Two.png')" }; 	
		}
		else if(numb === 3) {
		 	d5 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Three.png')" };
		} 	
		else if(numb === 4) {
			d5 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Four.png')" };
		}	
		else if(numb === 5) {
			d5 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Five.png')" };	
		}
		else if(numb === 6) {
			d5 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Six.png')" };
		}

	
		return (
			<div ref='die5' className='die5' style={d5}>	
			</div>
		);
	}
}