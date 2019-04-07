import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import Dialog from './Dialog'
import TwoButtons from './TwoButtons'
import TornadoChecklist from './TornadoChecklist'

class App extends Component {

  render() {
    console.log()
    return (
      <div className="App">
        <Menu></Menu>
        <div>
          <p>SERVERE WEATHER CONDITION:</p>
          <h1 style={{marginTop:'10px'}}>TORNADO</h1>
          <p>Denton, TX 76205</p>
          <Dialog></Dialog>
        </div>
        <br></br>
        <TwoButtons></TwoButtons>
        <br></br>
        <div className="container">
          <h3>Safety Checklist:</h3>
          <TornadoChecklist></TornadoChecklist>
          <h3>Current Radar:</h3>
          <img src="../badWeather.png" alt="current radar of weather"/>
        </div>
      </div>
    );
  }
}

export default App;
