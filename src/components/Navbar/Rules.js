import './Navbar.css';
import React from 'react';
import asdf from'./HengesTestBum.js';

export default class Rules extends React.Component {

	constructor(){
		super();
		this.State = {
			rules: {}
		};

	}

    render(){
		return (
		  	<div className="nav-component">
		  		<h1>{console.log(asdf[`rules`])}</h1>
		  		<p>rules</p>
		  	</div>
		);
    }
}
