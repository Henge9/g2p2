import './Column.css';
import React from 'react';

export default class Column extends React.Component {
	render() {
		return (
			<div className='column' id={this.props.name}>
				<h3>{this.props.name}</h3>
				<div className='container'></div>
			</div>
		);
	}
}