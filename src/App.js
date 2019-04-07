import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
class App extends Component {

  render() {
    console.log()
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
        <br></br>
        <div classname="containerForButtons">
              <button ><img className="twoButtons"src="../ImSafe.png" alt="Safe Button to notify contacts youre safe" onClick={this.myfunction} /></button>
              <button><img className="twoButtons" src="../InDangerButton.png" alt="In Danger Button to notify contacts youre safe" onClick={this.myfunction} /></button>
        </div>
      </div>
    );
  }
}

export default App;
