import React from 'react';

export default class ReleasePlanCellSprint extends React.Component {

	render(){
		return(
			<div className="release-plan-cell release-plan-cell-sprint-money">{this.props.content}</div>
		);
	}
}