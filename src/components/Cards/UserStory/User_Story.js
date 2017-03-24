import React from 'react';
import './User_Story.css';

export default class UserStory extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			isMoving: false,
			column: 'backlog',
			points: 0
		};
		this.componentDidMount = this.componentDidMount.bind(this);
		this.onClick = this.onClick.bind(this);
		this.moveCard = this.moveCard.bind(this);
	}

	updateCol2Value(sub){
		var v = this.props.updateCol2Value(sub);
		return v;
	}
	updateCol3Value(sub) {
		var v = this.props.updateCol3Value(sub);
		return v;
	}
	updateCol4Value(sub) {
		var v = this.props.updateCol4Value(sub);
		return v;
	}

	moveCard() {
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
	}

	onMouseEnter() {
		this.refs.card.style.boxShadow = '0px 0px 1px 1px rgba(0, 0, 0, 0.7)';
	}

	onMouseLeave() {
		this.refs.card.style.boxShadow = 'none';
	}

	onClick() {

		var updateCol2Value;
		var updateCol3Value;
		var updateCol4Value;

		/* Move card */
		if (parseInt(this.refs.card.style.left, 10) < 550 && this.state.isMoving === false) {

			if (this.state.column === "backlog") {

				updateCol2Value = this.updateCol2Value(0);

				this.moveCard();
				this.setState({
					column: 'analysis',
					points: this.props.analytics
				}, this.route);

				this.refs.analytics.style.color = "#d99bf0";
				this.refs.analytics.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
			}
			else if (this.state.column === "analysis") {
				updateCol2Value = this.updateCol2Value(this.refs.analytics.childElementCount);

				// Remove points from card
				if(this.refs.analytics.childElementCount > 0) {

					// Remove points
					for (var i = 0; i < updateCol2Value; i++) {
						let lastChild = this.refs.analytics.lastChild;
						this.refs.analytics.removeChild(lastChild);
					}
				} else {
					this.moveCard();
					this.setState({
						column: 'development',
						points: this.props.development
					}, this.route);

					this.refs.analytics.style.color = "black";
					this.refs.analytics.style.textShadow = "none";

					this.refs.development.style.color = "#1ab6f1";
					this.refs.development.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
				}
			}
			else if(this.state.column === "development") {

				updateCol3Value = this.updateCol3Value(this.refs.development.childElementCount);

				if(this.refs.development.childElementCount > 0) {

					// Remove points
					for (var i = 0; i < updateCol3Value; i++) {
						let lastChild = this.refs.development.lastChild;
						this.refs.development.removeChild(lastChild);
					}
				} else {
					this.moveCard();
					this.setState({
						column: 'test',
						points: this.props.test
					}, this.route);

					this.refs.development.style.color = "black";
					this.refs.development.style.textShadow = "none";

					this.refs.test.style.color = "#d99bf0";
					this.refs.test.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
				}
			}
			else if(this.state.column === "test") {

				updateCol4Value = this.updateCol4Value(this.refs.test.childElementCount);

				if(this.refs.test.childElementCount > 0) {

					// Remove points
					for (var i = 0; i < updateCol4Value; i++) {
						let lastChild = this.refs.test.lastChild;
						this.refs.test.removeChild(lastChild);
					}
				} else {
					this.moveCard();
					this.setState({
						column: 'done',
						points: null
					}, this.route);

					this.refs.test.style.color = "black";
					this.refs.test.style.textShadow = "none";
				}
			}
		}
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