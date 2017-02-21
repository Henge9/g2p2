import React from 'react';
import './Dice.css';


export default class Die1 extends React.Component {

	render() {

		if(!true){
			var stylee = {backgroundImage: 'url(' + './DicePics/Six.png' + ')'};
			// 							   'url(' + imgUrl 			   + ')'
			// var stylee = {background: 'red'};
		}

		return (
			<div className="die1" style={'backgroundImage: `url(${stylee})`'}>
			</div>
		);
	}
}

// backgroundImage: `url(${Background})`