import './Navbar.css';
import React from 'react';

export default class About extends React.Component {

    render(){
		return (
		  	<div className="nav-component">
		  		<div className="nav-close" onClick={(e) => {this.props.navClose(e)}}>X</div>
		  		<iframe className="admin" src="http://agileboardgame.com/rest/admin.php"></iframe>
		  	</div>
		);
    }
}