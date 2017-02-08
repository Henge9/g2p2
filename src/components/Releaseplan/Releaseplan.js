import React from 'react';
import ReleaseplanTable from './ReleaseplanTable/ReleaseplanTable.js';

export default class ReleasePlan extends React.Component {

    render(){
	return (
	  	<div className='releaseplan'>
	  		<ReleaseplanTable />
	  	</div>
	  );
    }
}