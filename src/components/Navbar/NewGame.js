import './Navbar.css';
import React from 'react';
import axios from 'axios';
//import { ajax } from '../../ajaxFunctions.js';

export default class NewGame extends React.Component {

	constructor(){
	super();
	this.getNewGame = this.getNewGame.bind(this);
	this.state = {newGame:{blaj: 'asdf'}};
	}
	getNewGame() {
		const newGame = {...this.state.newGame}
		console.log(newGame);
		axios.get('http://agileboardgame.com/rest?table=test&column=*').then(function(result) {
			newGame[`blaj`] = result;
			console.log(result);
		});

	 	//newGame[`blaj`] = 'ssdf';
		console.table(newGame[`blaj`]);
	 	this.setState({newGame});
		
	}
	render() {
		return (

		  	<div className="nav-component">
		  		<p>nytt spel {this.state.newGame[`blaj`]}</p>
		  		<button onClick={(e) => this.getNewGame(e)}>Ajaxtest</button>

		  	</div>
		);
 	}
    
}