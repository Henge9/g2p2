import React from 'react';
import Column from './Column.js';
import DiceArea from '../DiceArea/DiceArea.js';
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
					<DiceArea />
 					<ColumnDice />
				</div>
			</div>
		);
	}
}