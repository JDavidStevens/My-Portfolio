import React, { Component } from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import './Crf.css';

import Video from '../../assets/Screen Shots/Klone_video.PNG';
import Gallery from '../../assets/Screen Shots/Klone_gallery.PNG';
import Hamburger from '../../assets/Screen Shots/HamburgerMenu_Klone.PNG';

class Crf extends Component {
  render() {
    return (
      <div className="crf-wrapper">
      <Carousel
      showThumbs={false}
      infiniteLoop={true}
      >
          <div>
          <img src={Video} alt=""/>
          <p>Embedded video</p>
          </div>
          <div>
          <img src={Gallery} alt=""/>
          <p>Image gallery and sticky menu</p>
          </div>
          <div>
          <img src={Hamburger} alt=""/>
          <p>Mobile view with hamburger menu</p>
          </div>
      </Carousel>
        <h1><a href="dsportklone1.com">Dsportklone1.com</a></h1>
        <p>Personally developed a clone of a portion of a popular motorcycle website. The site is mobile responsive and features an embedded video, sticky menu. It also includes a hamburger menu in mobile view.</p>
        <p>The front-end was developed using React, HTML, CSS, and JavaScript. The sever was created using Node.js and Express. </p>
        <p>Feel free to view the code to this project at: <a href="https://github.com/JDavidStevens/crf_clone.git">https://github.com/JDavidStevens/crf_clone.git</a></p>
      </div>
    );
  }
}

export default Crf;