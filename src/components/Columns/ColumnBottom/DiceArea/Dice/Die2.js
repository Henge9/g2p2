import React from 'react';
import './Dice.css';


export default class Die2 extends React.Component {


	onClick() {
		var obj = this.refs.die2;
	
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
        
		var numb = this.props.rollDice2[`numberII`];
		
		if(numb === 1) {
			var d2 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/One2.png')" };
		}
		else if(numb === 2) {
		 	d2 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Two2.png')" }; 	
		}
		else if(numb === 3) {
		 	d2 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Three2.png')" };
		} 	
		else if(numb === 4) {
			d2 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Four2.png')" };
		}	
		else if(numb === 5) {
			d2 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Five2.png')" };	
		}
		else if(numb === 6) {
			d2 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Six2.png')" };
		}

		return (
			<div ref='die2' className='die2' style={d2} onClick={this.onClick.bind(this)}>	
			</div>
		);
	}
}