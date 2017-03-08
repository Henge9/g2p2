import React from 'react';
import axios from 'axios';
import './Hold.css';
import UserStory from './User_Story.js';

var card;
var cards = [];

export default class Hold extends React.Component {

	constructor() {
		super();
		this.state = {
			jsx: [],
		}
		this.componentWillMount = this.componentWillMount.bind(this);
	}

	componentWillMount() {
		
		self = this;

		axios.get('http://localhost:8080/g2p2/src/ajax/Card_Info.php').then(function(result) {

			let jsx = [];

			// Ajax code
			cards = result.data;

			// Create JSX elements
			for (var i = 0; i < cards.length; i++) {

				card = <UserStory number={cards[i].number} value={cards[i].value} analytics={cards[i].analytics} development={cards[i].development} test={cards[i].test}/>

				jsx = self.state.jsx;
				jsx.push(card);

				self.setState({
					jsx: jsx
				});
			}
		});
	}

    render() {
    	return (
    	<div className='hold'>
    		{this.state.jsx}
    	</div>
    	);
    }
}