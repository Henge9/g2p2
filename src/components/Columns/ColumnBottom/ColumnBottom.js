import './ColumnBottom.css';
import React from 'react';
import DiceArea from './DiceArea/DiceArea.js';
import ColumnButtons from './ColumnButtons/ColumnButtons.js';

export default class ColumnBottom extends React.Component {

	render() {
		return (
			<div className='column-bottom'>
				<DiceArea />
				<ColumnButtons addX={this.props.addX}/>
			</div>
		);
	}
}