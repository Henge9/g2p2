import './ReleasePlan.css';
import React from 'react';
import ReleasePlanCell from './ReleasePlanCell/ReleasePlanCell.js';
import ReleasePlanCellSprint from './ReleasePlanCell/ReleasePlanCellSprint.js';
import ReleasePlanCellRetrospective from './ReleasePlanCell/ReleasePlanCellRetrospective.js';
import ReleasePlanCellMoney from './ReleasePlanCell/ReleasePlanCellMoney.js';

export default class ReleasePlan extends React.Component {

    render(){
	return (
	  	<div className='release-plan'>
	  		<div className="release-plan-row">
	  			<ReleasePlanCellSprint />
	  			<ReleasePlanCell addX={this.props.addX} releaseplan={this.props.releaseplan}/>
	  			<ReleasePlanCell addX={this.props.addX} releaseplan={this.props.releaseplan} />
	  			<ReleasePlanCell addX={this.props.addX} releaseplan={this.props.releaseplan} />
	  			<ReleasePlanCell addX={this.props.addX} releaseplan={this.props.releaseplan} />
	  			<ReleasePlanCell addX={this.props.addX} releaseplan={this.props.releaseplan} />
	  			<ReleasePlanCellRetrospective />
	  			<ReleasePlanCellMoney />
	  		</div>
	  	</div>
	  );
    }
}