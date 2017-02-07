import React from 'react';
import Column from './Column.js';

export default class Columns extends React.Component{
	render() {
		return(
			<div className='columns'>
				<Column name='Cards'/>
				<Column name='Backlog' />
				<Column name='Analysis' />
				<Column name='Development' />
				<Column name='testing' />
				<Column name='done' />
				<Column name='points' />
			</div>
		);
	}
}