import './Hold.css';
import React from 'react';
import UserStory from './User_Story.js';

export default class Hold extends React.Component {
    render(){
    	return (
	  	<div className='hold'>
	  		<UserStory number="04" value="150" analytics="4" development="2" test="6" card={this.props.card} />
	  		<UserStory number="03" value="200" analytics="6" development="4" test="5" card={this.props.card} />
	  		<UserStory number="02" value="300" analytics="2" development="6" test="2" card={this.props.card} />
	  		<UserStory number="01" value="250" analytics="3" development="2" test="3" card={this.props.card} />
	  	</div>
    	);
    }
}