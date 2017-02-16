import React from 'react';

export default class ReleasePlanCell extends React.Component {
	
	render() {

		if (this.props.releaseplan){
	 		var checked = "y";
	 	} else {
	 		var checked = " ";
		}

		return(
			<div className="release-plan-cell">{checked}</div>
		);
	}
}