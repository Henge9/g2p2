import './Navbar.css';
import React from 'react';
import axios from 'axios';
//import { ajax } from '../../ajaxFunctions.js';

export default class NewGame extends React.Component {

	
	render() {
		return (
		  	<div className="nav-component">
		  		<div className="nav-close" onClick={(e) => {this.props.navClose(e)}}>X</div>
		  		<p>You will lose the current game if you start a new game.</p>
		  		<button onClick={(e) => location.reload()}>Start new game</button>
		  	</div>
		);
 	}
    
}