import React from 'react';
import './Dice.css';




export default class Die1 extends React.Component {

	render() {

        
		console.log("hej " + this.props.rollDice1[`numberI`]);

		var numb = this.props.rollDice1[`numberI`];
		

		if(numb === 1) {
			console.log("ETT");
			//var d1 = { backgroundImage: "url('./DicePics/One2.png')" };
			//var d1 = { backgroundImage: "./DicePics/One2.png" };
			var d1 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/One2.png" };
		}
		else if(numb === 2) {
			console.log("TVÅ");
		 	d1 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Two2.png')" };
		 	
		}
		else if(numb === 3) {
			console.log("TRE");
		 	d1 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Three2.png')" };

		} 	
		else if(numb === 4) {
			console.log("FYRA");
			d1 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Four2.png')" };
		}	
		else if(numb === 5) {
			console.log("FEM");
			d1 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Five2.png')" };
			
		}
		else if(numb === 6) {
			console.log("SEX");
			d1 = { backgroundImage: "url('http://agnetaaxelsson.se/dice/Six2.png')" };
		}

	

		return (
			<div ref='die1' className='die1' style={d1}>	

			</div>
		);
	}
}

