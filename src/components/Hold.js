import React from 'react';
import UserStory from './Cards/User_Story.js';

var text = 'US01';
var value = '150';

export default class Hold extends React.Component {
    render(){
    	return (
	  	<div>
	  		<UserStory number="01" value="150" analytics="4" development="2" test="6" />
	  		<UserStory number="02" value="200" analytics="6" development="4" test="5" />
	  		<UserStory number="04" value="300" analytics="2" development="6" test="2" />
	  	</div>
    	);
    }
}