import React from 'react';
//NewGame
// const teamName= "Teamname";
// const game="Game";

// Rules

const rulesHeader = "Rules";
const rulesText = <div>
<p>Welcome to the agile board game – rules section. This document 
describes the rules for playing this game, with the goal to learn 
as much as possible about how to work agile in teams and of 
course, to earn as much money as possible. Just as in real life, 
moving the cards on the Scrum board from left to right is the way 
to go. One sprint equals five days. After each sprint all user 
stories that are in done column are released, which means team 
get paid. The user stories are then removed from Done column and 
a new sprint starts.<br />
Each team consists of:<br />
1 Analyst = 1 dice/day<br />
4 developers = 4 dice/day<br />
1 tester = 1 dice/day<br />

Note: <br />
It is allowed to re-assign people between roles, for example 
assign developers to Analyst work, if that is decided when the 
day starts. The Analyst can do Test work and vice versa, but 
neither Test nor Analyst can do development work. <br />
Each team member is one roll of dice for each day. <br />
Team members cannot start work if there is nothing in the 
corresponding column, so the day is wasted for that team member
 if there is nothing to do. <br />
Team members can only work on stories that are in their 
respective column when the day starts. 
Scrum board: <br />

<br /><br />



Types of stories: <br />
Stories are what moves from left to right on the Scrum board. 
There are three types of stories: <br />
User stories (US)<br />
Defects (D)<br />
Maintenance tasks (M)<br />
A = Analysis task<br />
D = Development<br />
T = Testing<br />
$ = the amount of money received at release, if US is completed. 
Defect and Maintenance tasks usually do not include any money. <br />
The team can choose whether or not to spend time on Defects or 
Maintenance tasks in the beginning of each sprint. When the die 
is cast, cross over one point for each number on the die on each 
of the stories. <br />
<br />
Cards:<br />
There are two types of cards; Action cards and multiple choice 
cards. When to draw a card is determined in the Release plan (see 
below). The card is drawn in the beginning of the day and read 
out loud by Scrum Master. <br />
Action cards: <br />
Each action card is tied to a specific time in sprint. The action 
cards all have an impact on the current sprint for a limited 
duration of time. Each card that has an impact on sprint is 
placed over the Scrum board during the impact period. <br />
<br />
Multiple choice cards:<br />
The multiple choice cards provide some additional spice into the 
sprints. Each option has the possibility to provide the team with 
certain consequences, for a limited time. The consequences can 
both have negative and positive impact. Team has to agree on an 
option together.  <br />
<br />

Retrospective:<br />
After each sprint, please do a short retrospective (5 mins) of what can be improved in next sprint. <br />
Release plan:<br />
The release plan keeps track of where the team is in the sprints. It is a checklist where the Scrum Master puts crosses for each day the team has completed, and also to keep track of money earned for each sprint. The Scrum Master of the team is responsible for keeping the Release Plan updated at all times. <br />
In the example Release plan below the game is in the third sprint with second day finished, money earned so far is $1250. Note also the Action Cards (AC1-6) and Multiple Choice cards (MC1-5) are written in the release plan, to keep track of when each card should be put into play. <br />


Getting started: <br />
Elect a Scrum Master in the group and make sure that person has a pen and the release plan in front of him/her. <br />
Arrange the board as specified with the user stories in the correct order. There is no need to put all stories on board, put as many as you can fit.<br /> 
Put all Action cards in one pile and multiple choice cards in another. <br />
Team can choose whether or not to do work on defects or maintenance tasks by putting them in product backlog mixed with user stories. <br />
Start rolling the dice! <br />
Good luck!<br />
</p></div>;
export {rulesHeader, rulesText};