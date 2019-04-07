import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import Dialog from './Dialog'
import TwoButtons from './TwoButtons'
import { List } from '@material-ui/core';
import TornadoChecklist from './TornadoChecklist'
import EarthquakeChecklist from './EarthquakeChecklist'
import HurricaneChecklist from './HurricaneChecklist'
import FloodChecklist from './FloodChecklist'
import FireChecklist from './FireChecklist'
import Stepper3 from './Stepper3'
import Stepper2 from './Stepper2'
import Stepper4 from './Stepper4'
import Stepper5 from './Stepper5'


var list = new List("tornado", "flood", "earthquake", "fire", "hurricane")
var index = Math.floor(Math.random() * 5)
//var threat = Math.floor(Math.random() * 5) + 10
//var weather = list[index];

class App extends Component {

  render() {
    console.log()
    if(index == 0){
      return (
        <div className="App">
          <Menu></Menu>
          <div>
            <p>WEATHER CONDITION SEVERITY: LEVEL 4</p>
            <Stepper4></Stepper4>
            <div className = "container">
            <h1>TORNADO</h1>
            <img className="picture" src= "../tornado.png"/>
            </div>
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
            <p>WEATHER CONDITION SEVERITY: LEVEL 2</p>
            <Stepper2></Stepper2>
            <div className = "container">
            <h1>EARTHQUAKE</h1>
            <img className="picture" src= "../earthquake.png"/>
            </div>
              <Dialog></Dialog>
          </div>
          <br></br>
          <TwoButtons></TwoButtons>
          <h3>Safety Checklist:</h3>
            <div className="wrapper">
              <EarthquakeChecklist></EarthquakeChecklist>
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
            <p>WEATHER CONDITION SEVERITY: LEVEL 5</p>
            <Stepper5></Stepper5>
            <div className = "fire_container">
            <h1>FIRE</h1>
            <img className="fire_picture" src= "../fire.png"/>
            </div>
              <Dialog></Dialog>
          </div>
          <br></br>
          <TwoButtons></TwoButtons>
          <h3>Safety Checklist:</h3>
            <div className="wrapper">
              <FireChecklist></FireChecklist>
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
            <p>WEATHER CONDITION SEVERITY: LEVEL 2</p>
            <Stepper2></Stepper2>
            <div className = "flood_container">
            <h1>FLOOD</h1>
            <img className="flood_picture" src= "../flood.png"/>
            </div>
              <Dialog></Dialog>
          </div>
          <br></br>
          <TwoButtons></TwoButtons>
          <h3>Safety Checklist:</h3>
            <div className="wrapper">
              <FloodChecklist></FloodChecklist>
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
            <p>WEATHER CONDITION SEVERITY: LEVEL 3</p>
            <Stepper3></Stepper3>
            <div className = "container">
            <h1>HURRICANE</h1>
            <img className="picture" src= "../hurricane.png"/>
            </div>
              <Dialog></Dialog>
          </div>
          <br></br>
          <TwoButtons></TwoButtons>
            <h3>Safety Checklist:</h3>
            <div className="wrapper">
              <HurricaneChecklist></HurricaneChecklist>
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
