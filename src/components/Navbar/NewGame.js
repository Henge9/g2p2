import './Navbar.css';
import React from 'react';
import { ajax } from '../../ajaxFunctions.js';


var response = '"' + ajax('GET', 'http://agileboardgame.com/rest/?table=test&column=*') + '"';
alert(response);
export default class NewGame extends React.Component {

	render() {
		return (

		  	<div className="nav-component">
		  		<p>nytt spel {response}</p>
		  		<button onClick={(e) => ajax('GET', 'http://agileboardgame.com/rest/?table=test&column=*')}>Ajaxtest</button>

		  	</div>
		);
 	}
    
}