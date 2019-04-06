import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu></Menu>
        <div>
          <p>SERVERE WEATHER CONDITION:</p>
          <h1>TORNADO</h1>
        </div>
      </div>
    );
  }
}

export default App;
