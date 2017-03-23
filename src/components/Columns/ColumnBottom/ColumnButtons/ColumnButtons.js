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
  	// this.hej = this.hej.bind(this);
  }

  toggleSetButton(){
  	if(this.refs.setButton.style.display == 'none'){
  		this.refs.setButton.style.display = 'inline-block'
  	} else {
  		this.refs.setButton.style.display = 'none'
  	}
  }

  toggleGoButton(){
  	if(this.refs.goButton.style.display == 'inline-block'){
  		this.refs.goButton.style.display = 'none'
  	} else {
  		this.refs.goButton.style.display = 'inline-block'
  	}	
  }

	render() {
		return (
			<div className='column-buttons'>
				<button ref='setButton' className='set-button' onClick={(e) => {this.toggleSetButton(); this.props.pushB(e); this.toggleGoButton()}}>SET</button>
				<button ref='goButton' className='go-button' onClick={(e) => {this.fakeClick(); this.toggleGoButton(); this.toggleSetButton(); this.props.countBajs(e); this.props.addX(e)}}>GO</button>
			</div>
		);
	}
}