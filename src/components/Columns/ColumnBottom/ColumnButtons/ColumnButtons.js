import React from 'react';
import './ColumnButtons.css';


export default class ColumnButtons extends React.Component {

  // roll(event) {
  //   this.props.pushB(event);
  // }

  constructor(){
  	super()
  	this.toggleGoButton = this.toggleGoButton.bind(this);
  	this.toggleSetButton = this.toggleSetButton.bind(this);
  }

  toggleGoButton(){
  	if(this.refs.goButton.style.display == 'inline-block'){
  		this.refs.goButton.style.display = 'none'
  	} else {
  		this.refs.goButton.style.display = 'inline-block'
  	}	
  }

  toggleSetButton(){
  	if(this.refs.setButton.style.display == 'none'){
  		this.refs.setButton.style.display = 'inline-block'
  	} else {
  		this.refs.setButton.style.display = 'none'
  	}
  }

	render() {
		return (
			<div className='column-buttons'>
				<button ref='goButton' className='go-button' onClick={(e) => {this.props.countBajs(e); this.toggleGoButton(); this.toggleSetButton(); this.props.removePoints(e); this.props.pushB(e); this.props.addX(e)}}>GO</button>
				<button ref='setButton' className='set-button' onClick={(e) => {this.toggleSetButton(); this.toggleGoButton()}}>SET</button>
			</div>
		);
	}
}