import React, { Component } from 'react';
import './App.css';

import Navbar from './components/navbar/navbar';
import Title from './components/title/title';
import About from './components/about/about';
import Stack from './components/stack/stack';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="nb-sticky">
       <Navbar/>        
      </div>
       <Title/>
       <About/>
       <Stack/>
       <Projects/>
       <Contact/> 
      </div>
    );
  }
}

export default App;
