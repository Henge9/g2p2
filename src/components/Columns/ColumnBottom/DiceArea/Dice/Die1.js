import React from 'react';
import './Dice.css';




export default class Die1 extends React.Component {


	// moveDice(event) {
	// 		this.refs.die1.style.marginLeft = 160; 
	// 		console.log("Tärning 1 klickad");

		
	// 		//var d1 = { marginLeft: '160px' };
	// 	}

	onClick() {
		//this.refs.die1.style.marginLeft = '160px'; 
		//this.refs.die1.style.display = 'inlineBlock';
		var obj = this.refs.die1;
		//console.log(obj);
		if(obj.parentNode.id === 'group1'){
			var group2 = document.querySelector('#group2');
			group2.appendChild(obj);
		}
		console.log(obj.parentNode.id)

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
