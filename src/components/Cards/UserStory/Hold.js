import './Hold.css';
import React from 'react';
import UserStory from './User_Story.js';

export default class Hold extends React.Component {
    render(){
    	return (
	  	<div className='hold'>
	  		<UserStory number="04" value="150" />
	  		<UserStory number="03" value="200" />
	  		<UserStory number="02" value="300" />
	  		<UserStory number="01" value="250" />
	  	</div>
    	);
    }
}