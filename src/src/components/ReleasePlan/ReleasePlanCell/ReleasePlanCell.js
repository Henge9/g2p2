import React from 'react';

export default class ReleasePlanCell extends React.Component {
	
	render() {
		return(
			<div className="release-plan-cell">{this.props.content}</div>
		);
	}
}