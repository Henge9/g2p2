import React from 'react';
import './ColumnButtons.css';
//importera tärningar

export default class ColumnButtons extends React.Component {
	render() {
		return (
			<div className='column-buttons'>
				
				<button onClick={this.props.onClick}>Go!</button>
				
			</div>
		);
	}
}
// <button ånnklick=this.props.fuynktion>Go!</button>