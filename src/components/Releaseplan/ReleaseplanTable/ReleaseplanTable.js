import React from 'react';
import ReleaseplanTableRow from './ReleaseplanRow/ReleaseplanRow.js';

export default class ReleaseplanTable extends React.Component {
	render() {
		return (
			<div className='releaseplan_table'>
				<ReleaseplanTableRow />
				<ReleaseplanTableRow />
				<ReleaseplanTableRow /> 
			</div>
		);
	}
}