import './Navbar.css';
import React from 'react';
import Rules from './Rules.js';
import NewGame from './NewGame.js';
import About from './About.js';

export default class NavBar extends React.Component {

	constructor(){
		super();
		this.show = this.show.bind(this);
		console.log(this);
		//getInitialState
		this.state = {
			newGame: false,
			rules: false,
			highscore: false,
			about: false,
		};
	}
	show(input){
		const newGame = {...this.state.newGame};
		const rules = {...this.state.rules};
		const highscore = {...this.state.highscore};
		

		switch (input) {
		  	case "newGame":
		   		console.log("asdf");
		    	break;

		  	case "rules":
		  		console.log("rules");
		   		break;
	
		  	case "highscore":
		  		console.log("highscore");
		  			this.State = {
					newGame: false,
					rules: false,
					highscore: true,
					about: true,
				};
		    	break;
		    case "about":
		    	if (this.state.about.value){
		    		this.State = {
						newGame: false,
						rules: false,
						highscore: false,
						about: false,
					};
		    		console.log("if");
		    	} else {
		  			this.setState = {
						newGame: false,
						rules: false,
						highscore: false,
						about: true,
					};
		  			console.log("else");
		  		}
				//this.setState({about});
				console.log(this.state.about);
		    	break;
		  	default:
		  		console.log("default");
		  		this.setState = {
					newGame: false,
					rules: false,
					highscore: false,
					about: false,
				};
		   		break;
}
		
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
			{this.state.newGame ? <NewGame /> : null}
			{this.state.rules ? <Rules /> : null}
			{this.state.newGame ? <NewGame /> : null}
			{this.state.about ? <About /> : null}

			
		</div>
		);
	}
}