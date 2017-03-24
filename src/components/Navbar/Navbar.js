import './Navbar.css';
import React from 'react';
import Rules from './Rules.js';
import NewGame from './NewGame.js';
import SaveGame from './SaveGame.js';
import About from './About.js';
import Highscore from './Highscore.js';
import axios from 'axios';

export default class NavBar extends React.Component {

	constructor(){
		super();
		// this.loadHighscore = this.loadHighscore.bind(this)
		this.show = this.show.bind(this);
		this.state = {
			navBar: {
				newGame: false, 
				rules: false, 
				saveGame: false,
				highscore: false,
				highscoreList: '', 
			},
		};
	}

	// loadHighscore(){
	// 	const highscoreList = {...this.state.highscoreList};
	// 	const helpArray = []
		
	// 	axios.get('http://agileboardgame.com/rest/?/highscore')
	// 	.then(function(result) {
	// 	var resultData = (result.data)

	// 	for (var key in resultData){
	// 		helpArray.push(key + resultData[key])
	// 	}
	// 	var newArray = helpArray.join()
	// 	console.log(newArray)

	// 	highscoreList[``] = newArray 
	// 	})
	// 	this.setState({highscoreList})
	// }
	
	show(input){
		const navBar = {...this.state.navBar};
		
		switch (input) {
		  	case "newGame":
		   		if (navBar[`newGame`]) {

		   			navBar[`newGame`] = false;
			   		navBar[`rules`] = false;
			   		navBar[`saveGame`] = false;
			   		navBar[`highscore`] = false;
			   		navBar[`about`] = false;
		   		}else {
			   		navBar[`newGame`] = true;
			   		navBar[`rules`] = false;
			   		navBar[`saveGame`] = false;
			   		navBar[`highscore`] = false;
			   		navBar[`about`] = false;
		   		}
		    	break;

		  	case "rules":
		  		if (navBar[`rules`]) {

		   			navBar[`newGame`] = false;
			   		navBar[`rules`] = false;
			   		navBar[`saveGame`] = false;
			   		navBar[`highscore`] = false;
			   		navBar[`about`] = false;
		   		}else {
			  		navBar[`newGame`] = false;
			   		navBar[`rules`] = true;
			   		navBar[`saveGame`] = false;
			   		navBar[`highscore`] = false;
			   		navBar[`about`] = false;
		   		}
		   		break;

		   	case "saveGame":
		  		if (navBar[`saveGame`]) {

		   			navBar[`newGame`] = false;
			   		navBar[`rules`] = false;
			   		navBar[`saveGame`] = false;
			   		navBar[`highscore`] = false;
			   		navBar[`about`] = false;
		   		}else {
			  		navBar[`newGame`] = false;
			   		navBar[`rules`] = false;
			   		navBar[`saveGame`] = true;
			   		navBar[`highscore`] = false;
			   		navBar[`about`] = false;
		   		}
		   		break;
	
		  	case "highscore":
		  		if (navBar[`highscore`]) {

		   			navBar[`newGame`] = false;
			   		navBar[`rules`] = false;
			   		navBar[`saveGame`] = false;
			   		navBar[`highscore`] = false;
			   		navBar[`about`] = false;
		   		}else {
			  		navBar[`newGame`] = false;
			   		navBar[`rules`] = false;
			   		navBar[`saveGame`] = false;
			   		navBar[`highscore`] = true;
			   		navBar[`about`] = false;
		   		}
		  	
		    	break;
		    case "about":
		    	if (navBar[`about`]) {

		   			navBar[`newGame`] = false;
			   		navBar[`rules`] = false;
			   		navBar[`saveGame`] = false;
			   		navBar[`highscore`] = false;
			   		navBar[`about`] = false;
		   		}else {
			    	navBar[`newGame`] = false;
			   		navBar[`rules`] = false;
			   		navBar[`saveGame`] = false;
			   		navBar[`highscore`] = false;
			   		navBar[`about`] = true;
			   	}
		    	
		    	break;
		  	default:
		  		navBar[`newGame`] = false;
		   		navBar[`rules`] = false;
		   		navBar[`saveGame`] = false;
		   		navBar[`highscore`] = false;
		   		navBar[`about`] = false;	  		
		   		break;
     	}
	
	this.setState({navBar});
	}
	
	render() {

			// var resultData = []
		
			// axios.get('http://agileboardgame.com/rest/?/highscore')
			// .then(function(result) {
			// var resultDataa = result.data
			// for (var key in resultDataa){
			// 	resultData.push(resultDataa[key])
			// }
			// })

		return (
		<div>	
			<nav className='nav'>
				<ul>
					<li><a onClick={(e) => this.show("newGame")}>New game</a></li>
					<li><a onClick={(e) => this.show("rules")}>Rules</a></li>
					<li><a onClick={(e) => this.show("about")}>Admin</a></li>
				</ul>
			</nav>
			{this.state.navBar[`newGame`] ? <NewGame navClose={(e) => this.show("newGame")}/> : null}
			{this.state.navBar[`rules`] ? <Rules navClose={(e) => this.show("rules")} /> : null}
			{this.state.navBar[`about`] ? <About navClose={(e) => this.show("about")} /> : null}
		</div>
		);
	}
}