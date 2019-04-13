import React, { Component } from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './projects.css';

import LandingPage from '../../assets/Screen Shots/Landing.PNG';
import Auth0 from '../../assets/Screen Shots/TWLogin.PNG';
import WatchList from '../../assets/Screen Shots/TWWatch.PNG';
import TradeWindow from '../../assets/Screen Shots/TradeWindow.PNG'


class TradingWheels extends Component {
  render() {
    return (
      <div className="project-wrapper">
      <Carousel
      className="carousel"
      showThumbs={false}
      infiniteLoop={true}
      showStatus={false}
      >
          <div className='ci-container'>
          <img src={LandingPage} alt=""/>
          <p>Landing page includes actual market quotes from 3rd party API</p>
          </div>
          <div className='ci-container'>
          <img src={Auth0} alt=""/>
          <p>Login with Auth0 </p>
          </div>
          <div className='ci-container'>
          <img src={WatchList} alt=""/>
          <p>View stocks which you own, are thinking of buying, or pending buy/sale orders</p>
          </div>
          <div className='ci-container'>
          <img src={TradeWindow} alt=""/>
          <p>Trade window allows users to accurately place trade according to their specifications without confusing industry jargon</p>
          </div>
      </Carousel>
      <div className="project-description">
        <h1><a href="tradingwheelsinvestments.com">Tradingwheelsinvestments.com</a></h1>
        <p>A mock investment site designed for new or infrequent investors.</p>
        <p>The idea behind it is to show how a brokerage firm can remove the clutter and industry jargon which can be frustrating for less experienced investors.</p>
        <p>The site uses programmed logic to help users place trades accurately, according to their specifications, without having to know the vocabulary of the brokerage industry. </p>
        <p>The front-end was built using  

React, JavaScript, HTML, CSS, and Auth0. The server was created with Node.js. Database technologies include PostgeSQL and Massive.</p>
        <p>Feel free to view the code to this project at <a href="https://github.com/JDavidStevens/TradingWheels">https://github.com/JDavidStevens/TradingWheels</a></p>
        </div>
      </div>
    );
  }
}

export default TradingWheels;