import './Columns.css';
import React from 'react';
import Column from './Column/Column.js';
import ColumnBottom from './ColumnBottom/ColumnBottom.js';

//import DiceArea from 

export default class Columns extends React.Component{
	render() {
		return(
			<article>
				<div className='columns'>
					<Column name='Backlog' />
					<Column name='Analysis' />
					<Column name='Development' />
					<Column name='Testing' />
					<Column name='Done' />
				</div>
				<ColumnBottom addX={this.props.addX} getPoints={this.props.getPoints} sendPoints={this.props.sendPoints} />
			</article>
		);
	}
}