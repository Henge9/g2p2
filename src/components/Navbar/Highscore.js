import './Navbar.css';
import React from 'react';
import axios from 'axios';

export default class Highscore extends React.Component {

	// printHighscore(){
	// 	axios.get('http://agileboardgame.com/rest/?/highscore')
	// 	.then(function(result) {
	// 		console.log(result.data)
	// 	})
	// }

    render(){
    	axios.get('http://agileboardgame.com/rest/?/highscore')
		.then(function(result) {
			console.log(result.data)
		})
    	
		return (
		  	<div className="nav-component highscore">
		  		<div className="nav-close" onClick={(e) => {this.props.navClose(e)}}>X</div>
		  		<p>hfjskghjk</p>
		  	</div>
		);
    }
}