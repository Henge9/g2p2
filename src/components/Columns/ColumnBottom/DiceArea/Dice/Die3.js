import React from 'react';
import './Dice.css';


export default class Die3 extends React.Component {
	render() {
        

		var numb = this.props.rollDice3[`numberIII`];
		
		if(numb === 1) {
			var d3 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/One.png" };
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
			<div ref='die3' className='die3' style={d3}>	
			</div>
		);
	}
}