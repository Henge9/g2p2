import React from 'react';

export default class ReleasePlanCell extends React.Component {
	
	// constructor() {
 //    	super();
 //    	this.addX = this.addX.bind(this);
 //    	this.state = {pressed: false};
	// }

	// addX() {
	// 	this.setState({pressed: true});
	// }

	// const day = {
	// 	checked: 
	// }

	// addX(){
	// 	var checked;
		
	// 	if (this.state.pressed){
	// 		checked = "X";
	// 	} else {
	// 		checked = " ";
	// 	}
	// }

	render() {
		
		if (this.props.releaseplan){
			console.log(this.props.releaseplan);
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