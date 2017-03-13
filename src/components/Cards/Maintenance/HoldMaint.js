import React from 'react';
import axios from 'axios';
import './HoldMaint.css';
import Maintenance from './Maintenance.js';

var card;
var cards = [];

export default class HoldMaint extends React.Component {

	constructor() {
		super();
		this.state = {
			jsx: [],
		}
		this.componentWillMount = this.componentWillMount.bind(this);
	}

	componentWillMount() {
		
		var self2 = this;

		axios.get('http://agileboardgame.com/rest/?/m_cards').then(function(result) {

			let jsx = [];

			// Ajax code
			cards = result.data;

			// Create JSX elements
			for (var i = 0; i < cards.length; i++) {

				card = <Maintenance number={cards[i].number} analytics={cards[i].analytics} development={cards[i].development} test={cards[i].test}/>

				jsx = self2.state.jsx;
				jsx.push(card);

				self2.setState({
					jsx: jsx
				});
			}
		});
	}

	render() {
		return(
			<div className='holdMaint'>
	  			{this.state.jsx}
	  		</div>
		);
	}
}