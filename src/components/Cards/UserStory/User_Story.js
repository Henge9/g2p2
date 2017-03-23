import React from 'react';
import './User_Story.css';

export default class UserStory extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			isMoving: false,
			column: 'backlog',
			points: 0,
			analytics: [],
			development: [],
			test: []
		};
		this.componentDidMount = this.componentDidMount.bind(this);
	}

	onMouseEnter() {
		this.refs.card.style.boxShadow = '0px 0px 1px 1px rgba(0, 0, 0, 0.7)';
	}

	onMouseLeave() {
		this.refs.card.style.boxShadow = 'none';
	}

	onClick() {

		// Remove points from card
		if(this.refs.analytics.childElementCount > 0) {
			for (var i = 0; i < this.props.removeAn; i++) {
				this.refs.analytics.removeChild(this.refs.analytics.lastChild);
			}
		}

		/* Move card */
		if (parseInt(this.refs.card.style.left, 10) < 550 && this.state.isMoving === false) {
			this.refs.card.style.left = parseInt(this.refs.card.style.left, 10) + 158 + 'px';
			this.refs.card.style.width = "105px";
			this.refs.card.style.height = "105px";
			
			this.setState({
				isMoving: true
			});

			let that = this;

			setTimeout(function() {
				that.setState({
					isMoving: false,
				});
				that.refs.card.style.width = "100px";
				that.refs.card.style.height = "100px";
			}, 2000);

			switch(this.state.column) {
				case 'backlog':
					this.setState({
						column: 'analysis',
						points: this.props.analytics
					}, this.route);

					this.refs.analytics.style.color = "yellow";
					this.refs.analytics.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
					break;

				case 'analysis':
					this.setState({
						column: 'development',
						points: this.props.development
					}, this.route);

					this.refs.analytics.style.color = "black";
					this.refs.analytics.style.textShadow = "none";

					this.refs.development.style.color = "lightblue";
					this.refs.development.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
					break;

				case 'development':
					this.setState({
						column: 'test',
						points: this.props.test
					}, this.route);

					this.refs.development.style.color = "black";
					this.refs.development.style.textShadow = "none";

					this.refs.test.style.color = "yellow";
					this.refs.test.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
					break;

				case 'test':
					this.setState({
						column: 'done',
						points: null
					}, this.route);

					this.refs.test.style.color = "black";
					this.refs.test.style.textShadow = "none";
					break;

				default:
					this.setState({
						column: 'backlog'
					}, this.route);
			}
		}
		// this.sendCardsColumn()

		const cardsColumn = this.state.column
		this.props.cardsColumn(cardsColumn)
	}

	insertLetters(prop, ref, letter) {
		for (var i = 0; i < prop; i++) {

			// Create new element
			var newElement = document.createElement('p');
			newElement.innerHTML = letter;

			// Insert new element into div
			ref.appendChild(newElement);
		}
	} // Creates one letter for each point

	randomCardPos(card) {
		var randomNumber = Math.random();
		var top = (Math.random() * 10).toString() + 'px';
		var left;

		if (randomNumber > 0.5) {
			left = (randomNumber * 10).toString() + 'px';
		} else {
			left = (randomNumber * -10).toString() + 'px';
		}

		card.style.top = top;
		card.style.left = left;
	} // Randomizes card starting position

	route() {
		this.props.updateCard(this.state.column, this.state.points, this.props.analytics, this.props.development, this.props.test);
	}

	componentDidMount() {

		// Insert points
		this.insertLetters(this.props.analytics, this.refs.analytics, 'A');
		this.insertLetters(this.props.development, this.refs.development, 'D');
		this.insertLetters(this.props.test, this.refs.test, 'T');

		// Randomize card position
		var card = this.refs.card;
		this.randomCardPos(card);
	}

    render(){
	return (
	  	<div ref='card' className='user-story' onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} onClick={this.onClick.bind(this)}>
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