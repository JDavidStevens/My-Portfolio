import React, { Component } from 'react';
import './title.css';

class Title extends Component {

  render(){
    return (
      <div className="title" id="home">
        <div className="full-name"><h1 className='first-name'>James</h1><h1>David Stevens</h1></div>
        <h2 className='job-title'>Web Developer</h2>
      </div>
    );
  }
}

export default Title;