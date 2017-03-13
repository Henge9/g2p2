import React from 'react';
import axios from 'axios';
import './HoldDefects.css';
import Defects from './Defects.js';

var card;
var cards = [];

export default class HoldDefects extends React.Component {

	constructor() {
		super();
		this.state = {
			jsx: [],
		}
		this.componentWillMount = this.componentWillMount.bind(this);
	}

	componentWillMount() {
		
		var self3 = this;

		axios.get('http://localhost:8080/g2p2/src/ajax/Card_Info.php?card=defect').then(function(result) {

			let jsx = [];

			// Ajax code
			cards = result.data;

			// Create JSX elements
			for (var i = 0; i < cards.length; i++) {

				card = <Defects number={cards[i].number} analytics={cards[i].analytics} development={cards[i].development} test={cards[i].test}/>

				jsx = self3.state.jsx;
				jsx.unshift(card);

				self3.setState({
					jsx: jsx
				});
			}
		});
	}

	render() {
		return(
			<div className='holdDef'>
				{this.state.jsx}
	  		</div>
		);
	}
}