import './ColumnBottom.css';
import React from 'react';
import DiceArea from './DiceArea/DiceArea.js';
import ColumnButtons from './ColumnButtons/ColumnButtons.js';

export default class ColumnBottom extends React.Component {
	
	createX(event){
		this.props.addX(event);
	}

	render() {
		return (
			<div className='column-bottom'>
				<DiceArea />
				<ColumnButtons addX={this.props.addX}/>
			</div>
		);
	}
}