import './Columns.css';
import React from 'react';
import Column from './Column/Column.js';
import ColumnBottom from './ColumnBottom/ColumnBottom.js'; 

export default class Columns extends React.Component{

	render() {
		return(
			<article>
				<div className='columns'>
					<Column name='Backlog' />
					<Column name='Analysis' />
					<Column name='Development' />
					<Column name='Testing' />
					<Column name='Done' />
				</div>
				<ColumnBottom clickArrow={this.props.clickArrow} removePoints={this.props.removePoints} addX={this.props.addX} countDice={this.props.countDice} pushB={this.props.pushB} rollDice1={this.props.rollDice1} rollDice2={this.props.rollDice2} rollDice3={this.props.rollDice3} rollDice4={this.props.rollDice4} rollDice5={this.props.rollDice5} rollDice6={this.props.rollDice6} dice1Positions={this.props.dice1Positions} dice2Positions={this.props.dice2Positions} dice3Positions={this.props.dice3Positions} dice4Positions={this.props.dice4Positions} dice5Positions={this.props.dice5Positions} dice6Positions={this.props.dice6Positions} />
			</article>
		);
	}
}