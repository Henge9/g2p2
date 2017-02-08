import React from 'react';
import Column from './Column.js';
import ColumnBottom from './ColumnBottom.js';
import ColumnDice from './ColumnDice.js';
//import DiceArea from 

export default class Columns extends React.Component{
	render() {
		return(
			<div>
				<div className='columns'>
					<Column name='Cards'/>
					<Column name='Backlog' />
					<Column name='Analysis' />
					<Column name='Development' />
					<Column name='testing' />
					<Column name='done' />
					<Column name='points' />
				</div>
				<div className='columns-bottom'>
					
					<ColumnBottom />
					<ColumnBottom />
					<ColumnBottom />
					<ColumnBottom />
					<ColumnBottom />
				</div>
			</div>
		);
	}
}