import './ReleasePlan.css';
import React from 'react';
import ReleasePlanCell from './ReleasePlanCell/ReleasePlanCell.js';
import ReleasePlanCellSprint from './ReleasePlanCell/ReleasePlanCellSprint.js';
import ReleasePlanCellRetrospective from './ReleasePlanCell/ReleasePlanCellRetrospective.js';
import ReleasePlanCellMoney from './ReleasePlanCell/ReleasePlanCellMoney.js';

export default class ReleasePlan extends React.Component {

	// constructor(){
	// 	super();
	// 	this.checked5 = this.checked5.bind(this)
	// }

    render(){

    	const sprintNumber = "Sprint " + this.props.sprintArray[`number`];
    	const dayArray = this.props.dayArray[`number`];
    	var checked1 = 'MON'
    	var checked2 = 'TUE'
    	var checked3 = 'WED'
    	var checked4 = 'THU'
    	var checked5 = 'FRI'

    	if(this.props.releaseplan) {
	    	switch(dayArray) {
	    		case 1:
	    			checked1 = '✓'
	    			break;

	    		case 2:
	    			checked1 = '✓'
	    			checked2 = '✓'
	    			break;

	    		case 3:
	    			checked1 = '✓'
	    			checked2 = '✓'
	    			checked3 = '✓'
	    			break;

	    		case 4:
	    			checked1 = '✓'
	    			checked2 = '✓'
	    			checked3 = '✓'
	    			checked4 = '✓'
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
		  			<ReleasePlanCellMoney earnedTotalSumState={this.props.earnedTotalSumState} />
		  		</div>
		  	</div>
		  );
    }
}