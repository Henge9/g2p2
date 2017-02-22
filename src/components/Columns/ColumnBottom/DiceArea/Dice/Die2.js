import React from 'react';
import './Dice.css';


export default class Die2 extends React.Component {
	render() {
        
		console.log("hej2 " + this.props.rollDice2[`numberII`]);

		var numb = this.props.rollDice2[`numberII`];
		

		if(numb === 1) {
			console.log("ETT");
			var d2 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/One2.png" };
		}
		else if(numb === 2) {
			console.log("TVÅ");
		 	d2 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Two2.png')" };
		 	
		}
		else if(numb === 3) {
			console.log("TRE");
		 	d2 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Three2.png')" };

		} 	
		else if(numb === 4) {
			console.log("FYRA");
			d2 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Four2.png')" };
		}	
		else if(numb === 5) {
			console.log("FEM");
			d2 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Five2.png')" };
			
		}
		else if(numb === 6) {
			console.log("SEX");
			d2 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Six2.png')" };
		}

	

		return (
			<div ref='die2' className='die2' style={d2}>	
			</div>
		);
	}
}