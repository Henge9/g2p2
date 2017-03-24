import './Navbar.css';
import React from 'react';
import axios from 'axios';

export default class Highscore extends React.Component {

	constructor(){
		super()

		this.state = {
			trigger: true,
		}
	}

	

	// static propTypes = {
 //        myVariable: React.PropTypes.string.isRequired,
 //    };    
 //    static defaultProps = {
 //        myVariable: this.resultData
 //    };

	// componentDidUpdate(){
	// 	alert('fhgjkdfhjk')
	// 	var helpArray = []

	// 	for (var i=0; i<resultData.length; i++){
	// 			helpArray.push(resultData[i])
	// 		}

	// var array = [] 
 //    	for (var i=0; i<this.props.highscoreList.length; i++){
 //    		array.push(this.props.highscoreList[i])
 //    	}

		
	// 	this.setState({highscoreList: helpArray}, function(){
	// 		console.log('hlist: ', this.state.highscoreList)
	// 	})
	// }

    render(){

		return (
		  	<div className="nav-component highscore">
		  		<div className="nav-close" onClick={(e) => {this.props.navClose(e)}}>X</div>
		  		<p>{this.props.resultData}</p>
		  	</div>
		);
    }
}