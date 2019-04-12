import React, { Component } from 'react';
// import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;