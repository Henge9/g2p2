import './Navbar.css';
import React from 'react';

export default class NavBar extends React.Component {
	render() {
		return (
		<nav className='nav'>
			<ul>
				<li><a href='#'>Releaseplan</a></li>
				<li><a href='#'>New game</a></li>
				<li><a href='#'>Rules</a></li>
				<li><a href='#'>Highscore</a></li>
				<li><a href='#'>About</a></li>
			</ul>
		</nav>
		);
	}
}