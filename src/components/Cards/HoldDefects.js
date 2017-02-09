import React from 'react';
import Defects from './Defects/Defects.js';

export default class HoldDefects extends React.Component {
	render() {
		return(
			<div className='holdMaint'>
	  			<Defects number="01" value="0" analytics="1" development="6" test="4" />
	  			<Defects number="02" value="0" analytics="3" development="4" test="7" />
	  			<Defects number="03" value="0" analytics="2" development="7" test="5" />
	  			<Defects number="04" value="0" analytics="5" development="8" test="6" />
	  			<Defects number="05" value="0" analytics="7" development="5" test="3" />
	  			<Defects number="06" value="0" analytics="5" development="7" test="3" />
	  			<Defects number="07" value="0" analytics="1" development="6" test="3" />
	  		</div>

		);
	}
}