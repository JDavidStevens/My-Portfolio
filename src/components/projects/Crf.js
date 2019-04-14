import React, { Component } from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './projects.css';

import Video from '../../assets/Screen Shots/Klone_video.PNG';
import Gallery from '../../assets/Screen Shots/Klone_gallery.PNG';
import Hamburger from '../../assets/Screen Shots/HamburgerMenu_Klone.PNG';
import Media from 'react-media';

class Crf extends Component {
  render() {
    return (
      <div>
      <Media
      query="(max-width:750px)"
      render={()=>
        <div>
          <h1 className="mobile-project-title"><a href="dsportklone1.com">Dsportklone1.com</a></h1>
        <Carousel
        showThumbs={false}
        infiniteLoop={true}
        className="carousel"
        showStatus={false}
        showIndicators={false}
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
        <div className="project-description">
        
        <p>Personally developed a clone of a portion of a popular motorcycle website. The site is mobile responsive and features an embedded video and sticky menu. It also includes a hamburger menu in mobile view.</p>
        <p>The front-end was developed using React, HTML, CSS, and JavaScript. The sever was created using Node.js and Express. </p>
        <p>Feel free to view the code to this project at: <a href="https://github.com/JDavidStevens/crf_clone.git">https://github.com/JDavidStevens/crf_clone.git</a></p>
      </div>
      </div>
      }
      />
      <Media
      query="(min-width:751px)"
      render={()=>
        <div className="project-wrapper">
        <Carousel
        showThumbs={false}
        infiniteLoop={true}
        className="carousel"
        showStatus={false}
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
        <div className="project-description">
        <h1><a href="dsportklone1.com">Dsportklone1.com</a></h1>
        <p>Personally developed a clone of a portion of a popular motorcycle website. The site is mobile responsive and features an embedded video and sticky menu. It also includes a hamburger menu in mobile view.</p>
        <p>The front-end was developed using React, HTML, CSS, and JavaScript. The sever was created using Node.js and Express. </p>
        <p>Feel free to view the code to this project at: <a href="https://github.com/JDavidStevens/crf_clone.git">https://github.com/JDavidStevens/crf_clone.git</a></p>
      </div>
      </div>
      }
      />
      </div>
    );
  }
}

export default Crf;