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
            <button className="button">
              <img className="SOSButton" src="../SOSButton.png" alt="SOS Button to call emergency services" onClick={this.myfunction} />
            </button>
        </div>
      </div>
    );
  }
}

export default App;
