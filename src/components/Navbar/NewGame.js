import './Navbar.css';
import React from 'react';
import { ajax } from '../../ajaxFunctions.js';

export default class NewGame extends React.Component {

    render(){
		return (
		  	<div className="nav-component">
		  		<p>nytt spel</p>
		  		<button onClick={(e) => ajax('GET', 'http://agileboardgame.com/rest/?column=asd')}>Ajaxtest</button>
		  	</div>
		);
    }
}