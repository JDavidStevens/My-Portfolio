import React, { Component } from "react";
import "./about.css";

class About extends Component {
  render() {
    return (
      <div className="about-wrapper" id="about">
        <h1 className="about-title">About</h1>
        <div className="about-paragraphs">
          <p>
            I am a former brokerage representative, who has transitioned into a career
            in web development. While enjoying my time working with
            brokerage clients to help educate and assist them with their
            investments, I developed a strong interest in how technology is
            continually re-shaping the brokerage industry, along with almost
            everything else. This led me to pursue a career in web development. I currently work full time as a front end software developer intern for Health Catalyst.
           </p>

          <p>
            I thoroughly enjoy problem-solving and getting to know the tools and
            capabilities which technology provides to assist in all aspects of life.
          </p>

          <p>
            I am passionate about learning new things. Outside of school and
            work, I enjoy taking on do-it-yourself projects to learn how to
            repair things, particularly dirt bikes. I have also worked on cars,
            lawn mowers, and household appliances. I also enjoy reading and
            listening to various podcasts.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
