import React from 'react';
import Column from './Column.js';
import DiceArea from '../DiceArea/DiceArea.js';
import ColumnButtons from './ColumnButtons.js';

//import DiceArea from 

export default class Columns extends React.Component{
	render() {
		return(
			<article>
				<div className='columns'>
					<Column name='Cards'/>
					<Column name='Backlog' />
					<Column name='Analysis' />
					<Column name='Development' />
					<Column name='testing' />
					<Column name='done' />
				</div>
				<div className='columns-bottom'>
					<DiceArea />
 					<ColumnButtons />
				</div>
			</article>
		);
	}
}