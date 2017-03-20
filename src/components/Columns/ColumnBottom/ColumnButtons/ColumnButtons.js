import React from 'react';
import './ColumnButtons.css';


export default class ColumnButtons extends React.Component {

  roll(event) {
    this.props.pushB(event);
  }

	render() {
		return (
			<div className='column-buttons'>
				<button onClick={(e) => { this.roll(e); this.props.addX(e); this.props.countBajs(e)}}>GO</button>
			</div>
		);
	}
}