import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import Dialog from './Dialog'
import TwoButtons from './TwoButtons'
import { List } from '@material-ui/core';

var list = new List("tornado", "flood", "earthquake", "fire", "hurricane")
var index = Math.floor(Math.random() * 5)
//var weather = list[index];

class App extends Component {

  render() {
    console.log()
    if(index == 0){
      return (
        <div className="App">
          <Menu></Menu>
          <div>
            <p>SERVERE WEATHER CONDITION:</p>
            <div className = "container">
            <h1>TORNADO</h1>
            <img className="picture" src= "../tornado.png"/>
            </div>
              <Dialog></Dialog>
          </div>
          <br></br>
          <TwoButtons></TwoButtons>
        </div>
      );
    }
    else if(index == 1){
      return(
        <div className="App">
          <Menu></Menu>
          <div>
            <p>SERVERE WEATHER CONDITION:</p>
            <div className = "container">
            <h1>EARTHQUAKE</h1>
            <img className="picture" src= "../earthquake.png"/>
            </div>
              <Dialog></Dialog>
          </div>
          <br></br>
          <TwoButtons></TwoButtons>
        </div>
      );
    }
    else if(index == 2){
      return(
        <div className="App">
          <Menu></Menu>
          <div>
            <p>SERVERE WEATHER CONDITION:</p>
            <div className = "container">
            <h1>FIRE</h1>
            <img className="picture" src= "../fire.png"/>
            </div>
              <Dialog></Dialog>
          </div>
          <br></br>
          <TwoButtons></TwoButtons>
        </div>
      );
    }
    else if (index == 3){
      return (
        <div className="App">
          <Menu></Menu>
          <div>
            <p>SERVERE WEATHER CONDITION:</p>
            <div className = "container">
            <h1>FLOOD</h1>
            <img className="picture" src= "../flood.png"/>
            </div>
              <Dialog></Dialog>
          </div>
          <br></br>
          <TwoButtons></TwoButtons>
        </div>
      );
    }
    else if(index == 4){
      return (
        <div className="App">
          <Menu></Menu>
          <div>
            <p>SERVERE WEATHER CONDITION:</p>
            <div className = "container">
            <h1>HURRICANE</h1>
            <img className="picture" src= "../earthquake.png"/>
            </div>
              <Dialog></Dialog>
          </div>
          <br></br>
          <TwoButtons></TwoButtons>
        </div>
      );
    }else{
      return(
        <div>Hi</div>
      )
    }
  }
}

export default App;
