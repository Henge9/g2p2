import React from 'react';

export default class UserStory extends React.Component {
	componentDidMount() {
		for (var i = 0; i < this.props.analytics; i++) {

			// Create new element
			var newElement = document.createElement('p');

			newElement.innerHTML = 'A';

			// Insert new element into div
			this.refs.analytics.appendChild(newElement);
		}
		for (var i = 0; i < this.props.development; i++) {

			// Create new element
			var newElement = document.createElement('p');

			newElement.innerHTML = 'D';

			// Insert new element into div
			this.refs.development.appendChild(newElement);
		}
		for (var i = 0; i < this.props.test; i++) {

			// Create new element
			var newElement = document.createElement('p');

			newElement.innerHTML = 'T';

			// Insert new element into div
			this.refs.test.appendChild(newElement);
		}
	}
    render(){
	return (
	  	<div className='user-story'>
	  		<p className='header'>US{this.props.number}</p><p className='value'>${this.props.value}</p>
	  		<div className='points'>
	  			<div ref='analytics'></div>
	  			<div ref='development'></div>
	  			<div ref='test'></div>
	  		</div>
	  	</div>
	  );
    }
}