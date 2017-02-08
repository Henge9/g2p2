import React from 'react';
import ReleaseplanTableCell from './ReleaseplanCell/ReleaseplanCell.js';

export default class ReleaseplanTableRow extends React.Component {
	render() {
		return (
			<div className='releaseplan_table_row'>
				<ReleaseplanTableCell />
				<ReleaseplanTableCell />
				<ReleaseplanTableCell />
				<ReleaseplanTableCell />
				<ReleaseplanTableCell />
				<ReleaseplanTableCell />
				<ReleaseplanTableCell />
				<ReleaseplanTableCell />
			</div>
		);
	}
}