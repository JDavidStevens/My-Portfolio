import React, { Component } from "react";
import Media from "react-media";
import DropDown from "./dd_menu/dd";

import "./navbar.css";

class Navbar extends Component {
  state = {
    hamburger: true
  };

  handleHamburger = () => {
    this.setState({ hamburger: !this.state.hamburger });
  };

  render() {
    return (
      <div className="navbar">
        <Media
          query="(max-width:750px)"
          render={() => (
            <div>
              {this.state.hamburger === true ? (
                <div className="burger-wrapper">
                  <div className="burger-logo" onClick={this.handleHamburger}>
                    <div className="bar1" />
                    <div className="bar2" />
                    <div className="bar3" />
                  </div>
                </div>
              ) : (
                <div className="burger-wrapper-active">
                  <div
                    className="burger-logo-active"
                    onClick={this.handleHamburger}
                  >
                    <div className="bar1-active" />
                    <div className="bar2-active" />
                    <div className="bar3-active" />
                  </div>
                  <DropDown />
                </div>
              )}
            </div>
          )}
        />
        <Media
          query="(min-width:751px)"
          render={() => (
            <div>
              <div className="navbar-wrapper">
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#technologies">Technologies</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default Navbar;
