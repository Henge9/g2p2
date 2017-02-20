import './Navbar.css';
import React from 'react';
import Rules from './Rules.js';
import NewGame from './NewGame.js';
import About from './About.js';
import Highscore from './Highscore.js';

export default class NavBar extends React.Component {

	constructor(){
		super();
		this.show = this.show.bind(this);
		console.log(this);
		//getInitialState
		this.state = {
			navBar: {
				newGame: false, 
				rules: false, 
				highscore: false, 
				about: false
			},
		};
	}

	show(input){
		const navBar = {...this.state.navBar};
		
		switch (input) {
		  	case "newGame":
		   		if (navBar[`newGame`]) {

		   			navBar[`newGame`] = false;
			   		navBar[`rules`] = false;
			   		navBar[`highscore`] = false;
			   		navBar[`about`] = false;
		   		}else {
			   		navBar[`newGame`] = true;
			   		navBar[`rules`] = false;
			   		navBar[`highscore`] = false;
			   		navBar[`about`] = false;
		   		}
		    	break;

		  	case "rules":
		  		if (navBar[`rules`]) {

		   			navBar[`newGame`] = false;
			   		navBar[`rules`] = false;
			   		navBar[`highscore`] = false;
			   		navBar[`about`] = false;
		   		}else {
			  		navBar[`newGame`] = false;
			   		navBar[`rules`] = true;
			   		navBar[`highscore`] = false;
			   		navBar[`about`] = false;
		   		}
		   		break;
	
		  	case "highscore":
		  		if (navBar[`highscore`]) {

		   			navBar[`newGame`] = false;
			   		navBar[`rules`] = false;
			   		navBar[`highscore`] = false;
			   		navBar[`about`] = false;
		   		}else {
			  		navBar[`newGame`] = false;
			   		navBar[`rules`] = false;
			   		navBar[`highscore`] = true;
			   		navBar[`about`] = false;
		   		}
		  	
		    	break;
		    case "about":
		    	if (navBar[`about`]) {

		   			navBar[`newGame`] = false;
			   		navBar[`rules`] = false;
			   		navBar[`highscore`] = false;
			   		navBar[`about`] = false;
		   		}else {
			    	navBar[`newGame`] = false;
			   		navBar[`rules`] = false;
			   		navBar[`highscore`] = false;
			   		navBar[`about`] = true;
			   	}
		    	
		    	break;
		  	default:
		  		navBar[`newGame`] = false;
		   		navBar[`rules`] = false;
		   		navBar[`highscore`] = false;
		   		navBar[`about`] = false;	  		
		   		break;
     	}
	
	 this.setState({navBar});
	}
	
	render() {
		return (
		<div>	
			<nav className='nav'>
				<ul>
					<li><a onClick={(e) => this.show("newGame")}>New game</a></li>
					<li><a onClick={(e) => this.show("rules")}>Rules</a></li>
					<li><a onClick={(e) => this.show("highscore")}>Highscore</a></li>
					<li><a onClick={(e) => this.show("about")}>About</a></li>
				</ul>
			</nav>
			{this.state.navBar[`newGame`] ? <NewGame /> : null}
			{this.state.navBar[`rules`] ? <Rules /> : null}
			{this.state.navBar[`highscore`] ? <Highscore /> : null}
			{this.state.navBar[`about`] ? <About /> : null}

			
		</div>
		);
	}
}