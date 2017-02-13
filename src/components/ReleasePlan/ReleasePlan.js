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
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCellRetrospective />
	  			<ReleasePlanCellMoney />
	  		</div>

	  		<div className="ReleasePlanRow">
	  			<div className="ReleasePlanCell">Sprint 2</div>
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCellRetrospective />
	  			<ReleasePlanCellMoney />
	  		</div>

	  		<div className="ReleasePlanRow">
	  			<div className="ReleasePlanCell">Sprint 3</div>
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCellRetrospective />
	  			<ReleasePlanCellMoney />
	  		</div>

	  		<div className="ReleasePlanRow">
	  			<div className="ReleasePlanCell">Sprint 4</div>
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCellRetrospective />
	  			<ReleasePlanCellMoney />
	  		</div>

	  		<div className="ReleasePlanRow">
	  			<div className="ReleasePlanCell">Sprint 5</div>
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCellRetrospective />
	  			<ReleasePlanCellMoney />
	  		</div>

	  		<div className="ReleasePlanRow">
	  			<div className="ReleasePlanCell">Sprint 6</div>
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCellRetrospective />
	  			<ReleasePlanCellMoney />
	  		</div>

	  		<div className="ReleasePlanRow">
	  			<div className="ReleasePlanCell">Sprint 7</div>
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCell />
	  			<ReleasePlanCellRetrospective />
	  			<ReleasePlanCellMoney />
	  		</div>
	  	</div>
	  );
    }
}