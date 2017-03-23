import './Navbar.css';
import React from 'react';
import axios from 'axios';

export default class Highscore extends React.Component {
	constructor(){
		super()
		this.onChange = this.onChange.bind(this)
		this.sendName = this.sendName.bind(this)
		this.state = {
			inputValue: '',
		}
	}

	onChange(event){
		this.setState({inputValue: event.target.value})
	}

	sendName(){
		var inputValue = this.refs.teamNameInput.value
		console.log(this.state.inputValue)

		// axios.get('http://agileboardgame.com/rest/?/us_cards').then(function(result)

		axios.post('http://agileboardgame.com/rest/?/highscore', {
		    team: 'Fred',
		    score: 'Flintstone'
	    })
	    .then(function (response) {
		    console.log('response: ', response);
	    })
	    .catch(function (error) {
	    	console.log('error: ', error);
	  	});
	}

	sendPoints(){

	}

    render(){
		return (
		  	<div className="nav-component highscore">
		  		<div className="nav-close" onClick={(e) => {this.props.navClose(e)}}>X</div>
		  		<label>Enter teamname:</label>
		  		<input ref='teamNameInput' onChange={this.onChange}/>
		  		<input type="submit" onClick={this.sendName}/>
		  		<label>Total points: ${this.props.earnedTotalSumState}</label>
		  		<p></p>
		  	</div>
		);
    }
}