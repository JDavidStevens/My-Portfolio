import React, { Component } from 'react';
import Media from 'react-media';
import DropDown from './dd_menu/dd';

import Hamburger from '../../assets/Portfolio Logos/hamburger-light.png';
import './navbar.css';

class Navbar extends Component {
  state={
    hamburger: true
  }

  handleHamburger=()=>{
    this.setState({hamburger:!this.state.hamburger})
  }

  render() {
    return (
      <div className="navbar">
      <Media
      query="(max-width:700px)"
      render={()=>
      <div>
        {this.state.hamburger===true?
      <div className="burger-wrapper">
      <img className="burger-logo" src={Hamburger} alt='' onClick={this.handleHamburger}/>
      </div> 
      :
      <div className="burger-wrapper-active">
        <img className="burger-logo-active" src={Hamburger} alt='' onClick={this.handleHamburger}/>
        <DropDown/>
      </div> 
      }
      </div>
      }
      />
      <Media 
      query="(min-width:701px)"
      render={()=>
      <div>
      <div className="navbar-wrapper">
        <ul >
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </div>
        </div>}/>
      </div>
      
    );
  }
}

export default Navbar;