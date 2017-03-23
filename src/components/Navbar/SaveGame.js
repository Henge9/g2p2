import './Navbar.css';
import React from 'react';

export default class Highscore extends React.Component {

    render(){
		return (
		  	<div className="nav-component highscore">
		  		<div className="nav-close" onClick={(e) => {this.props.navClose(e)}}>X</div>
		  		<label>Enter teamname:</label>
		  		<input/>
		  		<input type="submit"/>
		  		<label>Total points: </label>
		  		<p></p>
		  	</div>
		);
    }
}