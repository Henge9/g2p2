import React from 'react';
import './ColumnButtons.css';


export default class ColumnButtons extends React.Component {

  roll(event) {
    this.props.pushB(event);
  }

		
	// createX(event){
	// 	this.props.addX(event);
	// }


	render() {
		return (
			<div className='column-buttons'>
				<button onClick={(e) => { this.roll(e); this.props.addX(e)}}>Go!</button>
			</div>
		);
	}
}