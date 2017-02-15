import './ReleasePlan.css';
import React from 'react';
import ReleasePlanCell from './ReleasePlanCell/ReleasePlanCell.js';
import ReleasePlanCellRetrospective from './ReleasePlanCell/ReleasePlanCellRetrospective.js';
import ReleasePlanCellMoney from './ReleasePlanCell/ReleasePlanCellMoney.js';

function daysPassed() {
	
}

export default class ReleasePlan extends React.Component {

    render(){
	return (
	  	<div className='ReleasePlan'>
	  		<div className="ReleasePlanRow ReleasePlanRowTop">
	  			<p>Releaseplan</p>
	  		</div>
	  		
	  		<div className="ReleasePlanRow ReleasePlanRowHeadings">
	  			<div className="ReleasePlanCell"></div>
	  			<div className="ReleasePlanCell">Day 1</div>
	  			<div className="ReleasePlanCell">Day 2</div>
	  			<div className="ReleasePlanCell">Day 3</div>
	  			<div className="ReleasePlanCell">Day 4</div>
	  			<div className="ReleasePlanCell">Day 5</div>
	  			<div className="ReleasePlanCell">Retrospective</div>
	  			<div className="ReleasePlanCell">Money earned</div>
	  		</div>
	  		
	  		<div className="ReleasePlanRow">
	  			<div className="ReleasePlanCell">Sprint 1</div>
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