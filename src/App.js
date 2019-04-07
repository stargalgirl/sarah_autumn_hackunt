import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import Dialog from './Dialog'
import TwoButtons from './TwoButtons'

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
      </div>
    );
  }
}

export default App;
