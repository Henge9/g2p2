import React, { Component } from 'react';
import './App.css';
import ScrumBoard from './components/Scrumboard.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <ScrumBoard />
      </div>
    );
  }
}

export default App;
