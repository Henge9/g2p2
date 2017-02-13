import './HoldMaint.css';
import React from 'react';
import Maintenance from './Maintenance.js';

export default class HoldMaint extends React.Component {
	render() {
		return(
			<div className='holdMaint'>
	  			<Maintenance number="01" value="0" analytics="4" development="7" test="4" />
	  			<Maintenance number="02" value="0" analytics="2" development="5" test="3" />
	  			<Maintenance number="03" value="0" analytics="3" development="8" test="7" />
	  			<Maintenance number="04" value="0" analytics="2" development="5" test="4" />
	  			<Maintenance number="02" value="0" analytics="5" development="2" test="3" />
	  		</div>

		);
	}
}