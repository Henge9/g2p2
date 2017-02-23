import React from 'react';
import './ColumnButtons.css';
//importera tärningar?

export default class ColumnButtons extends React.Component {

  roll(event) {
    this.props.pushB(event);
  }

		
		createX(event){
		this.props.addX(event);
	}


	render() {
		return (
			<div className='column-buttons'>
				<button onClick={(e) => { this.roll(e); this.createX(e)}}>Go!</button>
			</div>
		);
	}
}