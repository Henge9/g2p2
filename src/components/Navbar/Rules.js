import './Navbar.css';
import React from 'react';
import {rulesHeader, rulesText} from './navbarBackEnd.js';


const Rules = () => {
	return (
	  	<div className="nav-component nav-rules">
	  		<h1>{rulesHeader}</h1>
	  		<div>{rulesText}</div>
	  	</div>
	);
    
}

export default Rules;