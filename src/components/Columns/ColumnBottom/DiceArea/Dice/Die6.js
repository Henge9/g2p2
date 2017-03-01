import React from 'react';
import './Dice.css';


export default class Die6 extends React.Component {


	onClick() {
		this.refs.die6.style.marginLeft = '160px'; 
		this.refs.die6.style.display = 'inlineBlock';
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