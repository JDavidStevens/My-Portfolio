import React, { Component } from 'react';
import TradingWheels from './TradingWheels';
import FridgeRaiders from './FridgeRaiders';
import Crf from './Crf';
// import './projects.css';



class Projects extends Component {
  render() {
    return (
      <div className="projects-wrapper" id="projects">
      <h1>Projects</h1>
        <TradingWheels/>
        <FridgeRaiders/>
        <Crf/>
      </div>
    );
  }
}

export default Projects;