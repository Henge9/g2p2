import './ReleasePlan.css';
import React from 'react';
import ReleasePlanCell from './ReleasePlanCell/ReleasePlanCell.js';
import ReleasePlanCellSprint from './ReleasePlanCell/ReleasePlanCellSprint.js';
import ReleasePlanCellRetrospective from './ReleasePlanCell/ReleasePlanCellRetrospective.js';
import ReleasePlanCellMoney from './ReleasePlanCell/ReleasePlanCellMoney.js';

export default class ReleasePlan extends React.Component {

    render(){

    	const sprintNumber = this.props.sprintArray[`number`];
    	const dayArray = this.props.dayArray[`number`];

    	if(this.props.releaseplan) {
	    	switch(dayArray) {
	    		case 1:
	    			var checked1 = 'X'
	    			break;

	    		case 2:
	    			checked1 = 'X'
	    			var checked2 = 'X'
	    			break;

	    		case 3:
	    			checked1 = 'X'
	    			checked2 = 'X'
	    			var checked3 = 'X'
	    			break;

	    		case 4:
	    			checked1 = 'X'
	    			checked2 = 'X'
	    			checked3 = 'X'
	    			var checked4 = 'X'
	    			break;

	    		case 5:
	    			checked1 = 'X'
	    			checked2 = 'X'
	    			checked3 = 'X'
	    			checked4 = 'X'
	    			var checked5 = 'X'
	    			break;

	    		default:
	    	}
    	}

		return (
		  	<div className='release-plan'>
		  		<div className="release-plan-row">
		  			<ReleasePlanCellSprint content={sprintNumber} />
		  			<ReleasePlanCell addX={this.props.addX} releaseplan={this.props.releaseplan} content={checked1} />
		  			<ReleasePlanCell addX={this.props.addX} releaseplan={this.props.releaseplan} content={checked2} />
		  			<ReleasePlanCell addX={this.props.addX} releaseplan={this.props.releaseplan} content={checked3} />
		  			<ReleasePlanCell addX={this.props.addX} releaseplan={this.props.releaseplan} content={checked4} />
		  			<ReleasePlanCell addX={this.props.addX} releaseplan={this.props.releaseplan} content={checked5} />
		  			<ReleasePlanCellRetrospective />
		  			<ReleasePlanCellMoney />
		  		</div>
		  	</div>
		  );
    }
}