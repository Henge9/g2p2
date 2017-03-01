import './Navbar.css';
import React from 'react';
import {teamName, game} from './navbarBackEnd.js';

export default class NewGame extends React.Component {

	render() {
		return (
		  	<div className="nav-component nav-rules">
		  		<div className="nav-close" onClick={(e) => {this.props.navClose(e)}}>X</div>
		  		<h1>{teamName}</h1>
		  		<div> <p>Do you want to create a new game? Your current game will be lost.</p></div>
		  		<button className="yes">Yes</button>
		  		<button className="no" onClick={(e) => {this.props.navClose(e)}}>No</button>
		  	</div>
		);
 	}
    
}