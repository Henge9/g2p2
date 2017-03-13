import React from 'react';
import './Dice.css';


export default class Die2 extends React.Component {


	changePos() {
		var obj = this.refs.die2;
		var currentPos2 = 'group1';
	
		if(obj.parentNode.id === 'group1'){
			var group2 = document.querySelector('#group2');
			group2.appendChild(obj);

			currentPos2 = 'group2';
		}

		else if(obj.parentNode.id === 'group2') {
			var group4 = document.querySelector('#group4');
			group4.appendChild(obj);
			
			currentPos2 = 'group4';
		}

		else if(obj.parentNode.id === 'group4') {
			group2 = document.querySelector('#group2');
			group2.appendChild(obj);
			
			currentPos2 = 'group2';
		}

	}

		givePos(event) {
		this.props.getPos(event);
	
	}


	render() {
        
		var numb = this.props.rollDice2[`numberII`];
		
		if(numb === 1) {
			var d2 = { backgroundImage: "url('http://agileboardgame.com/diceimg/One2.png')" };
		}
		else if(numb === 2) {
		 	d2 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Two2.png')" }; 	
		}
		else if(numb === 3) {
		 	d2 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Three2.png')" };
		} 	
		else if(numb === 4) {
			d2 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Four2.png')" };
		}	
		else if(numb === 5) {
			d2 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Five2.png')" };	
		}
		else if(numb === 6) {
			d2 = { backgroundImage: "url('http://agileboardgame.com/diceimg/Six2.png')" };
		}

		return (
			<div ref='die2' className='die2' style={d2} onClick={(e) => {this.changePos(e); this.givePos(e)}}>	
			</div>
		);
	}
}