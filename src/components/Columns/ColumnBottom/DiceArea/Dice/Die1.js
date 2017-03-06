import React from 'react';
import './Dice.css';




export default class Die1 extends React.Component {


	// moveDice(event) {
	// 		this.refs.die1.style.marginLeft = 160; 
	// 		console.log("Tärning 1 klickad");

		
	// 		//var d1 = { marginLeft: '160px' };
	// 	}

	onClick() {
		
		var obj = this.refs.die1;
	
		if(obj.parentNode.id === 'group1'){
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


		var numb = this.props.rollDice1[`numberI`];
		
		if(numb === 1) {
		 	var d1 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/One2.png')" };
		}
		else if(numb === 2) {
		 	d1 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Two2.png')" }; 	
		}
		else if(numb === 3) {	
		 	d1 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Three2.png')" };
		} 	
		else if(numb === 4) {
			d1 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Four2.png')" };
		}	
		else if(numb === 5) {	
			d1 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Five2.png')" };	
		}
		else if(numb === 6) {		
			d1 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Six2.png')" };
		}


		return (
			<div ref='die1' className='die1' style={d1} /*onClick={(e) => this.moveDice(e)}*/ onClick={this.onClick.bind(this)} >	

			</div>  
		);
	}
}
