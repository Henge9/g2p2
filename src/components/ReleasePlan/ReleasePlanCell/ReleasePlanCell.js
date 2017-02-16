import React from 'react';

export default class ReleasePlanCell extends React.Component {
	
	render() {
		
		if (this.props.releaseplan){
	 		var checked = "y";
	 	} else {
	 		var checked = " ";
		}

		return(
			<div>
				<p className="ReleasePlanCell">{checked}</p>
			</div>
		);
	}
}