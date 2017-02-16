import React from 'react';

export default class ReleasePlanCell extends React.Component {
	
	render() {

		if (this.props.releaseplan){
	 		var checked = "y";
	 	} else {
	 		var checked = " ";
		}

		var dayArray = this.props.dayArray; 
		console.log(dayArray);

		return(
			<div className="release-plan-cell">{checked}</div>
		);
	}
}