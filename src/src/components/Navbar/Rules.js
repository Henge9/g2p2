import './Navbar.css';
import React from 'react';
import {rulesHeader, rulesText} from './navbarBackEnd.js';

export default class Rules extends React.Component {

	render() {
		return (
		  	<div className="nav-component nav-rules">
		  		<div className="nav-close" onClick={(e) => {this.props.navClose(e)}}>X</div>
		  		<h1>{rulesHeader}</h1>
		  		<div>{rulesText}</div>
		  	</div>
		);
 	}
    
}

