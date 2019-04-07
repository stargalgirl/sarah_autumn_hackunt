import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import Dialog from './Dialog'
import TwoButtons from './TwoButtons'
import { List } from '@material-ui/core';
import TornadoChecklist from './TornadoChecklist'

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
            <br></br>
            <p>Location: Denton, TX 76205</p>
              <Dialog></Dialog>
          </div>
          <br></br>
          <TwoButtons></TwoButtons>
          <h3>Safety Checklist:</h3>
            <div className="wrapper">
              <br></br>
              <TornadoChecklist></TornadoChecklist>
            </div>
            
            <h3>Current Weather Radar:</h3>
            <img src="../badWeather.png"></img>
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
            <br></br>
            <p>Location: Denton, TX 76205</p>
              <Dialog></Dialog>
          </div>
          <br></br>
          <TwoButtons></TwoButtons>
          <h3>Safety Checklist:</h3>
            <div className="wrapper">
              <TornadoChecklist></TornadoChecklist>
            </div>
            
            <h3>Current Weather Radar:</h3>
            <img src="../badWeather.png"></img>
        </div>
      );
    }
    else if(index == 2){
      return(
        <div className="App">
          <Menu></Menu>
          <div>
            <p>SERVERE WEATHER CONDITION:</p>
            <div className = "fire_container">
            <h1>FIRE</h1>
            <img className="fire_picture" src= "../fire.png"/>
            </div>
            <br></br>
            <p>Location: Denton, TX 76205</p>
              <Dialog></Dialog>
          </div>
          <br></br>
          <TwoButtons></TwoButtons>
          <h3>Safety Checklist:</h3>
            <div className="wrapper">
              <TornadoChecklist></TornadoChecklist>
            </div>
            
            <h3>Current Weather Radar:</h3>
            <img src="../badWeather.png"></img>
        </div>
      );
    }
    else if (index == 3){
      return (
        <div className="App">
          <Menu></Menu>
          <div>
            <p>SERVERE WEATHER CONDITION:</p>
            <div className = "flood_container">
            <h1>FLOOD</h1>
            <img className="flood_picture" src= "../flood.png"/>
            </div>
            <br></br>
            <p>Location: Denton, TX 76205</p>
              <Dialog></Dialog>
          </div>
          <br></br>
          <TwoButtons></TwoButtons>
          <h3>Safety Checklist:</h3>
            <div className="wrapper">
              <TornadoChecklist></TornadoChecklist>
            </div>
            
            <h3>Current Weather Radar:</h3>
            <img src="../badWeather.png"></img>
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
            <img className="picture" src= "../hurricane.png"/>
            </div>
            <br></br>
            <p>Location: Denton, TX 76205</p>
              <Dialog></Dialog>
          </div>
          <br></br>
          <TwoButtons></TwoButtons>
            <h3>Safety Checklist:</h3>
            <div className="wrapper">
              <TornadoChecklist></TornadoChecklist>
            </div>
            
            <h3>Current Weather Radar:</h3>
            <img src="../badWeather.png"></img>
        </div>
      );
    }else{
      return(
        <div>Error</div>
      )
    }
  }
}

export default App;
